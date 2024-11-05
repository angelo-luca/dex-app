import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";
import PageHeader from "@/components/base/PageHeader";
import { useState, useEffect } from "react";
import UpcommingTwo from "@/components/modules/project/UpcomingTwo";
import { fetchData } from "@/apiConfig";
import Counter from "@/components/common/Counter";
import Upcoming from "@/components/modules/project/Upcoming";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Project = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/notes");
        setData(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);

  return (
    <>
      <PageHeader title="Project" text="Project" />
      <Upcoming data={data} />
      <Counter />
      <UpcommingTwo />
      <ApplyToLaunch />
    </>
  );
};
export default Project;
