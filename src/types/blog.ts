type Author = {
  name: string;
  image: string;
  designation: string;
};

export interface Blog {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: {
    name: string;
    image: string;
    designation: string;
  };
  tags: string[];
  publishDate: string;
  content?: string; // Add full content for blog details
  estimatedReadTime?: string;
  views?: number;
}
