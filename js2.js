document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '3b547c7e179d438199350eb3b0f0145b'; 
    const newsContainer = document.getElementById('news-container');
  
    // Fetch news from the News API
    async function fetchNews() {
      const response = await fetch('news.json');
      const data = await response.json();
      
      if (data.articles) {
        displayNews(data.articles);
      }
    }
  
    // Display news on the webpage
    function displayNews(articles) {
      newsContainer.innerHTML = '';
      
      articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
  
        newsItem.innerHTML = `
          <h2 class="news-title">${article.title}</h2>
          <p class="news-description">${article.description || 'No description available'}</p>
          <a class="news-link" href="${article.url}" target="_blank">Read more</a>
        `;
  
        newsContainer.appendChild(newsItem);
      });
    }
  
    // Initialize news fetching
    fetchNews();
  });
  