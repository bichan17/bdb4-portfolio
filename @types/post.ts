type PostType = {
  slug: string;
  title: string;
  date: string;
  lead_image?: string;
  project_link: string;
  published: boolean;
  tags: Array<string>;
  content: string;
};

export default PostType;
