import CategoryHeader from "../../components/Headers/CategoryHeader/CategoryHeader";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { recipes } from "../../recipes";
import Link from "next/link";
export default function Search() {
  const router = useRouter();
  const { search, searchfor } = router.query;
  const [searchRes, setSearchRes] = useState();

  //on component mount
  useEffect(() => {
    //ToDo
    //get your search results
    // searchfor is your key word
    //then set the array in setSearchRes
    setSearchRes(recipes);
  }, []);

  return (
    <>
      <CategoryHeader />

      <main className="bg-dark-bige category-page">
        <div className="container">
          <h2 className="mb-40px">
            {searchRes?.length} result(s) for '{searchfor}'
          </h2>
          <div className="search-grid">
            {searchRes?.map((item) => {
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
                              src="./Time Circle.svg"
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
      </main>
      <Footer />
    </>
  );
}
