export function getTopHeadlines(){
   return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2d9966d5b2fd4408bc544f2b0a6c06ae').then(
    (response) => {
        if (!response.ok) {
          throw new Error(`Movies not found.`);
        }
        return response.json();
      }
   )
}