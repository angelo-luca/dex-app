export const fetchData = async (url) => {
   const response = await fetch(process.env.BASE_API_URL + url);
   const data = await response.json();
   return data;
}