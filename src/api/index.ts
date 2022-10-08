const BASE_URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2";

const fetchData = async (endpoint: string, options?: RequestInit) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  return response.json();
};

export default fetchData;
