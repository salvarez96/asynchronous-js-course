import fetch from "node-fetch";

(() => {
  const API = 'https://api.escuelajs.co/api/v1';

  const fetchData = async (urlApi: string) => {
    try {
      const response = await fetch(urlApi);
      const data: any = response.json();
      return data;
    } catch (e) {
      console.error(e, 'something happened :(');
    }
  }

  const callFetch = async (urlApi: string) => {
    try {
      const data: any[] = await fetchData(urlApi);
      console.log(data.length);
      const specificProduct = data.findIndex((item: any) => item.id === 63);
      console.log(data[specificProduct]);
      console.log(data[specificProduct].title);
      console.log(data[specificProduct].category.name);
    } catch (e) {
      console.error(e, 'aaaaand you fd up');
    }
  }

  callFetch(`${API}/products`);
})();

// 63