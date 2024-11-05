import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faDiceD6,
  faWindowRestore,
  faRoad,
  faUserAstronaut,
  faGlobe,
  faArrowDown,
  faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faDiscord,
  faTwitch,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";
import PageHeader from "@/components/base/PageHeader";
import Link from "next/link";


const ProjectDetails = () => {
  return (
    <>
      <PageHeader title="Project Details" text="project details" />
      {/* ================> Project Details start here <================== */}
      <section className="pro-details padding-top padding-bottom">
        <div className="container">
          <div className="pro-details__wrapper">
            {/* project item */}
            <div className="pro-details__block mb-4">
              <div className="pro-details__block-inner">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-7">
                    <div className="pro-details__item-wrap">
                      <div className="pro-details__item">
                        <div className="pro-details__item-thumb">
                          <img width="auto" src="/images/igo/author/1.png"
                            alt="IGO Project"
                          />
                        </div>
                        <div className="pro-details__item-content">
                          <h4>
                            Dexer Xone <span>(Bzon)</span>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Repellendus obcaecati quas ex, praesentium
                            omnis cum, corrupti repudiandae placeat sapiente sit
                            exercitationem mollitia veniam illum. Autem nobis
                            aliquid provident illo ad.
                          </p>
                        </div>
                      </div>
                      <div className="btn-group mt-4 d-flex flex-wrap gap-20">
                        <Link
                          href="/login"
                          className="default-btn default-btn--small"
                        >
                          <span>Claim Token</span>
                        </Link>
                        <Link
                          href="/signup"
                          className="default-btn default-btn--small default-btn--secondary"
                        >
                          <span>Register Now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="pro-details__info">
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <div className="pro-details__info-item">
                            <h6 className="pro-details__info-name">
                              Total Supply
                            </h6>
                            <p className="pro-details__info-value">
                              1,000,000,000 Bzon
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="pro-details__info-item">
                            <h6 className="pro-details__info-name">FDV</h6>
                            <p className="pro-details__info-value">30M USD</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="pro-details__info-item">
                            <h6 className="pro-details__info-name">
                              Initial Supply
                            </h6>
                            <p className="pro-details__info-value">
                              1,300,000,0 Bzon
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="pro-details__info-item">
                            <h6 className="pro-details__info-name">
                              Initial Market Cap
                            </h6>
                            <p className="pro-details__info-value">6.48M USD</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* token infos */}
            <div className="pro-details__token mb-5">
              <div className="row g-4 row-cols-auto ">
                <div className="col">
                  <div className="pro-details__token-item d-flex flex-wrap justify-content-between align-items-center gap-40">
                    <div className="pro-details__token-title">
                      <span>$</span>
                      <h6>Token Price :</h6>
                    </div>
                    <div className="pro-details__token-value">
                      <p>
                        0.25 <sub>USD</sub>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="pro-details__token-item">
                    <p>30% at TGE, evenly per quarter 4 quarters, Best Sale!</p>
                  </div>
                </div>
                <div className="col">
                  <div className="pro-details__token-item d-flex flex-wrap justify-content-between align-items-center gap-40">
                    <div className="pro-details__token-title">
                      <span>$</span>
                      <h6>Token Price :</h6>
                    </div>
                    <div className="pro-details__token-value">
                      <p>
                        250000 <sub>USD</sub>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* project description */}
            <div className="pro-details__desc">
              <div className="row flex-lg-row-reverse g-5">
                <div className="col-lg-8">
                  <div className="pro-details__desc-content">
                    <div
                      data-bs-spy="scroll"
                      data-bs-target="#pro-details-navlist"
                      data-bs-smooth-scroll="true"
                      data-bs-root-margin="0px 0px -60%"
                      className="scrollspy-example"
                      tabIndex={0}
                    >
                      {/* about */}
                      <section id="pro-details-about">
                        <h4>About TorkGo</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Optio animi, id ducimus eum tempora minus labore
                          saepe fuga eius dolor non veritatis excepturi
                          perferendis molestiae nulla quia officiis sunt soluta.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Laborum dolores alias aliquid iusto eaque
                          perferendis.
                        </p>
                        <div className="pro-details__img my-4">
                          <img width="auto" src="/images/blog/single/01.jpg"
                            alt="Project Image"
                          />
                        </div>
                        <h5>Metaverse</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Soluta, debitis tenetur dolorem a ab voluptas
                          dolore nesciunt saepe optio amet temporibus ipsum
                          beatae est quisquam.
                        </p>
                        <div className="pro-details__img my-4">
                          <img width="auto" src="/images/blog/single/02.jpg"
                            alt="Project Image"
                          />
                        </div>
                      </section>
                      {/* token */}
                      <section id="pro-details-token">
                        <h4> TorkGo Token Details</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Optio animi, id ducimus eum tempora minus labore
                          saepe fuga eius dolor non veritatis excepturi
                          perferendis molestiae nulla quia officiis sunt soluta.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Laborum dolores alias aliquid iusto eaque
                          perferendis.
                        </p>
                        <div className="pro-details__token-info mt-4">
                          <h5>Token Info</h5>
                          <ul className="pro-details__tokenlist">
                            <li className="pro-details__tokenlist-item">
                              <FontAwesomeIcon icon={faDiceD6} />
                              Lorem ipsum dolor sit amet.
                            </li>
                            <li className="pro-details__tokenlist-item">
                              Opsum dolor sit amet.
                            </li>
                            <li className="pro-details__tokenlist-item">
                              <FontAwesomeIcon icon={faDiceD6} />
                              Dolor sit amet.
                            </li>
                            <li className="pro-details__tokenlist-item">
                              <FontAwesomeIcon icon={faDiceD6} />
                              Zit amet Lorem, ipsum.
                            </li>
                            <li className="pro-details__tokenlist-item">
                              <FontAwesomeIcon icon={faDiceD6} />
                              Xmet dio lor em.
                            </li>
                            <li className="pro-details__tokenlist-item">
                              <FontAwesomeIcon icon={faDiceD6} />
                              Elor sit amet.
                            </li>
                          </ul>
                        </div>
                        <div className="pro-details__img my-4">
                          <img width="auto" src="/images/blog/single/03.jpg"
                            alt="Token Image"
                          />
                        </div>
                      </section>
                      {/* Roadmap */}
                      <section id="pro-details-roadmap">
                        <h4> TorkGo Roadmap</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Optio animi, id ducimus eum tempora minus labore
                          saepe fuga eius dolor non veritatis excepturi
                          perferendis molestiae nulla quia officiis sunt soluta.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Laborum dolores alias aliquid iusto eaque
                          perferendis.
                        </p>
                        <div className="pro-details__img my-4">
                          <img width="auto" src="/images/blog/single/04.jpg"
                            alt="roadmap Image"
                          />
                        </div>
                      </section>
                      {/* backers */}
                      <section id="pro-details-backers">
                        <h4> Our Backers</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Optio animi, id ducimus eum tempora minus labore
                          saepe fuga eius dolor non veritatis excepturi
                          perferendis molestiae nulla quia officiis sunt soluta.
                        </p>
                        <div className="pro-details__img my-4">
                          <img width="auto" src="/images/blog/single/05.jpg"
                            alt="Project Image"
                          />
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside>
                    <div className="pro-details__desc-nav">
                      {/* navlist */}
                      <div
                        className="list-group bg--primary-color mb-4"
                        id="pro-details-navlist"
                      >
                        <Link className="list-group-item list-group-item-action"
                          href="#pro-details-about"
                        >
                          <FontAwesomeIcon icon={faWindowRestore} />
                          About
                        </Link>
                        <Link className="list-group-item list-group-item-action"
                          href="#pro-details-token"
                        >
                          {" "}
                          <FontAwesomeIcon icon={faDiagramProject} />
                          Token
                        </Link>
                        <Link className="list-group-item list-group-item-action"
                          href="#pro-details-roadmap"
                        >
                          <FontAwesomeIcon icon={faRoad} />
                          Roadmap
                        </Link>
                        <Link className="list-group-item list-group-item-action"
                          href="#pro-details-backers"
                        >
                          <FontAwesomeIcon icon={faUserAstronaut} />
                          Backers
                        </Link>
                      </div>
                      {/* pro details link */}
                      <div className="pro-details__links">
                        <div className="pro-details__links-item">
                          <div className="pro-details__links-title">
                            <h6>Social Media</h6>
                          </div>
                          <div className="pro-details__links-content">
                            <ul className="social">
                              <li className="social__item">
                                <Link href="#" className="social__link">
                                  <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                              </li>
                              <li className="social__item">
                                <Link href="#" className="social__link">
                                  <FontAwesomeIcon icon={faDiscord} />
                                </Link>
                              </li>
                              <li className="social__item">
                                <Link href="#" className="social__link">
                                  <FontAwesomeIcon icon={faTwitch} />
                                </Link>
                              </li>
                              <li className="social__item">
                                <Link href="#" className="social__link">
                                  <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                              </li>
                              <li className="social__item">
                                <Link href="#" className="social__link">
                                  <FontAwesomeIcon icon={faLinkedinIn} />
                                </Link>
                              </li>
                              <li className="social__item">
                                <Link href="#" className="social__link">
                                  <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pro-details__links-item">
                          <div className="pro-details__links-title">
                            <h6>Website Link</h6>
                          </div>
                          <div className="pro-details__links-content">
                            <Link className="pro-details__links-btn" href="#">
                              www.example.com{" "}
                              <span>
                                <FontAwesomeIcon icon={faGlobe} />
                              </span>
                            </Link>
                          </div>
                        </div>
                        <div className="pro-details__links-item">
                          <div className="pro-details__links-title">
                            <h6>Download Whitepaper</h6>
                          </div>
                          <div className="pro-details__links-content">
                            <Link className="pro-details__links-btn" href="#">
                              Whitepaper{" "}
                              <span>
                                <FontAwesomeIcon icon={faCloudArrowDown} />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================> Project Details end here <================== */}
      <ApplyToLaunch />
    </>
  );
};
export default ProjectDetails;
