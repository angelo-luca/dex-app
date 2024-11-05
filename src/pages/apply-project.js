import PageHeader from "@/components/base/PageHeader";
import NewsLetter from "@/components/partials/NewsLetter";







const ApplyProject = () => {
  return (
    <>
      <PageHeader title="Apply For Projects" text="apply projects" />
      {/* ================> Apply project start here <================== */}
      <section className="apply-project padding-top padding-bottom">
        <div className="container">
          <div className="section-header section-header--middle">
            <div className="section-header__content">
              <div className="section-header__titlebar">
                <h2 className="section__header__title">Please responsive the form</h2>
              </div>
            </div>
          </div>
          <div className="apply-project__wrapper">
            <form action="#" className="apply-project__form">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  {/* ========= Contact Info============= */}
                  <div className="apply-project__block mb-4">
                    <div className="apply-project__block-header">
                      <h4>Contact Information</h4>
                    </div>
                    <div className="apply-project__block-content">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="applyinfo-name"
                          placeholder="Full Name"
                          required=""
                        />
                        <label htmlFor="applyinfo-name">Full Name*</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="applyinfo-mail"
                          placeholder="name@example.com"
                          required=""
                        />
                        <label htmlFor="applyinfo-mail">Email*</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="applyinfo-title"
                          placeholder="title"
                          required=""
                        />
                        <label htmlFor="applyinfo-title">Title*</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="applyinfo-telegram"
                          placeholder="Telegram user"
                          required=""
                        />
                        <label htmlFor="applyinfo-telegram">
                          Telegram User
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* =========== Project Info ========= */}
                  <div className="apply-project__block mb-5">
                    <div className="apply-project__block-header">
                      <h4>Project Information</h4>
                    </div>
                    <div className="apply-project__block-content">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="project-name"
                          placeholder="Project Name"
                          required=""
                        />
                        <label htmlFor="project-name">Project Name*</label>
                      </div>
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          placeholder="Project Description"
                          id="project-description"
                          required=""
                          defaultValue={""}
                        />
                        <label htmlFor="project-description">
                          Project Description *
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          placeholder="Project token"
                          id="project-token"
                          required=""
                          defaultValue={""}
                        />
                        <label htmlFor="project-token">
                          Token Information *
                        </label>
                      </div>
                      <div className="form-floating mb-5">
                        <input
                          type="text"
                          className="form-control"
                          id="project-raise"
                          placeholder="Project Raised ammount"
                          required=""
                        />
                        <label htmlFor="project-raise">
                          Target Raise Ammount *
                        </label>
                      </div>
                      <div className="row g-3 mb-5">
                        <div className="col-sm-6">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="blockchain-select"
                              defaultValue="BSC"
                            >
                              <option value="BSC" >BSC</option>
                              <option value="Solana" >Solana</option>
                              <option value="Ethereum" >Ethereum</option>
                              <option value="Polkadot" >Polkadot</option>
                              <option value="Polygon" >Polygon</option>
                            </select>
                            <label htmlFor="blockchain-select">
                              Select Chain
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="status-select"
                              defaultValue="Ready to launch"

                            >
                              <option value="Ready to launch" >Ready to launch</option>
                              <option value="In early development" >In early development</option>
                              <option value="Idea with White Paper" >Idea with White Paper</option>
                              <option value="Just an initial idea" >Just an initial idea</option>
                            </select>
                            <label htmlFor="status-select">
                              Project Status
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="raised-fund"
                              defaultValue="no"
                            >
                              <option value="no">No</option>
                              <option value='yes' >Yes</option>
                            </select>
                            <label htmlFor="raised-fund">Raised before ?</label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-floating">

                            <select
                              className="form-select"
                              id="project-type"
                              defaultValue="igo"
                            >
                              <option value="igo">IGO</option>
                              <option value="igo">IGO</option>
                              <option value="ido">IDO</option>
                              <option value="IncubatedIDO">IncubatedIDO</option>
                            </select>

                            <label htmlFor="project-type">Project Type</label>
                          </div>
                        </div>
                      </div>
                      {/* optional properties */}
                      <div className="form-floating mb-3">
                        <input
                          type="url"
                          className="form-control"
                          id="project-website"
                          placeholder="Website URL"
                        />
                        <label htmlFor="project-website">Website URL </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="url"
                          className="form-control"
                          id="project-whitepaper"
                          placeholder="Whitepaper url"
                        />
                        <label htmlFor="project-whitepaper">
                          {" "}
                          Whitepaper URL
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="url"
                          className="form-control"
                          id="project-twitter"
                          placeholder="Project Twitter"
                        />
                        <label htmlFor="project-twitter">
                          {" "}
                          Project Twitter
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="url"
                          className="form-control"
                          id="project-telegram"
                          placeholder="Project Telegram"
                        />
                        <label htmlFor="project-telegram">
                          {" "}
                          Project Telegram
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="url"
                          className="form-control"
                          id="project-github"
                          placeholder="Project github"
                        />
                        <label htmlFor="project-github"> Project Github</label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="default-btn" type="submit">
                      {" "}
                      <span>Submit Project</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* ================> Apply project end here <================== */}
      {/* <NewsLetterTwo /> */}
      <NewsLetter />
    </>
  );
};
export default ApplyProject;
