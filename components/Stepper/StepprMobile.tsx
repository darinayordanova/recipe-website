import Head from "next/head";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";

export default function StepperMobile({ recipe }) {
  const [step, setStep] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="stepperMob">
      <div className="steps-current-mobile">
        <p className="recipe-category">{recipe?.category}</p>
        <h3>{recipe?.title}</h3>
        <div className="d-flex jc-sb mb-26">
          <div className="d-flex">
            {recipe?.difficulty ? (
              <>
                {[...Array(recipe?.difficulty)].map((e, i) => (
                  <img src="/chef 1.svg" style={{ marginRight: "6px" }} />
                ))}
                {[...Array(5 - recipe?.difficulty)].map((e, i) => (
                  <img src="/chef 1-gray.svg" style={{ marginRight: "6px" }} />
                ))}
              </>
            ) : null}
          </div>
          <div className="d-flex">
            <img
              className="hour-icon"
              src="/Time Circle.svg"
              style={{ marginRight: "12px" }}
            />
            <p className="hour-item">{recipe?.cook}</p>
          </div>
          <div className="d-flex">
            <img
              className="hour-icon"
              src="/Time Circle.svg"
              style={{ marginRight: "12px" }}
            />
            <p className="hour-item">{recipe?.prep}</p>
          </div>
        </div>
        {step == 0 && (
          <Slider {...settings} style={{ marginBottom: "50px" }}>
            {recipe?.images.map((item) => (
              <div>
                <img className="full-width h-100vw-60 br-4" src={item} />
              </div>
            ))}
          </Slider>
        )}
        {step != 0 && (
          <div className="d-flex steps-mobile">
            <p className="step-circle current">1</p>
            <p className="step-title">Step {step}</p>
          </div>
        )}
        <div>
          {recipe?.steps[step]?.split("\n").map((item) => (
            <p className="recipe-p">{item}</p>
          ))}
        </div>
        {step == 0 ? (
          <div style={{ marginTop: "40px", marginBottom: "100px" }}>
            <button className="main-btn" onClick={() => setStep(step + 1)}>
              Start Cooking
            </button>
          </div>
        ) : (
          <div style={{ marginTop: "40px", marginBottom: "100px" }}>
            <button
              className="main-btn"
              style={{ marginBottom: "16px" }}
              onClick={() => setStep(step + 1)}
              disabled={step == recipe?.steps.length - 1}
            >
              Next Step {step + 1}/{recipe?.steps.length}
            </button>
            <button
              className="main-btn-outline"
              onClick={() => setStep(step - 1)}
            >
              Step Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
