import Author from "./author";

export default interface Post {
  id: number;
  link: string;
  type: string;
  topic: number[];
  date: string;
  title: {
    rendered: string;
  };
  featured_media: string;
  _embedded: {
    author: Author[];
  };
  _links: {
    author: {
      href: string;
      embeddable: boolean;
    }[];
  };
}
