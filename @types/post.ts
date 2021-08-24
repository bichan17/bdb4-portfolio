type PostType = {
  slug: string;
  title: string;
  date: string;
  project_link: string;
  published: boolean;
  type: string;
  tags: Array<string>;
  content: string;
};

export default PostType;
