import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import texemp from "assets/img1/cards/texemp.png";
import soytex from "assets/img1/cards/soytex.png";
import negociostex from "assets/img1/cards/negociostex.png";
import fiesta from "assets/img1/cards/fiesta.png";
import extrem from "assets/img1/cards/extrem.png";
import diverti from "assets/img1/cards/diverti.png";

const useStyles = makeStyles(styles);

export default function CardsExp() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>PROYECTOS</h2>
      <br />
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={texemp}
                  alt="..."
                  style={{ height: "200px", width: "380px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                <br />
                <br />
                <br />
                TEXCOCO EMPRENDEDORES
                <br />
                <small className={classes.smallTitle}>
                  Medio de comunicación.
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Un espacio para hacer networking con emprendedores y
                  fortalecer los conocimientos.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={soytex}
                  alt="..."
                  style={{ height: "200px", width: "380px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                <br />
                <br />
                <br />
                SOY TEXCOCO
                <br />
                <small className={classes.smallTitle}>
                  Medio de comunicación.
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Un espacio con contenido atractivo del municipio.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={negociostex}
                  alt="..."
                  style={{ height: "250px", width: "400px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                <br />
                NEGOCIOS TEXCOCO
                <br />
                <small className={classes.smallTitle}>
                  Directorio de comercios locales.
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Una plataforma web que funciona como un directorio de
                  negocios.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={extrem}
                  alt="..."
                  style={{ height: "200px", width: "400px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                <br />
                <br />
                <br />
                <br />
                VIVEXTREM
                <br />
                <small className={classes.smallTitle}>
                  Agencia de deportes extremos.
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Una agencia de viajes para realizar deportes extremos.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={fiesta}
                  alt="..."
                  style={{ height: "280px", width: "420px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                <br />
                EXPO FIESTA KIDS
                <br />
                <small className={classes.smallTitle}>
                  Organización de una Expo.
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Expo de productos y servicios para fiestas infantiles.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={diverti}
                  alt="..."
                  style={{ height: "220px", width: "420px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                <br />
                <br />
                <br />
                DIVERTINFLABLES
                <br />
                <small className={classes.smallTitle}>
                  Fabrica de inflables.
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Una fábrica y distribuidora de juegos inflables.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
