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

  async function* useFetchedData(urlApi: string) {
    const data: any[] = await fetchData(urlApi);
    yield console.log(data[0]);
    yield console.log(data[0].title);
    yield console.log(data[0].category.name);
  }

  const fetchingData = useFetchedData(`${API}/products`);
  fetchingData.next();
  fetchingData.next();
  fetchingData.next();
  fetchingData.next();
})();