import CountUp from "react-countup";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";
import PageHeader from "@/components/base/PageHeader";
import Button from "@/components/base/Button";
import { useState } from "react";



const Farming = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <>
      <PageHeader title="Farming" text="farming" />
      {/* ================> farming start here <================== */}
      <div className="farming padding-top padding-bottom">
        <div className="container">
          <div className="farming__wrapper">
            <div className="row g-5">
              <div className="col-12">
                <div className="farming__item">
                  <div
                    className="farming__item-header"
                    data-toggle-content="farming__content1"
                    onClick={() => setShow1(!show1)}
                  >
                    <div className="farming__thumb">
                      <img width="auto" src="/images/igo/author/3.png"
                        alt="Project img"
                      />
                    </div>
                    <div className="farming__content">
                      <div className="farming__content-title">
                        <h4>TorkPad LP Stacking</h4>
                        <p>TPAD-BNB/ TYPAD</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem rerum non illum, labore architecto delectus. Lorem
                        ipsum dolor sit amet consectetur, adipisicing
                      </p>
                      <ul className="farming__list">
                        <li className="farming__list-item">
                          <h5>0 LP</h5>
                          <p>Stacked</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>0.00 TYPAD</h5>
                          <p>Earned</p>
                        </li>
                        <li className="farming__list-item">
                          <h3 className="color--theme-color">
                            <span
                              className="purecounter"
                              data-purecounter-start={0}
                              data-purecounter-end={74}
                            >
                              <CountUp end={74} duration={5} />
                            </span>
                            %
                          </h3>
                          <p>APY</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>$2024.00</h5>
                          <p>LP Price</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>$58,300,00</h5>
                          <p>Total Value Locked</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="farming__item-body"
                    style={{ display: show1 ? "block" : "none" }}
                    id="farming__content1"
                  >
                    <div className="farming__item-content">
                      <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__deposit">
                            <div className="farming__deposit-field">
                              <h6 className="form-label">Deposit</h6>
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={0.0}
                                  aria-label="Deposit input"
                                />
                                <span className="input-group-text">max</span>
                              </div>
                              <div className="text-end">
                                <Button text="Approve" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__withdraw">
                            <div className="farming__withdraw-field">
                              <h6 className="form-label">Withdraw</h6>
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={0.0}
                                  aria-label="Withdraw input"
                                />
                                <span className="input-group-text">max</span>
                              </div>
                              <div className="text-end">
                                <Button text="Withdraw" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__claim">
                            <div className="farming__claim-title">
                              <h6>Pending Rewards</h6>
                              <h4>0.00 BUSD</h4>
                            </div>
                            <div className="text-end">
                              <Button text="Claim" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="farming__item">
                  <div
                    className="farming__item-header"
                    data-toggle-content="farming__content2"
                    onClick={() => setShow2(!show2)}
                  >
                    <div className="farming__thumb">
                      <img width="auto" src="/images/igo/author/4.png"
                        alt="Project img"
                      />
                    </div>
                    <div className="farming__content">
                      <div className="farming__content-title">
                        <h4>IDO Pad Stacking</h4>
                        <p>TX-BNB/ TPAD</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem rerum non illum, labore architecto delectus. Lorem
                        ipsum dolor sit amet consectetur, adipisicing
                      </p>
                      <ul className="farming__list">
                        <li className="farming__list-item">
                          <h5>0 LP</h5>
                          <p>Stacked</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>0.00 TYPAD</h5>
                          <p>Earned</p>
                        </li>
                        <li className="farming__list-item">
                          <h3 className="color--theme-color">
                            <span
                              className="purecounter"
                              data-purecounter-start={0}
                              data-purecounter-end={47}
                            >
                              <CountUp end={47} duration={5} />
                            </span>
                            %
                          </h3>
                          <p>APY</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>$2024.00</h5>
                          <p>LP Price</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>$58,300,00</h5>
                          <p>Total Value Locked</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="farming__item-body"
                    style={{ display: show2 ? "block" : "none" }}
                    id="farming__content2"
                  >
                    <div className="farming__item-content">
                      <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__deposit">
                            <div className="farming__deposit-field">
                              <h6 className="form-label">Deposit</h6>
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={0.0}
                                  aria-label="Deposit input"
                                />
                                <span className="input-group-text">max</span>
                              </div>
                              <div className="text-end">
                                <Button text="Approve" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__withdraw">
                            <div className="farming__withdraw-field">
                              <h6 className="form-label">Withdraw</h6>
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={0.0}
                                  aria-label="Withdraw input"
                                />
                                <span className="input-group-text">max</span>
                              </div>
                              <div className="text-end">
                                <Button text="Withdraw" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__claim">
                            <div className="farming__claim-title">
                              <h6>Pending Rewards</h6>
                              <h4>0.00 BUSD</h4>
                            </div>
                            <div className="text-end">
                              <Button text="Claim" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="farming__item">
                  <div
                    className="farming__item-header"
                    data-toggle-content="farming__content3"
                    onClick={() => setShow3(!show3)}
                  >
                    <div className="farming__thumb">
                      <img width="auto" src="/images/igo/author/5.png"
                        alt="Project img"
                      />
                    </div>
                    <div className="farming__content">
                      <div className="farming__content-title">
                        <h4>TorkPad LP Stacking</h4>
                        <p>TPAD-BNB/ TYPAD</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem rerum non illum, labore architecto delectus. Lorem
                        ipsum dolor sit amet consectetur, adipisicing
                      </p>
                      <ul className="farming__list">
                        <li className="farming__list-item">
                          <h5>0 LP</h5>
                          <p>Stacked</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>0.00 TYPAD</h5>
                          <p>Earned</p>
                        </li>
                        <li className="farming__list-item">
                          <h3 className="color--theme-color">
                            <span
                              className="purecounter"
                              data-purecounter-start={0}
                              data-purecounter-end={39}
                            >
                              <CountUp end={39} duration={5} />
                            </span>
                            %
                          </h3>
                          <p>APY</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>$2024.00</h5>
                          <p>LP Price</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>$58,300,00</h5>
                          <p>Total Value Locked</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="farming__item-body"
                    style={{ display: show3 ? "block" : "none" }}
                    id="farming__content3"
                  >
                    <div className="farming__item-content">
                      <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__deposit">
                            <div className="farming__deposit-field">
                              <h6 className="form-label">Deposit</h6>
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={0.0}
                                  aria-label="Deposit input"
                                />
                                <span className="input-group-text">max</span>
                              </div>
                              <div className="text-end">
                                <Button text="Approve" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__withdraw">
                            <div className="farming__withdraw-field">
                              <h6 className="form-label">Withdraw</h6>
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={0.0}
                                  aria-label="Withdraw input"
                                />
                                <span className="input-group-text">max</span>
                              </div>
                              <div className="text-end">
                                <Button text="Withdraw" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__claim">
                            <div className="farming__claim-title">
                              <h6>Pending Rewards</h6>
                              <h4>0.00 BUSD</h4>
                            </div>
                            <div className="text-end">
                              <Button text="Claim" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="farming__item">
                  <div
                    className="farming__item-header"
                    data-toggle-content="farming__content4"
                    onClick={() => setShow4(!show4)}
                  >
                    <div className="farming__thumb">
                      <img width="auto" src="/images/igo/author/6.png"
                        alt="Project img"
                      />
                    </div>
                    <div className="farming__content">
                      <div className="farming__content-title">
                        <h4>DoccerX LP Stacking</h4>
                        <p>SCX-BNB/ TYPAD</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem rerum non illum, labore architecto delectus. Lorem
                        ipsum dolor sit amet consectetur, adipisicing
                      </p>
                      <ul className="farming__list">
                        <li className="farming__list-item">
                          <h5>0 LP</h5>
                          <p>Stacked</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>0.00 TYPAD</h5>
                          <p>Earned</p>
                        </li>
                        <li className="farming__list-item">
                          <h3 className="color--theme-color">
                            <span
                              className="purecounter"
                              data-purecounter-start={0}
                              data-purecounter-end={59}
                            >
                              <CountUp end={59} duration={5} />
                            </span>
                            %
                          </h3>
                          <p>APY</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>$2024.00</h5>
                          <p>LP Price</p>
                        </li>
                        <li className="farming__list-item">
                          <h5>$58,300,00</h5>
                          <p>Total Value Locked</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="farming__item-body"
                    style={{ display: show4 ? "block" : "none" }}
                    id="farming__content4"
                  >
                    <div className="farming__item-content">
                      <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__deposit">
                            <div className="farming__deposit-field">
                              <h6 className="form-label">Deposit</h6>
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={0.0}
                                  aria-label="Deposit input"
                                />
                                <span className="input-group-text">max</span>
                              </div>
                              <div className="text-end">
                                <Button text="Approve" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__withdraw">
                            <div className="farming__withdraw-field">
                              <h6 className="form-label">Withdraw</h6>
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={0.0}
                                  aria-label="Withdraw input"
                                />
                                <span className="input-group-text">max</span>
                              </div>
                              <div className="text-end">
                                <Button text="Withdraw" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="farming__claim">
                            <div className="farming__claim-title">
                              <h6>Pending Rewards</h6>
                              <h4>0.00 BUSD</h4>
                            </div>
                            <div className="text-end">
                              <Button text="Claim" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================> farming end here <================== */}
      <ApplyToLaunch />
    </>
  );
};
export default Farming;
