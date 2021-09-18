import CategoryHeader from "../../components/Headers/CategoryHeader/CategoryHeader";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { recipes } from "../../recipes";
import Link from "next/link";

export default function Category() {
  const router = useRouter();
  const { category } = router.query;
  const [recipesList, setRecipesList] = useState();
  useEffect(() => {
    // ToDo
    // get your recepies by the category
    // category is your key word
    // then set the array in setRecipesList
    setRecipesList(recipes);
  }, []);

  return (
    <>
      <CategoryHeader showCategoryMenu currentCategory={category} showTopPicks={true} />

      <main className="bg-dark-bige category-page">
        <div className="container">
          <div className="row">
            <div className="remove-on-mobile remove-on-tablet col-sm-12 col-md-12 col-lg-4">
              <div className="menu-right">
                <div className="small-menu m-026">
                  <Link href="/">
                    <img src="/Home.svg" />
                  </Link>
                  <Link href="/contact">
                    <img src="/Chat.svg" />
                  </Link>
                </div>
                <div className="links">
                  <Link href="/main">
                    <a
                      style={{
                        color: category == "main" ? "#FF8549" : "#252833",
                      }}
                    >
                      Main
                    </a>
                  </Link>
                  <Link href="/salad">
                    <a
                      style={{
                        color: category == "salad" ? "#FF8549" : "#252833",
                      }}
                    >
                      Salad
                    </a>
                  </Link>
                  <Link href="/dessert">
                    <a
                      style={{
                        color: category == "dessert" ? "#FF8549" : "#252833",
                      }}
                    >
                      Dessert
                    </a>
                  </Link>
                  <Link href="/breakfast">
                    <a
                      style={{
                        color: category == "breakfast" ? "#FF8549" : "#252833",
                      }}
                    >
                      Breakfast
                    </a>
                  </Link>
                  <Link href="/bread">
                    <a
                      style={{
                        color: category == "bread" ? "#FF8549" : "#252833",
                      }}
                    >
                      Bread
                    </a>
                  </Link>
                  <Link href="/sides">
                    <a
                      style={{
                        color: category == "sides" ? "#FF8549" : "#252833",
                      }}
                    >
                      Sides
                    </a>
                  </Link>
                  <Link href="/drinks">
                    <a
                      style={{
                        color: category == "drinks" ? "#FF8549" : "#252833",
                      }}
                    >
                      Drinks
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="small-menu fix remove-on-desctop">
              <Link href="/">
                <img src="/Home.svg" />
              </Link>
              <Link href="/contact">
                <img src="/Chat.svg" />
              </Link>
            </div>
            <div className=" col-sm-12 col-md-12 col-lg-8">
              <div className="category-grid">
                {recipesList?.map((item) => {
                  return (
                    <Link href={`${item?.category}${item?.url}`}>
                      <div className="list-item">
                        <div className="top">
                          <img className="cover br-6" src={item?.cover} />
                          <h3>{item.title}</h3>

                          <a>
                            <img src="./chevron-right.svg" />
                          </a>
                        </div>
                        <div className="line"></div>
                        <div className="bottom">
                          <div className="d-flex jc-sb">
                            <div>
                              <div className="d-flex">
                                <img
                                  className="hour-icon"
                                  src="./Time Circle.svg"
                                />
                                <div>
                                  <p className="hour-heading">Prep</p>
                                  <p className="hour-item">{item?.prep}</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex">
                                <img
                                  className="hour-icon"
                                  src="./Time Circle.svg"
                                />
                                <div>
                                  <p className="hour-heading">Cook</p>
                                  <p className="hour-item">{item?.cook}</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex">
                                <img
                                  className="hour-icon"
                                  src="./map-pin.svg"
                                />
                                <div>
                                  <p className="hour-heading">Region</p>
                                  <p className="hour-item">{item?.region}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
