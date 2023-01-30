(() => {
  // @ts-ignore
  const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  const API = 'https://api.escuelajs.co/api/v1';
  
  function fetchData(urlApi: string, callback: any) {
    let xhttp = new XMLHttpRequest();
  
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          callback(null, JSON.parse(xhttp.responseText));
        } else {
          const error = new Error(`Error ${urlApi}`);
          return callback(error, null);
        }
      }
    }
    xhttp.send();
  }

  fetchData(`${API}/products`, (error1: Error, data1: any) => {
    if(error1) return console.error(error1);
    console.log(data1[0].title);
    console.log(data1[0].category.name);
    fetchData(`${API}/products/${data1[0].id}`, (error2: Error, data2: any) => {
      if(error2) return console.error(error2);
      fetchData(`${API}/categories/${data2.category.id}`, (error3: Error, data3: any) => {
        if(error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      });
    });
  });
})();