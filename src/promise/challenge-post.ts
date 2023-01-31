import fetch from 'node-fetch';

(() => {
  const API = 'https://api.escuelajs.co/api/v1';

  type ProductData = {
    title: string,
    price: number,
    description: string,
    categoryId: number,
    images: string[]
  }
  
  const postData = (urlApi: string, data: ProductData) => {
    const response = fetch(urlApi, {
      method: 'POST',
      // @ts-ignore
      mode: 'cors', 
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(data)
    });
    return response;
  }

  const data: ProductData = {
    title: 'A new product',
    price: 69,
    description: 'Hello from curso de asincronismo',
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any?r=0.9178516507833767"]
  }

  postData(`${API}/products`, data)
    .then(response => response.json())
    .then((data: any) => {
      console.log(data);
      fetch(`${API}/products/${data.id}`)
        .then(response => response.json())
        .then(data => console.log(data));
    })
})();