import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import html from "assets/img1/logo/html.png";
import css from "assets/img1/logo/css.png";
import js from "assets/img1/logo/js.png";
import bootstrap from "assets/img1/logo/bootstrap.png";
import node from "assets/img1/logo/node.png";
import react from "assets/img1/logo/react.png";
import react_bootstrap from "assets/img1/logo/react_bootstrap.png";
import firebase from "assets/img1/logo/firebase.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionLogos() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.space50} />
        <div id="images">
          <br />
          <GridContainer justify="center">
            <GridItem
              xs={12}
              sm={2}
              className={classes.marginLeft}
              style={{ width: "100px", height: "100px" }}
            >
              <img
                src={html}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem
              xs={12}
              sm={2}
              className={classes.marginLeft}
              style={{ width: "100px", height: "100px" }}
            >
              <img
                src={css}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem
              xs={12}
              sm={2}
              className={classes.marginLeft}
              style={{ width: "100px", height: "100px" }}
            >
              <img
                src={js}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem
              xs={12}
              sm={2}
              className={classes.marginLeft}
              style={{ width: "110px", height: "100px" }}
            >
              <img
                src={bootstrap}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem
              xs={12}
              sm={2}
              className={classes.marginLeft}
              style={{ width: "130px", height: "130px" }}
            >
              <img
                src={node}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem
              xs={12}
              sm={2}
              className={classes.marginLeft}
              style={{ width: "120px", height: "100px" }}
            >
              <img
                src={react}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem
              xs={12}
              sm={2}
              className={classes.marginLeft}
              style={{ width: "110px", height: "100px" }}
            >
              <img
                src={react_bootstrap}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem
              xs={12}
              sm={2}
              className={classes.marginLeft}
              style={{ width: "110px", height: "100px" }}
            >
              <img
                src={firebase}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
