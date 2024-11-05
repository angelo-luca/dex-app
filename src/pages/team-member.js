import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PageHeader from "@/components/base/PageHeader";
import NewsLetterTwo from "@/components/partials/NewsLetterTwo";
import Link from "next/link";



const TeamMember = () => {
  return (
    <>
      <PageHeader title="Team Details" text="Team Details" />
      {/* ================>member section start here <================== */}
      <section className="member padding-top">
        <div className="container">
          <div className="member__wrapper">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div
                  className="member__thumb"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  <img width="auto" src="/images/team/member/01.png"
                    alt="member Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="member__content"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <h2 className="mb-4">Jhon Doe</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem tempore ratione natus soluta accusamus expedita harum
                    aliquid ullam? Ex, fugali Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet consectetur adip sicing elit. Modi,
                    animi?
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, cupiditate atque! Ad veniam et dignissimos asperiores
                    natus dolores, odio hic. Lore ipsum dolor sit amet.
                  </p>
                  <p>
                    Entering The Apes Land Society means joining an family full
                    of peoples who believe in the future of Cryptocurrences and
                    the Blockchain technology.
                  </p>
                  <ul className="social mt-5">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================>member section end here <================== */}
      <NewsLetterTwo />
    </>
  );
};
export default TeamMember;
