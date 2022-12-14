import React, { useEffect, useState } from "react";
import Image from "next/image";
import Links from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ViewCount } from "../../type";
import { Link } from "react-scroll";

interface MobileHomeProps {
  viewCount: ViewCount;
}

const MobileHome: React.FC<MobileHomeProps> = ({ viewCount }) => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 3000,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    pauseOnHover: false,
    arrows: false,
    centerMode: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  //slide 구현 State
  const [pages, setPages] = useState<number>(0);
  const [ScrollY, setScrollY] = useState(0);

  const handleFollow = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    //1000
    const section1 = window.innerHeight - 100;
    //2000
    const section2 = (window.innerHeight - 100) * 2;
    //3000
    const section3 = (window.innerHeight - 100) * 3;
    //4000
    const section4 = (window.innerHeight - 100) * 4;
    if (ScrollY < section1) {
      setPages(0);
    }
    if (ScrollY > section1 && ScrollY < section2) {
      setPages(1);
    }
    if (ScrollY > section2 && ScrollY < section3) {
      setPages(2);
    }
    if (ScrollY > section3 && ScrollY < section4) {
      setPages(3);
    }
  }, [ScrollY]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });
  return (
    <div className="flex flex-col  font-light scroll-smooth">
      <div className="dots fixed z-20 right-4 bottom-[50%]">
        <Link to="first" smooth={true} duration={0}>
          <svg
            className="mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            viewBox="0 0 10 10"
          >
            <circle
              id="타원_96"
              data-name="타원 96"
              cx="5"
              cy="5"
              r="5"
              fill="#fff"
              opacity={`${pages === 0 ? null : 0.25}`}
            />
          </svg>
        </Link>
        <Link to="second" smooth={true} duration={0}>
          <svg
            className="mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            viewBox="0 0 10 10"
          >
            <circle
              id="타원_96"
              data-name="타원 96"
              cx="5"
              cy="5"
              r="5"
              fill="#fff"
              opacity={`${pages === 1 ? null : 0.25}`}
            />
          </svg>
        </Link>
        <Link to="third" smooth={true} duration={0}>
          <svg
            className="mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            viewBox="0 0 10 10"
          >
            <circle
              id="타원_96"
              data-name="타원 96"
              cx="5"
              cy="5"
              r="5"
              fill="#fff"
              opacity={`${pages === 2 ? null : 0.25}`}
            />
          </svg>
        </Link>
        <Link to="fourth" smooth={true} duration={0}>
          <svg
            className="mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            viewBox="0 0 10 10"
          >
            <circle
              id="타원_96"
              data-name="타원 96"
              cx="5"
              cy="5"
              r="5"
              fill="#fff"
              opacity={`${pages === 3 ? null : 0.25}`}
            />
          </svg>
        </Link>
      </div>

      {/* Main Page - Main Animation 1  */}
      <div
        className="first flex flex-col h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/mobile/animation/main-animation-1.gif")',
        }}
      >
        <article>
          <div className="flex flex-row mx-10 my-8 justify-between items-center">
            <Links href="/">
              <a className="mt-4">
                <Image
                  src="/web/logo/web_logo_white.svg"
                  width={40}
                  height={30}
                  alt="icon"
                />
              </a>
            </Links>
            <div className="flex flex-row space-x-5">
              <Links href="/works/?category=true">
                <a className="text-white font-normal">WORKS</a>
              </Links>
              <Links href="/designers">
                <a className="text-white font-normal">DESIGNER</a>
              </Links>
            </div>
          </div>
        </article>
        <Link to="second" smooth={true} duration={0}>
          <div className="flex justify-center">
            <div className=" absolute bottom-4 text-center animate-bounce">
              <div className="flex  justify-center text-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25.396"
                    height="13.698"
                    viewBox="0 0 25.396 13.698"
                  >
                    <path
                      id="chevron-down"
                      d="M6,9,17.284,20.284,28.567,9"
                      transform="translate(29.982 21.284) rotate(180)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-white text-center mt-3 text-[16px]">
                scroll down
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Page - Main Animation 2  */}
      <div
        className="second flex flex-col h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/mobile/animation/main-animation-2.gif")',
        }}
      >
        <div className="h-[20%]" />
        <div className="flex flex-col justify-center items-center h-[100vh]">
          <div className="flex justify-center ml-[45px]">
            <Image
              src="/mobile/icon/What_We_do.png"
              width={134}
              height={143}
              alt="icon"
              className="z-20"
            />
          </div>
          <div className="flex flex-col space-y-1 text-white mt-4 mb-28">
            <h2 className="font-medium text-xl">온고지신</h2>
            <h2 className="text-center">溫故知新</h2>
          </div>
          <div className="flex flex-col space-y-4 pb-10">
            <p className="text-white w-full text-sm  text-center leading-9">
              <span className="font-medium">
                서당 개 3년이면 풍월을 읊는다고
                <br /> 하였습니다.
              </span>
              우리는 4년이라는 긴 시간 동안 <br /> 교수님의 어깨 너머로 배운
              것들을 스스로 깨닫고,
              <br /> 산업 디자인과라는 일련의 과정 속에서 찾아낸
              <br /> 색으로 우리의 미래를 표현해 보고자 합니다.
            </p>
          </div>
        </div>
      </div>
      {/* Main Page - Main Animation 3  */}
      <div
        className=" third flex flex-col h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/mobile/animation/main-animation-3.gif")',
        }}
      >
        <div className="h-[35vh]" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-white text-xl font-medium">
            각자의 방식으로 미래를 그리다
          </h2>
          <div className="h-[15vh] flex justify-center items-center">
            <Image
              src="/mobile/icon/orange_logo.svg"
              width={50}
              height={50}
              alt="icon"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-white w-full text-center leading-9 text-sm">
              2022 한양대학교 산업디자인학과
              <br /> 졸업 전시
              <span className="font-medium">&apos;온고지신&apos;</span>은
              학생이라는 신분에서
              <br /> 배워 온 많은 것들을 몸으로 익히고, <br />
              학교 밖을 벗어나{" "}
              <span className="font-medium">
                자신만의 새로운 미래를
                <br /> 만들어가는 전환점
              </span>
              이 될 것입니다.
            </span>
          </div>
        </div>
        <div className="h-[35vh]" />
      </div>
      <div className="bg-black h-auto fourth pb-48">
        <div className="flex justify-center mt-[140px]">
          <Image
            src="/mobile/icon/ourConcept.png"
            width={338}
            height={277}
            alt="icon"
          />
        </div>
        <div className="ml-32 mt-[30px]  ">
          <div>
            <Image src="/mobile/icon/orange_logo.svg" width={36} height={36} />
          </div>
          <div className="flex justify-center  ">
            <div className="flex flex-col space-y-1 justify-center mb-10 text-xs leading-6">
              <div className="block text-white w-full flex justify-start">
                무수한 과거와 현재가 이어져
              </div>
              <div className="text-white w-full flex justify-start">
                미지의 공간인 미래를 만들어
              </div>
              <span className="text-white w-full flex justify-start">
                간다는 의미를 담아 옛것을
              </span>
              <span className="text-white w-full flex justify-start">
                흐리게, 새로운 것을 뚜렷하게
              </span>
              <span className="text-white w-full flex justify-start">
                표현하여 과거와 미래가 공존
              </span>
              <span className="text-white w-full flex justify-start">
                하는 온고지신을 그래픽으로
              </span>
              <span className="text-white w-full flex justify-start">
                표현하였습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black pb-5">
        <Slider {...setting}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index, res) => {
            return (
              <Image
                key={index}
                src="/mobile/icon/slide.png"
                width={119}
                height={16}
                alt="icon"
              />
            );
          })}
        </Slider>
      </div>
      <div className="flex flex-col bg-cover bg-center bg-[#0649EC]">
        <div className="flex justify-center mt-10 my-2">
          <Links href="/works/?category=true">
            <Image
              src={"/mobile/icon/gotoWork.png"}
              width={150}
              height={150}
              alt="icon"
            />
          </Links>
        </div>
        <article>
          <h2 className="text-center text-[26px] text-white font-medium leading-8">
            OUR
            <br /> DEGREE SHOW
          </h2>
        </article>
        <div className="text-white my-8 mx-10">
          <h2 className="font-medium mb-5">지도교수</h2>
          <div className="grid grid-cols-3 gap-3">
            <span className="text-sm">고보형 교수</span>
            <span className="text-sm">김태선 교수</span>
            <span className="text-sm">박경진 교수</span>
            <span className="text-sm">이재환 교수</span>
            <span className="text-sm">한정완 교수</span>
          </div>
        </div>
        <div className="text-white my-8 mx-10">
          <h2 className="font-medium mb-5">졸업준비위원회</h2>
          <div className="grid grid-rows-4 grid-cols-4 gap-5">
            <span className="text-sm w-20 font-medium">위원장</span>
            <span className="text-sm  w-20">한윤정</span>
            <span className="text-sm  w-20"></span>
            <span className="text-sm  w-20"></span>
            <span className="text-sm  w-20 font-medium">부위원장</span>
            <span className="text-sm  w-20">임예지</span>
            <span className="text-sm w-20"></span>
            <span className="text-sm  w-20"></span>
            <span className="text-sm w-20 font-medium">기획/홍보팀</span>
            <span className="text-sm  w-20">이다은</span>
            <span className="text-sm  w-20">공일빈</span>
            <span className="text-sm  w-20"></span>
            <span className="text-sm  w-20 font-medium">그래픽팀</span>
            <span className="text-sm  w-20">이다빈</span>
            <span className="text-sm  w-20">이민주</span>
            <span className="text-sm  w-20">조호현</span>
          </div>
        </div>
        <div className="my-3 w-full h-[1px] bg-white bg-opacity-50" />
        <div className="h-full">
          <div className="flex flex-col my-5 mx-6 text-xs leading-5">
            <span className="text-white font-medium ">
              Ongozisin, Hanyang univ. All Rights Reserved
            </span>
            <span className="mx-1 text-white font-light ">
              59-9, Hanyangdaehak 1-gil, Sangnok-gu,
            </span>
            <span className="mx-1 text-white font-light ">
              Ansan-si, Gyeonggi-do, Republic of Korea
            </span>
          </div>
          <div className="flex flex-col mx-6 text-xs pb-16">
            <span className="text-white ">
              Today {viewCount.todayViewCount.toLocaleString()}
              <span className="m-2">|</span> Total{" "}
              {viewCount.allViewCount.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="h-[2vh]" />
      </div>
    </div>
  );
};

export default MobileHome;
