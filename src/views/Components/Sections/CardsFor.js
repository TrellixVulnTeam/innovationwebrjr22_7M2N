import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import devf from "assets/img1/cards/devf.png";
import adwords from "assets/img1/cards/adwords.png";
import liceo from "assets/img1/cards/liceo.png";

const useStyles = makeStyles(styles);

export default function CardsFor() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>FORMACIÓN</h2>
      <br />
      <br />
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={devf}
                  alt="..."
                  className={imageClasses}
                  style={{ height: "150px", width: "250px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>BOOT CAMP DEV.F</h4>
              <h4 className={classes.cardTitle}>
                CDMX: Máster en coding.
                <br />
                <small className={classes.smallTitle}>
                  Febrero 2021- febrero 2022
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Actualmente tomo el curso de Máster en Coding en el Bootcamp
                  DEV.F.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={adwords} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>MERCATITLÁN</h4>
              <h4 className={classes.cardTitle}>
                CDMX. Google AdWords.
                <br />
                <small className={classes.smallTitle}>Febrero 2017</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Tomé el curso intensivo de Google AdWords.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={liceo}
                  alt="..."
                  className={imageClasses}
                  style={{ height: "100px", width: "250px" }}
                />
              </GridItem>
              <br />
              <br />
              <h4 className={classes.cardTitle}>
                LICEO UNIVERSIDAD PEDRO DE GANTE
              </h4>
              <h4 className={classes.cardTitle}>
                Texcoco: Comercio Internacional.
                <br />
                <small className={classes.smallTitle}>2013-2016</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Curse la carrera de Comercio Internacional, no tramite mi
                  titulo.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
