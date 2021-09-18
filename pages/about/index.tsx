import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import Link from "next/link";
export default function About() {


  return (
    <>
      <MainHeader  />

      <main className="bg-dark-bige category-page">
        <div className="container">
          <h2 className="mb-40px">About</h2>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
