import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import perfil from "assets/img/bg8.jpg";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionLogos from "./Sections/SectionLogos.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionPalabras from "./Sections/SectionPalabras.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCarouselC from "./Sections/SectionCarouselC.js";
import CardsExp from "./Sections/CardsExp.js";
import CardsFor from "./Sections/CardsFor.js";
import CardsPro from "./Sections/CardsPro.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="Raúl Jim Roj"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg12.png").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <img
                  src={perfil}
                  alt="..."
                  style={{ height: "300px", width: "320px" }}
                />
                <h1>Raúl Jiménez R.</h1>
                <h3>rauljimenezemp@gmail.com</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPalabras />
        <SectionLogos />
        <CardsExp />
        <CardsFor />
        <SectionCarouselC />
        <CardsPro />
        <SectionCarousel />
      </div>
      <Footer />
    </div>
  );
}
