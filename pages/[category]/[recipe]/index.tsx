import RecipeHeader from "../../../components/Headers/RecipeHeader/RecipeHeader";
import StepperDesktop from "../../../components/Stepper/StepperDesktop";
import StepperMobile from "../../../components/Stepper/StepprMobile";
import Footer from "../../../components/Footer/Footer";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { recipes } from "../../../recipes";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
export default function Recipe() {
  const router = useRouter();
  const [currentRecipe, setCurrentRecipe] = useState();
  const { category, recipe } = router.query; //Here you get the params from the url
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // ToDo
    // get your recepies by the category
    // recipe is your key word
    // then set the array in setCurrentRecipe
    setCurrentRecipe(recipes[0]);
  }, []);

  
  const ingr = {
    open: {
      bottom: 0,
      position: "fixed",
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      bottom: "-100%",
      position: "fixed",
      transition: {
        duration: 0.3,
      },
    },
  };
  const ingrBg = {
    open: {
      pointerEvents: "auto",
      position: "fixed",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      pointerEvents: "none",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <>
      <RecipeHeader />

      <main className="recipe-page">
        <div className="container" style={{paddingBottom: '1px'}}>
          <div className="row">
            <div className="remove-on-mobile remove-on-tablet col-sm-12 col-md-12 col-lg-4">
              <div className="menu-right-rec">
                <div className="small-menu m-026">
                  <Link href="/">
                    <img src="/Home.svg" />
                  </Link>
                  <Link href="/main">
                    <img src="/Category.svg" />
                  </Link>
                  <Link href="/contact">
                    <img src="/Chat.svg" />
                  </Link>
                </div>
                <div
                  className=" m-026 back-link d-flex ai-center"
                  onClick={() => router.back()}
                >
                  <img src="/arrow-left.svg" />
                  <p>Back</p>
                </div>
                <h3 className="side-title m-026">{currentRecipe?.title}</h3>
                <div className="line"></div>
                <div className="d-flex m-026 mt-20">
                  <img className="hour-icon" src="/Star (1).svg" />
                  <div>
                    <p className="hour-heading">Difficulty</p>

                    <div className="hour-item">
                      <div className="d-flex">
                        {currentRecipe?.difficulty ? (
                          <>
                            {[...Array(currentRecipe?.difficulty)].map(
                              (e, i) => (
                                <img
                                  src="/chef 1.svg"
                                  style={{ marginRight: "6px" }}
                                />
                              )
                            )}
                            {[...Array(5 - currentRecipe?.difficulty)].map(
                              (e, i) => (
                                <img
                                  src="/chef 1-gray.svg"
                                  style={{ marginRight: "6px" }}
                                />
                              )
                            )}
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex m-026 mt-20">
                  <div className="d-flex mr-26  ">
                    <img className="hour-icon" src="/Time Circle.svg" />
                    <div>
                      <p className="hour-heading">Cook</p>
                      <p className="hour-item">{currentRecipe?.cook}</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <img className="hour-icon" src="/Time Circle.svg" />
                    <div>
                      <p className="hour-heading">Prep</p>
                      <p className="hour-item">{currentRecipe?.prep}</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex m-026 mt-20">
                  <img className="hour-icon" src="/map-pin.svg" />
                  <div>
                    <p className="hour-heading">Region</p>
                    <p className="hour-item">{currentRecipe?.region}</p>
                  </div>
                </div>
                <div className="line mt-20 mb-20"></div>
                <p className="ingr-head m-026">Wet Ingredients</p>
                <ul className="ingr-list m-026">
                  {currentRecipe?.ingredients.map((i) => {
                    return <li>{i}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="small-menu fix remove-on-desctop">
              <Link href="/">
                <img src="/Home.svg" />
              </Link>
              <Link href="/main">
                <img src="/Category.svg" />
              </Link>
              <Link href="/contact">
                <img src="/Chat.svg" />
              </Link>

              <img onClick={() => toggleOpen(true)} src="/ingredients 1.svg" />
            </div>
            <motion.div
              className=" ingredients remove-on-desctop"
              initial={false}
              animate={isOpen ? "open" : "closed"}
              onClick={(e) => {
                if (e.target !== containerRef) {
                  toggleOpen(false);
                }
              }}
            >
              <motion.div className="ingr-mob-bg" variants={ingrBg}>
                <motion.div
                  className="ingr-mob"
                  variants={ingr}
                  ref={containerRef}
                >
                  <div
                    className="back mt-20 mb-20"
                    onClick={() => toggleOpen(false)}
                  >
                    <img src="/arrow-left.svg" /> Back
                  </div>
                  <h3 className="side-title ">{currentRecipe?.title}</h3>
                  <p className="ingr-head ">Wet Ingredients</p>
                  <ul className="ingr-list ">
                    {currentRecipe?.ingredients.map((i) => {
                      return <li>{i}</li>;
                    })}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="remove-on-mobile remove-on-tablet col-sm-12 col-md-12 col-lg-8">
              <StepperDesktop recipe={currentRecipe} />
            </div>
          </div>
          <div className="remove-on-desctop col-sm-12 col-md-12 col-lg-12">
            <StepperMobile recipe={currentRecipe} />
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
