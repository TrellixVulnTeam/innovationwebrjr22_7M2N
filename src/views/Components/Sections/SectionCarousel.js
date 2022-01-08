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

import ap5 from "assets/img1/aptit/ap5.jpg";
import ap16 from "assets/img1/aptit/ap16.jpg";
import ap2 from "assets/img1/aptit/ap2.jpg";
import ap3 from "assets/img1/aptit/ap3.jpg";
import ap4 from "assets/img1/aptit/ap4.jpg";
import ap6 from "assets/img1/aptit/ap6.jpg";
import ap7 from "assets/img1/aptit/ap7.jpg";
import ap8 from "assets/img1/aptit/ap8.jpg";
import ap9 from "assets/img1/aptit/ap9.jpg";
import ap10 from "assets/img1/aptit/ap10.jpg";
import ap11 from "assets/img1/aptit/ap11.jpg";
import ap12 from "assets/img1/aptit/ap12.jpg";
import ap13 from "assets/img1/aptit/ap13.jpg";
import ap14 from "assets/img1/aptit/ap14.jpg";
import ap15 from "assets/img1/aptit/ap15.jpg";

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
                  <img src={ap3} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap4} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap6} alt="Third slide" className="slick-image" />
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
                <div>
                  <img src={ap11} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap12} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap13} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap14} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={ap15} alt="Third slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
