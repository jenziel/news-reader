const BASEURLPROD = `https://newsapi.org`
const BASEURLMOCK = `https://bf88d35f-84ae-4a19-8e3c-531d4869d089.mock.pstmn.io`
const APIKEY = `2d9966d5b2fd4408bc544f2b0a6c06ae`
export function getTopHeadlines(){
   return fetch(`${BASEURLPROD}/v2/top-headlines?country=us&apiKey=${APIKEY}`).then(
    (response) => {
        if (!response.ok) {
          throw new Error(`Headlines not found.`);
        }
        return response.json();
      }
   )
}
export function getSearchResults(query){
    return fetch(`${BASEURLPROD}/v2/everything?q=${query}&from=2023-12-18&sortBy=publishedAt&apiKey=${APIKEY}`).then(
     (response) => {
         if (!response.ok) {
           throw new Error(`Unable to access search results.`);
         }
         return response.json();
       }
    )
 }
