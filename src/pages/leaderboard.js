import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faMinus,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";
import PageHeader from "@/components/base/PageHeader";
import Link from "next/link";



const Leaderboard = () => {
  return (
    <>
      <PageHeader title="Leader Board" text="Leaderboard" />
      {/* ================> Leaderboard section  start here <================== */}
      <section className="leaderboard padding-top padding-bottom">
        <div className="container">
          <div className="leaderboard__wrapper">
            <div className="table-responsive">
              <table className="table table-borderless leaderboard__table">
                <thead>
                  <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Project Name</th>
                    <th scope="col">Public Key</th>
                    <th scope="col">Locked</th>
                    <th scope="col">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="leaderboard__item">
                    <td>
                      <div className="leaderboard--level-freez">
                        <FontAwesomeIcon icon={faMinus} />
                      </div>
                    </td>
                    <th scope="row">01</th>
                    <td>
                      <div className="lead-project position-relative">
                        <div className="lead-project__thumb">
                          <img width="auto" src="/images/igo/author/1.png"
                            alt="Project Image"
                          />
                        </div>
                        <div className="lead-project__content">
                          <h6>
                            <Link
                              className="stretched-link"
                              href="/projectdetails"
                            >
                              Battle Ground
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0x95e441....ddd953454</td>
                    <td>135 Days</td>
                    <td>$39300090</td>
                  </tr>
                  <tr className="leaderboard__item">
                    <td>
                      <div className="leaderboard--level-up">
                        +1
                        <FontAwesomeIcon icon={faAngleUp} />
                      </div>
                    </td>
                    <th scope="row">02</th>
                    <td>
                      <div className="lead-project position-relative">
                        <div className="lead-project__thumb">
                          <img width="auto" src="/images/igo/author/2.png"
                            alt="Project Image"
                          />
                        </div>
                        <div className="lead-project__content">
                          <h6>
                            <Link
                              className="stretched-link"
                              href="/projectdetails"
                            >
                              Frozen city
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0x95e441....ddd953454</td>
                    <td>235 Days</td>
                    <td>$39300090</td>
                  </tr>
                  <tr className="leaderboard__item">
                    <td>
                      <div className="leaderboard--level-down">
                        {" "}
                        -1
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </td>
                    <th scope="row">03</th>
                    <td>
                      <div className="lead-project position-relative">
                        <div className="lead-project__thumb">
                          <img width="auto" src="/images/igo/author/3.png"
                            alt="Project Image"
                          />
                        </div>
                        <div className="lead-project__content">
                          <h6>
                            <Link
                              className="stretched-link"
                              href="/projectdetails"
                            >
                              Monster Squad{" "}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0x95e441....ddd953454</td>
                    <td>55 Days</td>
                    <td>$230090</td>
                  </tr>
                  <tr className="leaderboard__item">
                    <td>
                      <div className="leaderboard--level-freez">
                        <FontAwesomeIcon icon={faMinus} />
                      </div>
                    </td>
                    <th scope="row">04</th>
                    <td>
                      <div className="lead-project position-relative">
                        <div className="lead-project__thumb">
                          <img width="auto" src="/images/igo/author/4.png"
                            alt="Project Image"
                          />
                        </div>
                        <div className="lead-project__content">
                          <h6>
                            <Link
                              className="stretched-link"
                              href="/projectdetails"
                            >
                              RobotX Ply
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0x65e441....ddd9534353</td>
                    <td>90 Days</td>
                    <td>$5300090</td>
                  </tr>
                  <tr className="leaderboard__item">
                    <td>
                      <div className="leaderboard--level-up">
                        {" "}
                        +2
                        <FontAwesomeIcon icon={faAngleUp} />
                      </div>
                    </td>
                    <th scope="row">05</th>
                    <td>
                      <div className="lead-project position-relative">
                        <div className="lead-project__thumb">
                          <img width="auto" src="/images/igo/author/5.png"
                            alt="Project Image"
                          />
                        </div>
                        <div className="lead-project__content">
                          <h6>
                            <Link
                              className="stretched-link"
                              href="/projectdetails"
                            >
                              SpeeDEXIDO
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0x95e441....ddd953454</td>
                    <td>65 Days</td>
                    <td>$600090</td>
                  </tr>
                  <tr className="leaderboard__item">
                    <td>
                      <div className="leaderboard--level-down">
                        {" "}
                        -1
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </td>
                    <th scope="row">06</th>
                    <td>
                      <div className="lead-project position-relative">
                        <div className="lead-project__thumb">
                          <img width="auto" src="/images/igo/author/6.png"
                            alt="Project Image"
                          />
                        </div>
                        <div className="lead-project__content">
                          <h6>
                            <Link
                              className="stretched-link"
                              href="/projectdetails"
                            >
                              TorkBall Cup
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0x95e441....ddd953454</td>
                    <td>95 Days</td>
                    <td>$930090</td>
                  </tr>
                  <tr className="leaderboard__item">
                    <td>
                      <div className="leaderboard--level-down">
                        {" "}
                        -2
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </td>
                    <th scope="row">07</th>
                    <td>
                      <div className="lead-project position-relative">
                        <div className="lead-project__thumb">
                          <img width="auto" src="/images/igo/author/7.png"
                            alt="Project Image"
                          />
                        </div>
                        <div className="lead-project__content">
                          <h6>
                            <Link
                              className="stretched-link"
                              href="/projectdetails"
                            >
                              NinJa Hattori
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0x95e441....ddd953454</td>
                    <td>5 Days</td>
                    <td>$300090</td>
                  </tr>
                  <tr className="leaderboard__item">
                    <td>
                      <div className="leaderboard--level-up">
                        {" "}
                        +3
                        <FontAwesomeIcon icon={faAngleUp} />
                      </div>
                    </td>
                    <th scope="row">08</th>
                    <td>
                      <div className="lead-project position-relative">
                        <div className="lead-project__thumb">
                          <img width="auto" src="/images/igo/author/8.png"
                            alt="Project Image"
                          />
                        </div>
                        <div className="lead-project__content">
                          <h6>
                            <Link
                              className="stretched-link"
                              href="/projectdetails"
                            >
                              TorkGo XoX
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0x95e441....ddd955412</td>
                    <td>120 Days</td>
                    <td>$300090</td>
                  </tr>
                  <tr className="leaderboard__item">
                    <td>
                      <div className="leaderboard--level-down">
                        {" "}
                        -1
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </td>
                    <th scope="row">09</th>
                    <td>
                      <div className="lead-project position-relative">
                        <div className="lead-project__thumb">
                          <img width="auto" src="/images/igo/author/9.png"
                            alt="Project Image"
                          />
                        </div>
                        <div className="lead-project__content">
                          <h6>
                            <Link
                              className="stretched-link"
                              href="/projectdetails"
                            >
                              GamFier DeF
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0x95e441....ddd953454</td>
                    <td>25 Days</td>
                    <td>$50090</td>
                  </tr>
                  <tr className="leaderboard__item">
                    <td>
                      <div className="leaderboard--level-down">
                        {" "}
                        -1
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </td>
                    <th scope="row">10</th>
                    <td>
                      <div className="lead-project position-relative">
                        <div className="lead-project__thumb">
                          <img width="auto" src="/images/igo/author/1.png"
                            alt="Project Image"
                          />
                        </div>
                        <div className="lead-project__content">
                          <h6>
                            <Link
                              className="stretched-link"
                              href="/projectdetails"
                            >
                              NFTiX HuB Guy
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>0x95e441....ddd953454</td>
                    <td>235 Days</td>
                    <td>$39300090</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="pagination mt-5 justify-content-center">
              <li className="page-item disabled">
                <span className="page-link">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </span>
              </li>
              <li className="page-item active" aria-current="page">
                <span className="page-link">1</span>
              </li>
              <li className="page-item">
                <Link href="#" className="page-link">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ================> Leaderboard section  end here <================== */}
      <ApplyToLaunch />
    </>
  );
};
export default Leaderboard;
