import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Courses from "./Courses";
import Footer from "./Footer";
// import '../App.css';

export default function Home(){
    return(
        <>
        <Header/>
        <Carousel/>
        <Courses/>
        <Footer/>
        </>
    )
}