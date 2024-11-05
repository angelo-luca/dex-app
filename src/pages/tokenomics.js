import ApplyToLaunch from "@/components/common/ApplyToLaunch";
import PageHeader from "@/components/base/PageHeader";
import Simple from "@/components/base/Simple";


const Tokenomics = () => {
  return (
    <>
      <PageHeader title="Tokenomics" text="tokenomics" />
      {/* ==========>> token Section start Here <<========== */}
      <section className="token padding-top padding-bottom">
        <div className="container">
          <div className="section-header section-header--middle">
            <div className="section-header__content">
              <div className="section-header__titlebar">
                <Simple subTitle="Statistics" title="Tokenomics" />
              </div>
            </div>
          </div>
          <div className="token__wrapper">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="token__info">
                  <ul className="token__info-list">
                    <li className="token__info-list-item">
                      <p className="token__info-list-name">Total Supply</p>
                      <p className="token__info-list-value">15,000,000</p>
                    </li>
                    <li className="token__info-list-item">
                      <p className="token__info-list-name">Public sale</p>
                      <p className="token__info-list-value">$0.24</p>
                    </li>
                    <li className="token__info-list-item">
                      <p className="token__info-list-name">Farming Pool</p>
                      <p className="token__info-list-value">27.3%</p>
                    </li>
                    <li className="token__info-list-item">
                      <p className="token__info-list-name">Staking</p>
                      <p className="token__info-list-value">15.3%</p>
                    </li>
                    <li className="token__info-list-item">
                      <p className="token__info-list-name">Ecosystem</p>
                      <p className="token__info-list-value">07.5%</p>
                    </li>
                    <li className="token__info-list-item">
                      <p className="token__info-list-name">Advisor</p>
                      <p className="token__info-list-value">7.03%</p>
                    </li>
                    <li className="token__info-list-item">
                      <p className="token__info-list-name">Private Sale</p>
                      <p className="token__info-list-value">23.45%</p>
                    </li>
                    <li className="token__info-list-item">
                      <p className="token__info-list-name">Liquidity</p>
                      <p className="token__info-list-value">13.3%</p>
                    </li>
                    <li className="token__info-list-item">
                      <p className="token__info-list-name">Marketing</p>
                      <p className="token__info-list-value">7.3%</p>
                    </li>
                    <li className="token__info-list-item">
                      <p className="token__info-list-name">Team</p>
                      <p className="token__info-list-value">5.3%</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="token__allocation  bg--shade1">
                  <div className="token__allocation-inner text-center">
                    <h4 className="mb-4">Sale Proceed Allocation</h4>
                    <div className="token__allocation-thumb">
                      <img width="auto" src="/images/token/01.png"
                        alt="Tokenomics Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========>> token Section Ends Here <<========== */}
      <ApplyToLaunch />
    </>
  );
};
export default Tokenomics;
