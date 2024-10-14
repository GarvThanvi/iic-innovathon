import React from "react";
import styles from "./Home.module.css";
import Hero from "../components/Hero";
import StayInformed from "../components/StayInformed";
import Schedule from "../components/Schedule";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Hero> </Hero>
      <Schedule></Schedule>
      <StayInformed></StayInformed>
      <Questions></Questions>
      <Footer></Footer>
    </>
  );
}
