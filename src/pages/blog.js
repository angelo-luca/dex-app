import { useEffect, useState } from "react";
import PageHeader from "@/components/base/PageHeader";
import BlogComponent from "./../components/modules/blog/Blog";
import { fetchData } from '@/apiConfig';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/blog");
        setBlogs(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);
  return (
    <>
      <PageHeader title="Latest Blogs" text="Blog" />
      <BlogComponent blogs={blogs} />
    </>
  );
};

export default Blog;
