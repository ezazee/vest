import Image from 'next/image';
import React from 'react'

const Home = () => {
  return (
    <>
      <div className="main-bnr-two relative overflow-hidden z-[1]">
        <div className="main-slider-2">
          <div className="banner-inner3 relative lg:bg-white bg-[var(--secondary)] z-[1] lg:pt-0 lg:pb-0 md:pt-[90px] pt-[80px] pb-[50px]">
            <div className="primary-box max-xl:hidden relative z-[1]" />
            <div className="container">
              <div className="row items-center">
                <div className="xl:w-1/2 md:w-7/12 px-[15px]">
                  <div className="banner-content relative z-[1] 2xl:mb-[30px] mt-0 max-2lg:mt-[130px] mr-[-100px] max-xl:mr-0">
                    <h1 className="text-[80px] max-2xl:text-[70px] max-sm:text-[36px] title font-poppins font-bold text-black2 mb-[10px]">
                      The Number <span className="text-primary">#1</span> Choice
                      Your Hunger Solution
                    </h1>
                    <p className="lg:max-w-[522px] md:max-w-[380px] max-w-[500px] font-normal lg:text-lg text-base xl:leading-7 leading-6 text-[#666666] mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s,
                    </p>
                    <div className="banner-btn flex items-center lg:mt-10 sm:mt-[40px] mt-5 gap-[30px]">
                      <a
                        href="contact-us.html"
                        className="btn btn-primary btn-md btn-hover-1"
                      >
                        <span>Book a Table</span>
                      </a>
                      <a
                        href="about-us.html"
                        className="btn btn-outline btn-transparent text-primary btn-hover-1 btn-md"
                      >
                        <span>View More</span>
                      </a>
                    </div>
                  </div>
                  <div className="main-thumb2-area flex-row gap-5 relative bottom-[-130px] max-2xl:bottom-[-30px] left-0 max-xl:hidden">
                    <a href="our-menu-1.html" className="food-card ">
                      <div className="icon hover:bg-primary hover:text-white duration-700 w-[78px] h-[78px] min-w-[78px] leading-[78px] bg-[var(--rgba-primary-1)] text-primary text-center rounded-md">
                        <i className="text-[45px] inline-flex align-middle flaticon-juice" />
                      </div>
                    </a>
                    <a href="our-menu-1.html" className="food-card ">
                      <div className="icon hover:bg-primary hover:text-white duration-700 w-[78px] h-[78px] min-w-[78px] leading-[78px] bg-[var(--rgba-primary-1)] text-primary text-center rounded-md">
                        <i className="text-[45px] inline-flex align-middle flaticon-hamburger" />
                      </div>
                    </a>
                    <a href="our-menu-1.html" className="food-card ">
                      <div className="icon hover:bg-primary hover:text-white duration-700 w-[78px] h-[78px] min-w-[78px] leading-[78px] bg-[var(--rgba-primary-1)] text-primary text-center rounded-md">
                        <i className="text-[45px] inline-flex align-middle flaticon-pizza" />
                      </div>
                    </a>
                    <a href="our-menu-1.html" className="food-card ">
                      <div className="icon hover:bg-primary hover:text-white duration-700 w-[78px] h-[78px] min-w-[78px] leading-[78px] bg-[var(--rgba-primary-1)] text-primary text-center rounded-md">
                        <i className="text-[45px] inline-flex align-middle flaticon-cake-slice" />
                      </div>
                    </a>
                    <a href="our-menu-1.html" className="food-card ">
                      <div className="icon hover:bg-primary hover:text-white duration-700 w-[78px] h-[78px] min-w-[78px] leading-[78px] bg-[var(--rgba-primary-1)] text-primary text-center rounded-md">
                        <i className="text-[45px] inline-flex align-middle flaticon-room-service" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="xl:w-1/2 md:w-5/12 w-full px-[15px]">
                  <div className="relative h-[100%] sm:min-w-[50vw] min-w-full float-left sm:top-0 top-10 lg:left-0 left-[50px]">
                    <Image
                      width={450}
                      height={600}
                      src="/images/main-slider/slider3/bg.png"
                      className="item-bg relative w-[50vw] lg:block hidden"
                      alt="/"
                    />
                    <div className="animate-move lg:absolute static bottom-[50px] max-xl:bottom-5 ml-[-50px] w-[53vw] max-md:w-full max-md:mt-[30px]">
                      <Image
                        width={450}
                        height={600}
                        src="/images/main-slider/slider3/offer.png"
                        className="offer animate-dz w-auto top-[-120px] max-2xl:top-[-80px] right-[120px] max-2xl:right-[30px] absolute max-2xl:hidden"
                        alt="/"
                      />
                      <Image
                        width={450}
                        height={600}
                        src="/images/main-slider/slider3/crown.png"
                        className="crown left-[18%] top-[-12%] absolute w-[80%] max-2xl:hidden"
                        alt="/"
                      />
                      <Image
                        width={450}
                        height={600}
                        src="/images/main-slider/slider3/burger.png"
                        className="w-full"
                        alt="/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="primary-box max-xl:hidden style-1 relative z-[1]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home