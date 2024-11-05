import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReplyAll,
  faUser,
  faCalendarDays,
  faMagnifyingGlass,
  faFolder,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faTwitch,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PageHeader from "@/components/base/PageHeader";
import Link from "next/link";
import Image from 'next/image';


function BlogSingle() {
  return (
    <>
      <PageHeader title="Blog Details" text="Blog Single" />
      {/* ================> blog section start here <================== */}
      <div className="blog padding-top padding-bottom">
        <div className="container">
          <div className="blog__wrapper">
            <div className="row ">
              <div className="col-lg-8">
                <article>
                  <div className="post-item-2">
                    <div className="post-inner">
                      <div className="post-thumb mb-30 px-30 pt-30">
                        <img width="auto" src="/images/blog/single/01.jpg"
                          alt="blog"
                        />
                      </div>
                      <div className="post-content pt-0">
                        <h3>How can I launch my IDO project in Torkgo</h3>
                        <ul className="blog__meta d-flex flex-wrap align-items-center mb-4">
                          <li className="blog__meta-author">
                            <Link href="#">
                              <span>
                                <FontAwesomeIcon icon={faUser} />
                              </span>{" "}
                              dorothea
                            </Link>
                          </li>
                          <li className="blog__meta-date">
                            <Link href="#">
                              <span>
                                <FontAwesomeIcon icon={faCalendarDays} />
                              </span>
                              30 December 2022
                            </Link>
                          </li>
                        </ul>
                        <p>
                          {" "}
                          Loremito wimmin taken posseson of mying entire soung
                          like these sweet mornngs is whch enjoy with my whole
                          heart create am alonesi and feel the charm of
                          exstenceth spotens whch was the blis of souls like
                          mineing am soo happy my dearsi frend absoribed the em
                          exquste sense enjoy with my whole heart inaming alone
                          and feel the charm of exstensc spotsi whch was the
                          blis of souls like mineing am soing happyr my dear
                          frend soingu ize absoribed the exqust sense tranquil
                          existence that neglect my talentsr Ins should byers
                          ncapable ofing is drawng and singe Lomberliel.
                        </p>
                        <blockquote className="single-quote mb-30">
                          <div className="quotes">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Illum quae quia ab natus dolores beatae,
                            deleniti cupiditate. Maiores, iure consequuntur!
                          </div>
                        </blockquote>
                        <p>
                          Loremito wimmin taken posseson of mying entire soung
                          like these sweet mornngs is whch enjoy with my whole
                          heart create am alonesi and feel the charm of
                          exstenceth spotens whch was the blis of souls like
                          mineing am soo happy my dearsi frend absoribed the em
                          exquste sense enjoy with my whole heart inaming alone
                          and feel the charm of exstensc spotsi whch was the
                          blis of souls like mineing am soing happyr my dear
                          frend soingu ize absoribed the exqust sense tranquil
                          existence that neglect my talentsr Ins should byers
                          ncapable ofing is drawng and singe Lomberliel.
                        </p>
                        <div className="post-thumb mb-30">
                          <img width="auto" src="/images/blog/single/02.jpg"
                            alt="blog-img"
                          />
                        </div>
                        <p>
                          Loremito wimmin taken posseson of mying entire soung
                          like these sweet mornngs is whch enjoy with my whole
                          heart create am alonesi and feel the charm of
                          exstenceth spotens whch was the blis of souls like
                          mineing am soo happy my dearsi frend absoribed the em
                          exquste sense enjoy with my whole heart inaming alone
                          and feel the charm of exstensc spotsi whch was the
                          blis of souls like mineing am soing happyr my dear
                          frend soingu ize absoribed the exqust sense tranquil
                          existence that neglect my talentsr Ins should byers
                          ncapable ofing is drawng and singe Lomberliel.
                        </p>
                        <div className="tags-area">
                          <ul className="tags lab-ul justify-content-center">
                            <li>
                              <Link href="#">INO</Link>
                            </li>
                            <li>
                              <Link href="#" className="active">
                                IDO
                              </Link>
                            </li>
                            <li>
                              <Link href="#">Metaverse</Link>
                            </li>
                          </ul>
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
                  <div className="article-pagination">
                    <div className="prev-article">
                      <Link href="#">
                        <FontAwesomeIcon style={{ paddingRight: "5px" }} icon={faAnglesLeft} />
                        Previous Article
                      </Link>
                      <p>What is IDO Launchpad? How can I launch a project</p>
                    </div>
                    <div className="next-article">
                      <Link href="#">
                        Next Article
                        <FontAwesomeIcon style={{ paddingLeft: "5px" }} icon={faAnglesRight} />
                      </Link>
                      <p>Best Multichain IDO Launchpad Template Torkgo</p>
                    </div>
                  </div>
                  <div className="authors">
                    <div className="author-thumb">
                      <img width="auto" src="/images/blog/author/01.png"
                        alt="author"
                      />
                    </div>
                    <div className="author-content">
                      <h4>Rassel Hossain</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est nostrum error cumque maio res excepturi, id
                        explicabo laborum velit numquam sint. Lorem ipsum dolor
                        sit ametervx consectetur, adipisicing elit. Atque,
                        libero.
                      </p>
                    </div>
                  </div>
                  <div id="comments" className="comments">
                    <h4 className="comment-title h7">02 Comment</h4>
                    <ul className="lab-ul comment-list">
                      <li className="comment" id="li-comment-1">
                        <div className="com-item">
                          <div className="com-thumb">
                            <Image alt=""
                              src="/images/blog/author/02.png"
                              srcSet="/images/blog/author/02.png"
                              className="avatar avatar-90 photo"
                              height={90}
                              width={90}
                            />
                          </div>
                          <div className="com-content">
                            <div className="com-title">
                              <div className="com-title-meta">
                                <Link href="#" className="h7">
                                  Alex Rock
                                </Link>
                                <span> October 5, 2022 at 12:41 pm </span>
                              </div>
                              <span className="reply">
                                <Link className="comment-reply-link"
                                  href="#"
                                  aria-label="Reply to Masum"
                                >
                                  <FontAwesomeIcon icon={faReplyAll} />
                                  Reply
                                </Link>
                              </span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quam dolores deserunt dolorem facilis ullam
                              fugiat.
                            </p>
                          </div>
                        </div>
                        <ul className="lab-ul comment-list">
                          <li className="comment" id="li-comment-2">
                            <div className="com-thumb">
                              <Image alt=""
                                src="/images/blog/author/03.png"
                                className="avatar avatar-90"
                                height={90}
                                width={90}
                              />
                            </div>
                            <div className="com-content">
                              <div className="com-title">
                                <div className="com-title-meta">
                                  <Link href="#"
                                    rel="external nofollow"
                                    className="h7"
                                  >
                                    Jimmy Leo
                                  </Link>
                                  <span> June 5, 2022 at 2:11 pm </span>
                                </div>
                                <span className="reply">
                                  <Link className="comment-reply-link"
                                    href="#"
                                    aria-label="Reply to Rocky"
                                  >
                                    <FontAwesomeIcon icon={faReplyAll} /> Reply
                                  </Link>
                                </span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur accusamus totam,
                                eligendi rem dicta facere fuga a vel temporibus
                                fugit.{" "}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div id="respond" className="comment-respond">
                    <h4 className="h7">Leave a Comment</h4>
                    <div className="add-comment">
                      <form
                        action="#"
                        method="post"
                        id="commentform"
                        className="comment-form"
                      >
                        <input
                          name="name"
                          type="text"
                          defaultValue=""
                          placeholder="Name*"
                        />
                        <input
                          name="email"
                          type="text"
                          defaultValue=""
                          placeholder="Email*"
                        />
                        <textarea
                          id="comment-reply"
                          name="comment"
                          rows={7}
                          placeholder="Type Here Your Comment*"
                          defaultValue={""}
                        />
                        <button type="submit" className="default-btn">
                          <span>Send Comment</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-4">
                <aside className="ps-lg-4">
                  <div className="widget widget-search">
                    <div className="widget__header">
                      <h5>Search keywords</h5>
                    </div>
                    <div className="widget-search-inner">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search here"
                          aria-label="Search bar"
                        />
                        <button className="search-icon">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget-category">
                    <div className="widget__header">
                      <h5>Post Categories</h5>
                    </div>
                    <ul className="lab-ul widget-wrapper list-bg-none">
                      <li>
                        <Link href="#"
                          className="d-flex flex-wrap justify-content-between"
                        >
                          <span>
                            <FontAwesomeIcon icon={faFolder} />
                            Show all
                          </span>
                          <span>15</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#"
                          className="d-flex flex-wrap justify-content-between"
                        >
                          <span>
                            <FontAwesomeIcon icon={faFolder} />
                            IGO
                          </span>
                          <span>20</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#"
                          className="d-flex flex-wrap justify-content-between"
                        >
                          <span>
                            <FontAwesomeIcon icon={faFolder} />
                            Metaverse
                          </span>
                          <span>65</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#"
                          className="d-flex flex-wrap justify-content-between"
                        >
                          <span>
                            <FontAwesomeIcon icon={faFolder} />
                            Web 3.0
                          </span>
                          <span>32</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#"
                          className="d-flex flex-wrap justify-content-between"
                        >
                          <span>
                            <FontAwesomeIcon icon={faFolder} />
                            IDO
                          </span>
                          <span>16</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#"
                          className="d-flex flex-wrap justify-content-between"
                        >
                          <span>
                            <FontAwesomeIcon icon={faFolder} />
                            Token
                          </span>
                          <span>70</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#"
                          className="d-flex flex-wrap justify-content-between"
                        >
                          <span>
                            <FontAwesomeIcon icon={faFolder} />
                            Binance
                          </span>
                          <span>26</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget-post">
                    <div className="widget__header">
                      <h5>Recent Post</h5>
                    </div>
                    <ul className="lab-ul widget-wrapper">
                      <li className="widget-post-item">
                        <div className="post-thumb">
                          <Link href="/blog-single">
                            <img width="auto" src="/images/blog/p-post/01.jpg"
                              alt="product"
                            />
                          </Link>
                        </div>
                        <div className="post-content">
                          <Link href="/blog-single">
                            <h6>Launch Your IDO Project Now</h6>
                          </Link>
                          <p>02 January 2022</p>
                        </div>
                      </li>
                      <li className="widget-post-item">
                        <div className="post-thumb">
                          <Link href="/blog-single">
                            <img width="auto" src="/images/blog/p-post/02.jpg"
                              alt="product"
                            />
                          </Link>
                        </div>
                        <div className="post-content">
                          <Link href="/blog-single">
                            <h6>Best IDO Launchpad HTML template</h6>
                          </Link>
                          <p>21 February 2022</p>
                        </div>
                      </li>
                      <li className="widget-post-item">
                        <div className="post-thumb">
                          <Link href="/blog-single">
                            <img width="auto" src="/images/blog/p-post/03.jpg"
                              alt="product"
                            />
                          </Link>
                        </div>
                        <div className="post-content">
                          <Link href="/blog-single">
                            <h6>Who are eligible to launch project?</h6>
                          </Link>
                          <p>30 Sep 2022</p>
                        </div>
                      </li>
                      <li className="widget-post-item">
                        <div className="post-thumb">
                          <Link href="/blog-single">
                            <img width="auto" src="/images/blog/p-post/04.jpg"
                              alt="product"
                            />
                          </Link>
                        </div>
                        <div className="post-content">
                          <Link href="/blog-single">
                            <h6>What is the Token allocation in Torkgo</h6>
                          </Link>
                          <p>05 March 2022</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget-tags">
                    <div className="widget__header">
                      <h5> Popular tags</h5>
                    </div>
                    <ul className="lab-ul widget-wrapper">
                      <li>
                        <Link href="#">metaverse</Link>
                      </li>
                      <li>
                        <Link href="#" className="active">
                          IDO
                        </Link>
                      </li>
                      <li>
                        <Link href="#">token</Link>
                      </li>
                      <li>
                        <Link href="#">torkgo</Link>
                      </li>
                      <li>
                        <Link href="#">html</Link>
                      </li>
                      <li>
                        <Link href="#">cryptos</Link>
                      </li>
                      <li>
                        <Link href="#">games</Link>
                      </li>
                      <li>
                        <Link href="#">polygon</Link>
                      </li>
                      <li>
                        <Link href="#">solana</Link>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================> blog section end here <================== */}
    </>
  );
}

export default BlogSingle;
