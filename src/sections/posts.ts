import { getPosts } from "../api/posts";
import Post from "../types/post";
import { formatDate } from "../utils/formatters";

export const loadPosts = async () => {
  const postsEl = document.querySelector("#posts");
  const posts: Post[] = await getPosts();
  posts.forEach((post) => {
    postsEl!.append(getPostElement(post));
  });
};

const getPostElement = (post: Post) => {
  const postEl = document.createElement("div");
  postEl.className =
    "col-4 col-medium-2 p-card--highlighted border-top u-no-padding--top u-no-padding--bottom post";
  postEl.innerHTML = `
        <header class="post-content post-header p-text--small">
         ${post.topic?.length ? post.topic.join(", ") : "General"}
        </header>
        <div class="post-body post-content">  
        <a class="link-text" href=${post.link}>
        <img class="p-card__image" src=${post.featured_media} 
        alt=${post.title.rendered} />
        </a>
        <h3 class="p-heading--4 title-link">
        <a class="link-text" href=${post.link}>
        ${post.title.rendered}</a>
        </h3>
        <p class="p-heading--6">By <a class="link-text" href=${
          post._links.author?.[0]?.href ?? "#"
        }>
        ${post._embedded.author?.[0]?.name ?? "Ed."}</a> on 
        ${formatDate(post.date)}</p>
        </div>
        <div class="caption-block">
        <footer class="post-content post-footer">
        <p class="u-no-padding p-text--small">${post.type}</p>
        </footer>
        <div>`;
  return postEl;
};
