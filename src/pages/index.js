import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect, useState } from "react";
import Hero from "./../components/modules/index/Hero";
import Work from "@/components/modules/index/Work";
import Featured from "@/components/modules/index/Featured";
import Upcoming from "@/components/modules/index/Upcoming";
import Completed from "@/components/modules/index/Completed";
import Benifits from "@/components/modules/index/Benifits";
import Tier from "@/components/modules/index/Tier";
import Roadmap from "@/components/modules/index/Roadmap";
import Team from "@/components/modules/index/Team";
import Wallet from "@/components/Wallet";
import { fetchData } from "@/apiConfig";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";




export default function Home() {
  const [data, setData] = useState([]);
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
        const response = await fetchData("/team");
        setTeam(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);

  return (
    <>
      <Wallet />
      <Hero />
      <Featured data={data} />
      <Work />
      <Upcoming data={data} />
      <Completed />
      <Benifits />
      <Tier />
      <Roadmap />
      <Team team={team} />
      <ApplyToLaunch />
      {/* <ApplyToLaunch /> */}
    </>
  );
}


