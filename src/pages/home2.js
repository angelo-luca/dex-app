import CounterTwo from "@/components/common/CounterTwo";
import { useEffect, useState } from "react";
import Banner from "@/components/modules/home2/Banner";
import Upcoming from "@/components/modules/home2/Upcoming";
import Completed from "@/components/modules/home2/Completed";
import Benifits from "@/components/modules/home2/Benifits";
import Token from "@/components/modules/home2/Token";
import Roadamap from "@/components/modules/home2/Roadamap";
import FAQ from "@/components/modules/home2/Faq";
import Work from "@/components/modules/home2/Work";
import ApplyToLaunchTwo from "@/components/common/ApplyToLaunchTwo";
import { fetchData } from "@/apiConfig";
import Team from "@/components/common/Team";



const Home2 = () => {
  const [data, setData] = useState([]);
  const [tokenomics, setTokenomics] = useState([]);
  const [team, setTeam] = useState([]);

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
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/tokenomics");
        setTokenomics(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/team");
        setTeam(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);

  return (
    <>
      <Banner />
      <CounterTwo />
      <Upcoming data={data} />
      <Completed data={data} />
      <Benifits />
      <Token tokenomics={tokenomics} />
      <Roadamap />
      <Team team={team} />
      <FAQ />
      <Work />
      <ApplyToLaunchTwo />
    </>
  );
};
export default Home2;
