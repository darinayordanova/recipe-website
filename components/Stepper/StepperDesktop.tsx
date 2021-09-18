import Head from "next/head";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

export default function StepperDesktop({ recipe }) {
  const [step, setStep] = useState(0);
  let finalArr = recipe?.images?.map((item) => ({ src: item }));
  const [el, setEl] = useState(finalArr);
  const { openLightbox } = useLightbox();
  useEffect(() => {
    let finalArr = recipe?.images?.map((item) => ({ src: item }));
    setEl(finalArr);
  }, [recipe]);

  const options = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
    },
  };

  return (
    <div className="stepperDesk">
      <div className="d-flex">
        <div className="stepsDesk">
          {recipe?.steps.map((item, index) => {
            return (
              <p
                className={
                  index == step ? "step-circle current" : "step-circle"
                }
                key={index}
              >
                {index}
              </p>
            );
          })}
        </div>
        <div className="steps-conrent-desktop">
          <div className="imges-div">
            <SRLWrapper elements={el} options={options} />
            {recipe?.images?.slice(0, 4)?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="img-div-desk"
                  onClick={() => openLightbox(index)}
                >
                  <img className="br-4" src={item} />
                  {index == 3 && recipe?.images?.length > 4 ? (
                    <div className="overlay-img">
                      <p>+ {recipe?.images?.length - 4}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <p className="recipe-category">{recipe?.category}</p>
          <h3>{recipe?.title}</h3>
          <div className="paragraphs-cont">
            {recipe?.steps[step]?.split("\n").map((item) => (
              <p className="recipe-p">{item}</p>
            ))}
          </div>
          <div className="d-flex jc-sb prev-next-btn">
            <h5
              style={step == 0 ? { opacity: "0.5", cursor: "auto" } : null}
              onClick={() => {
                step != 0 ? setStep(step - 1) : null;
              }}
            >
              Step Back
            </h5>
            <h5
              style={
                step == recipe?.steps?.length - 1
                  ? { opacity: "0.5", cursor: "auto" }
                  : null
              }
              onClick={() => {
                step != recipe?.steps?.length - 1 ? setStep(step + 1) : null;
              }}
            >
              Next Step
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
