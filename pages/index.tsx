import MainHeader from "../components/Headers/MainHeader/MainHeader";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import Slider from "react-slick";
import { recipes } from "../recipes";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsTopPicks = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <MainHeader showCategoryMenu={true} />

      <main className={"homepage"}>
        <h1 className="mb-60 ta-center">Kush’s Kitchen</h1>
        <div className="container mb-125px">
          <div className="remove-on-desctop">
            <Slider
              {...settings}
              style={{ width: "calc(100% + 50px)", margin: "0 -25px 50px" }}
            >
              <div>
                <Link href="/main/chocolate-chip-banana-bread1">
                  <img className="full-width h-100vw" src="./Mask Group.png" />
                </Link>
                <Link href="/main/chocolate-chip-banana-bread1">
                  <div className="p-020 ta-center">
                    <h3>Chocolate chip banana bread</h3>
                    <p>
                      I finally caved during quarantine and made banana bread. I
                      mean how couldn’t I? The recipe is easy, forgiving and
                      always turns out great. 10% of the reason bananas exist is
                      to make banana bread. Don’t quote me on that though.
                    </p>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <img
                    className="full-width h-100vw"
                    src="./Mask Group (1).png"
                  />
                </Link>
                <Link href="/about">
                  <div className="p-020 ta-center">
                    <h3>A little bit about me!</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Feugiat potenti imperdiet cursus consequat cursus. Tellus
                      elementum vel leo at varius. Aliquam sit eget amet nunc
                      molestie suspendisse commodo. Sed in vitae, tellus
                      faucibus viverra massa amet at. Laoreet ante in vitae
                      adipiscing quisque.
                    </p>
                  </div>
                </Link>
              </div>
            </Slider>
            <Link href="/contact">
              <a className="main-btn mt-40px">Say ‘Hi’</a>
            </Link>
          </div>
          <div className="row remove-on-mobile remove-on-tablet">
            <div className="col-lg-8">
              <Link href="/main/chocolate-chip-banana-bread1">
                <a style={{ cursor: "pointer" }}>
                  <img className="full-width br-6" src="./Mask Group.png" />
                  <h3>Chocolate chip banana bread</h3>
                  <p>
                    I finally caved during quarantine and made banana bread. I
                    mean how couldn’t I? The recipe is easy, forgiving and
                    always turns out great. 10% of the reason bananas exist is
                    to make banana bread. Don’t quote me on that though.
                  </p>
                </a>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link href="/about">
                <a style={{ cursor: "pointer" }}>
                  <img className="full-width br-6" src="./Mask Group (1).png" />
                  <h3>A little bit about me!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Feugiat potenti imperdiet cursus consequat cursus. Tellus
                    elementum vel leo at varius. Aliquam sit eget amet nunc
                    molestie suspendisse commodo. Sed in vitae, tellus faucibus
                    viverra massa amet at. Laoreet ante in vitae adipiscing
                    quisque.
                  </p>
                </a>
              </Link>
              <Link href="/contact">
                <a className="main-btn mt-40px">Say ‘Hi’</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-dark-bige ptb-100px">
          <div className="container">
            <h2 className="mb-16 ta-center">My Top Picks</h2>
            <div className="p-020 ta-center mb-40 remove-on-desctop">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                potenti imperdiet cursus consequat cursus. Tellus elementum vel
                leo at varius
              </p>
            </div>

            <div className="remove-on-mobile remove-on-tablet ">
              <p className="mw-650 ta-center" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                potenti imperdiet cursus consequat cursus. Tellus elementum vel
                leo at varius
              </p>
              <Slider
              {...settingsTopPicks}
              style={{  margin: "60px 0 50px" }}
            >
              {recipes?.map((item) => {
                return (
                  <div className='top-picks'>
                    <a href={item?.url}>
                      <img className="br-4 full-width" src={item?.cover} />
                      <div className="d-flex" style={{ margin: "12px 0 6px" }}>
                        <img
                          style={{ marginRight: "6px" }}
                          src="./Time Circle.svg"
                        />
                        <p className="recipe-time">{item?.cook}</p>
                      </div>
                      <p className="recipe-head ">{item?.title}</p>
                    </a>
                  </div>
                );
              })}
            </Slider>
            </div>
            

            <div className="ta-center mb-40">
              <Link href="/top-picks">
                <a className="second-btn m-0auto mt-40px">View All</a>
              </Link>
            </div>
            <div className="remove-on-desctop">
              <Slider
                {...settings}
                style={{ width: "calc(100% + 50px)", margin: "0 -25px" }}
              >
                <div>
                  <img
                    className="full-width h-100vw"
                    src="./Rectangle 59.png"
                  />
                  <div className="p-020">
                    <div className="d-flex" style={{ margin: "12px 0 6px" }}>
                      <img
                        className="br4 "
                        style={{ marginRight: "6px" }}
                        src="./Time Circle.svg"
                      />
                      <p className="recipe-time">2,5 hours</p>
                    </div>
                    <p className="recipe-head ">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="full-width h-100vw"
                    src="./Rectangle 59.png"
                  />
                  <div className="p-020">
                    <div className="d-flex" style={{ margin: "12px 0 6px" }}>
                      <img
                        className="br4 "
                        style={{ marginRight: "6px" }}
                        src="./Time Circle.svg"
                      />
                      <p className="recipe-time">2,5 hours</p>
                    </div>
                    <p className="recipe-head ">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="full-width h-100vw"
                    src="./Rectangle 59.png"
                  />
                  <div className="p-020">
                    <div className="d-flex" style={{ margin: "12px 0 6px" }}>
                      <img
                        className="br4 "
                        style={{ marginRight: "6px" }}
                        src="./Time Circle.svg"
                      />
                      <p className="recipe-time">2,5 hours</p>
                    </div>
                    <p className="recipe-head ">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="full-width h-100vw"
                    src="./Rectangle 59.png"
                  />
                  <div className="p-020">
                    <div className="d-flex" style={{ margin: "12px 0 6px" }}>
                      <img
                        className="br4 "
                        style={{ marginRight: "6px" }}
                        src="./Time Circle.svg"
                      />
                      <p className="recipe-time">2,5 hours</p>
                    </div>
                    <p className="recipe-head ">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="full-width h-100vw"
                    src="./Rectangle 59.png"
                  />
                  <div className="p-020">
                    <div className="d-flex" style={{ margin: "12px 0 6px" }}>
                      <img
                        className="br4 "
                        style={{ marginRight: "6px" }}
                        src="./Time Circle.svg"
                      />
                      <p className="recipe-time">2,5 hours</p>
                    </div>
                    <p className="recipe-head ">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
