import { useEffect, useState } from "react";
import Simple from "@/components/base/Simple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PageHeader from "@/components/base/PageHeader";
import NewsLetterTwo from "@/components/partials/NewsLetterTwo";
import { fetchData } from "@/apiConfig";
import Link from "next/link";



const Team = () => {
  const [team, setTeam] = useState([]);
  const [investor, setInvestor] = useState([]);



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
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/investor");
        setInvestor(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);


  return (
    <>

      <PageHeader title="Our Team" text="Team" />
      {/* ==========>> Team1 Section start Here <<========== */}
      <section className="team padding-top padding-bottom shape-1r">
        <div className="container">
          <div className="section-header section-header--middle">
            <div className="section-header__content">
              <div className="section-header__titlebar">
                <Simple subTitle="Team" title="Meet the Crew" />
              </div>
            </div>
          </div>
          <div className="team__wrapper">
            <div className="row justify-content-center g-4">
              {team.map((item) => {
                return (
                  <div key={item.id} className="col-lg-3 col-sm-6">
                    <div
                      className="team__item aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      <div className="team__thumb">
                        <img width="auto" src={item.img} alt="Team Member Image" />
                      </div>
                      <div className="team__content">
                        <h4>
                          <Link href="/team-member">{item.name}</Link>
                        </h4>
                        <p>{item.role}</p>
                        <ul className="social">
                          <li className="social__item">
                            <Link href="#" className="social__link">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link href="#" className="social__link">
                              <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link href="#" className="social__link">
                              <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link href="#" className="social__link">
                              <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* ==========>> Team1 Section Ends Here <<========== */}
      {/* ==========>> Team2 Section start Here <<========== */}
      <section className="team padding-top padding-bottom bg--primary-color">
        <div className="container">
          <div className="section-header section-header--middle">
            <div className="section-header__content">
              <div className="section-header__titlebar">
                <h2 className="section__header__title">Our Investor</h2>
              </div>
            </div>
          </div>
          <div className="team__wrapper">
            <div className="row justify-content-center g-4">
              {investor.map((item) => {
                return (
                  <div key={item.id} className="col-lg-3 col-sm-6">
                    <div
                      className="team__item aos-init team__item--style2 aos-animate team__item aos-init aos-animate--style2"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      <div className="team__thumb">
                        <img width="auto" src={item.img} alt="Team Member Image" />
                      </div>
                      <div className="team__content">
                        <h4>
                          <Link href="/team-member">{item.name}</Link>
                        </h4>
                        <p>{item.role}</p>
                        <ul className="social">
                          <li className="social__item">
                            <Link href="#" className="social__link">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link href="#" className="social__link">
                              <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link href="#" className="social__link">
                              <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link href="#" className="social__link">
                              <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* ==========>> Team2 Section Ends Here <<========== */}
      <NewsLetterTwo />
    </>
  );
};
export default Team;
