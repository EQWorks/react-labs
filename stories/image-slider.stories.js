import React, { useRef } from "react";
import ImageSlider from "../src/imageSlider";
import { data, data2, data3 } from "./data/cardInfo";
import ImageCard from '../src/imageSlider/cards/image-card';
import CategoryCard from '../src/imageSlider/cards/category-card';

export default {
  component: ImageSlider,
  title: "Image Slider",
};


export const Bundles = () => {
  const cards = data3.map( prop => <ImageCard prop={prop}/>);
  return (
    <ImageSlider
      topSectionContent={{
        title: "Bundles",
        paragraph:
          "Bundles are the collection of segments and layers packaged based on a specific persona.",
        button: "View all",
      }}
      carouselContent={{
        imagesToShow: 3,
        content: cards,
      }}
    />
  );
};

export const Categories = () => {
  const cards = data2.map( prop => <CategoryCard prop={prop}/>);
  return (
    <ImageSlider
      topSectionContent={{
        title: "Categories",
        paragraph: "",
        button: "Customize my feed",
      }}
      carouselContent={{
        imagesToShow: 6,
        content: cards,
      }}
    />
  );
};