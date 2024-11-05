import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import PageHeader from "@/components/base/PageHeader";
import ApplyToLaunch from "../components/common/ApplyToLaunch";
SwiperCore.use([Autoplay, Navigation, Pagination]);
import { useState, useEffect } from "react";
import Roadmap from "@/components/modules/roadmap/Roadmap";
import { fetchData } from "@/apiConfig";



const RoadMap = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/roadmap");
        setData(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);



  return (
    <>
      <PageHeader title="Our Roadmap" text="roadmap" />
      <Roadmap data={data} />
      <ApplyToLaunch />
    </>
  );
};
export default RoadMap;
