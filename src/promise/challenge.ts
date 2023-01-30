import fetch from "node-fetch";

(() => {
  const API = 'https://api.escuelajs.co/api/v1';

  const simpleFetch = () => {
    fetch(`${API}/products`)
      .then((response: Response) => response.json())
      .then((data: any[]) => console.log(data))
      .catch((error: Error) => console.log(error))
    }
    
  const longerFetch = () => {
    fetch(`${API}/products`)
      .then((response: Response) => response.json())
      .then((products: any[]) => {
        console.log(products[0])
        return fetch(`${API}/products/${products[0].id}`)
      })
      .then((response: Response) => response.json())
      .then((product: any) => {
        console.log('product title: ' + product.title);
        return fetch(`${API}/categories/${product.category.id}`)
      })
      .then((response: Response) => response.json())
      .then((category: any) => {
        console.log('Product category: ' + category.name);
      })
      .catch((error: Error) => console.log(error))
      .finally(() => console.log('Finished'))
  }
  longerFetch();
})();

