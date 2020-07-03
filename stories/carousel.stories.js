/* eslint react/prop-types: 0 */
import React from "react";
import Carousel from "../src/carousel";
import {
  Avatar,
  Chip,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import { data, data2, data3 } from "./data/cardInfo";


export default {
  component: Carousel,
  title: "Carousel",
};

export const Default = () => <Carousel/>
