import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import ap5 from "assets/img1/cert/cert1.png";
import ap16 from "assets/img1/cert/cert2.png";
import ap2 from "assets/img1/cert/cert3.png";
import ap4 from "assets/img1/cert/cert5.png";
import ap7 from "assets/img1/cert/cert7.png";
import ap8 from "assets/img1/cert/cert8.png";
import ap9 from "assets/img1/cert/cert9.png";
import ap10 from "assets/img1/cert/cert10.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={ap5} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap16} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap2} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap4} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap7} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap8} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap9} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap10} alt="Third slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
