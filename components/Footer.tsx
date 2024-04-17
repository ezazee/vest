import Image from "next/image";

import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer style-2 relative" id="footer">
      <div
        className="footer-bg-wrapper max-2xl:mx-0 mx-[100px] max-2xl:rounded-none rounded-[30px] bg-black2 relative z-[1]"
        id="app-banner"
      >
        <div className="footer-top pt-[45px] pb-[30px] relative z-[2]">
          <div className="container">
            <div className="footer-subscribe-wrapper lg:mb-[60px] sm:mb-[40px] sm:pb-[40px] pb-[30px] mb-[30px] border-b border-[#ffffff1a]">
              <div className="wrapper-inner">
                <div className="row justify-between">
                  <div className="lg:w-4/12 px-[15px] lg:m-0 mb-5">
                    <div className="footer-logo mb-[15px]">
                      <a
                        href="index-2.html"
                        className="anim-logo-white pt-[5px] relative inline-block"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/images/logo2.png"
                          alt="/"
                        />
                      </a>
                    </div>
                    <p className="text-white mb-0 text-sm">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="lg:w-6/12 w-full px-[15px]">
                    <h4 className="text-white title mb-[15px]">
                      Subscribe To Our Newsletter
                    </h4>
                    <form
                      className="dzSubscribe"
                      action="https://swigo.dexignzone.com/tailwind/xhtml/assets/script/mailchamp.php"
                      method="post"
                    >
                      <div className="dzSubscribeMsg text-white" />
                      <div className="input-group flex flex-wrap relative items-stretch w-full">
                        <input
                          name="dzEmail"
                          required
                          type="text"
                          className="form-control outline-none lg:h-[65px] h-[55px] w-full"
                          placeholder="Enter Your Email"
                        />
                        <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                          <button
                            name="submit"
                            value="submit"
                            type="submit"
                            className="btn btn-primary btn-hover-2 sm:py-3 sm:px-6 py-[10px] px-3"
                          >
                            <span className="sm:block hidden">Subscribe</span>
                            <i className="fa-solid fa-paper-plane sm:hidden block text-xl" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="xl:w-3/12 lg:w-4/12 sm:w-6/12 px-[15px]">
                <div className="widget widget_getintuch mb-[30px]">
                  <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                    Contact
                  </h5>
                  <ul>
                    <li>
                      <i className="flaticon-placeholder" />
                      <p>
                        1247/Plot No. 39, 15th Phase, Colony, Kkatpally,
                        Hyderabad
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-telephone" />
                      <p>
                        +91 987-654-3210
                        <br />
                        +91 123-456-7890
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-email-1" />
                      <p>
                        info@example.com
                        <br />
                        info@example.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xl:w-3/12 lg:w-2/12 sm:w-6/12 w-full px-[15px]">
                <div className="widget widget_services mb-[30px]">
                  <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                    Our Links
                  </h5>
                  <ul>
                    <li>
                      <a href="index-2.html">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="about-us.html">
                        <span>About Us</span>
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        <span>Services</span>
                      </a>
                    </li>
                    <li>
                      <a href="team.html">
                        <span>Team</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-standard.html">
                        <span>Blog</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full px-[15px]">
                <div className="widget widget_services mb-[30px]">
                  <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                    OUR SERVICES
                  </h5>
                  <ul>
                    <li>
                      <a href="blog-open-gutenberg.html">
                        <span>Strategy &amp; Research</span>
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        <span>Fast Delivery</span>
                      </a>
                    </li>
                    <li>
                      <a href="contact-us.html">
                        <span>Seat Reservation</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-style-1.html">
                        <span>Pickup In Store</span>
                      </a>
                    </li>
                    <li>
                      <a href="our-menu-1.html">
                        <span>Our Menu</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full px-[15px]	">
                <div className="widget widget_services mb-[30px]">
                  <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                    Help Center
                  </h5>
                  <ul>
                    <li>
                      <a href="faq.html">
                        <span>FAQ</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-style-1.html">
                        <span>Shop</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-style-2.html">
                        <span>Category Filter</span>
                      </a>
                    </li>
                    <li>
                      <a href="testimonial.html">
                        <span>Testimonials</span>
                      </a>
                    </li>
                    <li>
                      <a href="contact-us.html">
                        <span>Contact Us</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Part */}
      <div className="container">
        <div className="footer-bottom py-5 border-t border-[#ffffff1a] relative z-[1]">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-1/2 px-[15px] lg:text-left text-center">
              <span className="text-sm text-[#666666]">
                Crafted With{" "}
                <span className="bg-heart w-[60px] h-[60px] inline-block my-[-25px] mx-[-18px]" />{" "}
                by{" "}
                <a
                  href="https://dexignzone.com/"
                  target="_blank"
                  className="text-primary"
                >
                  DexignZone
                </a>
              </span>
            </div>
            <div className="lg:w-1/2 px-[15px]">
              <ul className="footer-link mx-[-15px] lg:text-right text-center">
                <li className="inline-block sm:px-[15px] px-[5px] relative">
                  <a
                    href="blog-standard.html"
                    className="text-[#666666] sm:text-sm text-[13px] tracking-[0.01em] font-normal"
                  >
                    Blog Detail
                  </a>
                </li>
                <li className="inline-block sm:px-[15px] px-[5px] relative">
                  <a
                    href="about-us.html"
                    className="text-[#666666] sm:text-sm text-[13px] tracking-[0.01em] font-normal"
                  >
                    About
                  </a>
                </li>
                <li className="inline-block sm:px-[15px] px-[5px] relative">
                  <a
                    href="testimonial.html"
                    className="text-[#666666] sm:text-sm text-[13px] tracking-[0.01em] font-normal"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
