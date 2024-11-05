import Link from "next/link";
import {
  faDiscord,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeader from "@/components/base/PageHeader";



const LogIn = () => {
  return (
    <>
      <PageHeader title="Login Page" text="Login" />
      {/* ================> account login  start here <================== */}
      <div className="login-section padding-top">
        <div className=" container">
          <div className="account-wrapper">
            <div className="account-title">
              <h2>Login</h2>
              <p>
                Enter your email address and password to get access your account
              </p>
            </div>
            <form className="account-form">
              <div className="form-group">
                <input type="text" placeholder="User Name" name="username" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" name="password" />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link href="resetPass">Forget Password?</Link>
                </div>
              </div>
              <div className="form-group">
                <button className="default-btn">
                  <span>Login Now</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don`t Have any Account? <Link href="/signup"> Sign Up</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              <h5 className="subtitle">Login With Social Media</h5>
              <ul className="social justify-content-center">
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
        </div>
      </div>
      {/* ================> account login  end here <================== */}
      {/* ==========>> newsletter Section start Here <<========== */}
      <section
        className="newsletter padding-top padding-bottom"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="container">
          <div className="newsletter__wrapper newsletter__wrapper--bg-shapes">
            <div className="section-header section-header--middle">
              <div className="section-header__content">
                <div className="section-header__titlebar">
                  <p className="section-header__subtitle"> Stay Updated</p>
                  <h3 className="section__header__title">
                    {" "}
                    Subscribe For newsletter
                  </h3>
                </div>
              </div>
            </div>
            <div className="newsletter__form">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <form action="#">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      aria-label="newsletter Email"
                    />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========>> newsletter Section Ends Here <<========== */}
    </>
  );
};

export default LogIn;
