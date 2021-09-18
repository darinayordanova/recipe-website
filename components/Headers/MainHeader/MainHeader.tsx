import Head from "next/head";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { MenuToggle } from "../MenuToggle";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./mobileMenu";
import { useRouter } from "next/router";

export default function MainHeader(props) {
  const router = useRouter();
  const useDimensions = (ref) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;
  };
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchOpenMobile, setIsSearchOpenMobile] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const sidebar = {
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
        delay: 0.3,
      },
    },
  };

  const search = {
    open: {
      width: "150px",
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      width: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  const close = {
    open: {
      pointerEvents: "auto",
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

  const searchMob = {
    open: {
      height: "auto",
      paddingBottom: "0px",
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      height: 0,
      paddingBottom: "0px",

      transition: {
        duration: 0.3,
      },
    },
  };

  const redirectToSearch = () => {
    router.push("/search?searchfor=" + searchWord);
    setSearchWord("");
    setIsSearchOpen(false);
    setIsSearchOpenMobile(false);
  };
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta name="title" content="Some Subtitle for Google" />
        <meta name="description" content="✉ Email@email.com" />{/* //ToDo */}
        <title>Kush’s Kitchen</title>
      </head>
      <header>
        <div className="container  ">
          <div className="row ai-center">
            <div className="remove-on-mobile remove-on-tablet col-md-4 col-lg-4 ">
              <Link href="/">
                <a>
                  <img className="logo-div" src="/Logo-Dark.svg" />
                </a>
              </Link>
            </div>
            <div className=" remove-on-mobile remove-on-tablet d-flex col-md-8  ai-center col-lg-8 flex-end menu-links">
              <motion.div
                className="d-flex ai-center"
                initial={false}
                animate={isSearchOpen ? "open" : "closed"}
                style={{ marginRight: "40px" }}
              >
                <img
                  style={{ cursor: "pointer", marginRight: "8px" }}
                  onClick={() =>
                    isSearchOpen ? redirectToSearch() : setIsSearchOpen(true)
                  }
                  src="/search (2).svg"
                />
                <motion.input
                  className=""
                  style={{ margin: "0", padding: "0" }}
                  variants={search}
                  value={searchWord}
                  onKeyDown={(e) =>
                    e.keyCode == 13 ? redirectToSearch() : null
                  }
                  onChange={(e) => setSearchWord(e.target.value)}
                />

                <motion.img
                  className=""
                  style={{
                    margin: "0 0 0 -15px",
                    cursor: "pointer",
                    width: "10px",
                    padding: "0",
                  }}
                  variants={close}
                  src="/close.svg"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchWord("");
                  }}
                />
              </motion.div>

              <Link href="/contact">
                <a className="mr-40px">Contact Me</a>
              </Link>

              <Link href="/catalog">
                <a className="main-btn">Go Cooking</a>
              </Link>
            </div>
          </div>
          <div className="row  remove-on-desctop  ai-center">
            <div className="col-1" style={{ zIndex: "100" }}>
              <img
                className="search"
                onClick={() =>
                  isSearchOpenMobile
                    ? redirectToSearch()
                    : setIsSearchOpenMobile(true)
                }
                src="/search (2).svg"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="col-10 ta-center" style={{ zIndex: "100" }}>
              <Link href="/">
                <a>
                  <img className="logo-div " src="/Logo-Dark.svg" />
                </a>
              </Link>
            </div>
            <div className="col-1"></div>
          </div>
          <motion.nav
            className=" remove-on-desctop"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div className="bg-mobile" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </div>
        <motion.div
          className="d-flex ai-center full-width"
          initial={false}
          animate={isSearchOpenMobile ? "open" : "closed"}
          style={{
            margin: "0 auto",
            padding: "0",
            overflow: "hidden",
            width: "calc(100% - 60px)",
          }}
          variants={searchMob}
        >
          <motion.input
            style={{ width: "100%", padding: "0", margin: "20px 0" }}
            value={searchWord}
            onKeyDown={(e) => (e.keyCode == 13 ? redirectToSearch() : null)}
            onChange={(e) => setSearchWord(e.target.value)}
          />

          <motion.img
            className=""
            style={{
              margin: "0 0 0 -15px",
              cursor: "pointer",
              width: "10px",
              padding: "0",
            }}
            variants={close}
            src="/close.svg"
            onClick={() => {
              setIsSearchOpenMobile(false);
              setSearchWord("");
            }}
          />
        </motion.div>
        {props.showCategoryMenu && (
          <div className="recepies-menu">
            <Link href="/main">
              <a>Main</a>
            </Link>
            <Link href="/salad">
              <a>Salad</a>
            </Link>
            <Link href="/dessert">
              <a>Dessert</a>
            </Link>
            <Link href="/breakfast">
              <a>Breakfast</a>
            </Link>
            <Link href="/bread">
              <a>Bread</a>
            </Link>
            <Link href="/sides">
              <a>Sides</a>
            </Link>
            <Link href="/drinks">
              <a>Drinks</a>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
