import fetchData from "./index";

export const getPosts = async () => {
  return await fetchData("/posts.json");
};
