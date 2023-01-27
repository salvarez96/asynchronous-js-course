const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = event => {
    if (xhttp.readyState === 4 && xhttp.status === 400) {
      callback(null, JSON.parse(xhttp.responseText));
    } else {
      const error = new Error(`Error ${urlApi}`);
      return callback(error, null);
    }
  }
  xhttp.send();
}