import { useEffect, useState } from "react";
import PageHeader from "@/components/base/PageHeader";
import Blog from "@/components/modules/blog2/Blog";
import { fetchData } from '@/apiConfig';

function Blog2() {
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
      <PageHeader title="Blog With Sidebar" text="Blog With Sidebar" />
      <Blog blogs={blogs} />
    </>
  );
}

export default Blog2;
