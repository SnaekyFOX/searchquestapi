// script.js

  function search() {
    var searchInput = document.getElementById('search-input').value;
    var apiKey = 'AIzaSyAC5sJMrwPbHcG--I8clAC-Ud44sB0t8Nk';  // Google API Key
    var cx = '12621aba9aece4fd3';  // Custom Search Engine ID

    var apiUrl = 'https://www.googleapis.com/customsearch/v1?q=' + encodeURIComponent(searchInput) + '&key=' + apiKey + '&cx=' + cx;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayResults(data.items);
      })
      .catch(error => console.error('Error:', error));
  }

  function displayResults(results) {
    var resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    if (results && results.length > 0) {
      results.forEach(function(result) {
        var resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        var resultLink = document.createElement('a');
        resultLink.href = result.link;
        resultLink.textContent = result.title;

        var resultSnippet = document.createElement('p');
        resultSnippet.textContent = result.snippet;

        resultItem.appendChild(resultLink);
        resultItem.appendChild(resultSnippet);

        resultsContainer.appendChild(resultItem);
      });
    } else {
      resultsContainer.textContent = 'Sonuç bulunamadı.';
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      search();
    }
  }

  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
  }