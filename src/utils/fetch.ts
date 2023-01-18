/* eslint-disable no-console */
export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8e8ca0baaamsh13ca89b840462c9p12e9dfjsn91a887697322',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
  },
};

fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
