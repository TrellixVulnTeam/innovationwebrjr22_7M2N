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

import actemp from "assets/img1/cards/actemp.png";
import informatex from "assets/img1/cards/informatex.png";
import empublizid from "assets/img1/cards/empublizid.png";
import ruliz from "assets/img1/cards/ruliz.png";

const useStyles = makeStyles(styles);

export default function CardsExp() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>EXPERIENCIA</h2>
      <br />
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={actemp}
                  alt="..."
                  style={{ height: "220px", width: "420px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                <br />
                Texcoco: Creador y director
                <br />
                <small className={classes.smallTitle}>Febrero 2018-2021</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Desarrollé una plataforma web, que funciona como incubadora de
                  negocios, para ayudar a las personas que quieren emprender.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={informatex}
                  alt="..."
                  style={{ height: "180px", width: "400px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                <br />
                Texcoco: Creador y director
                <br />
                <small className={classes.smallTitle}>Febrero 2019</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Desarrollé un medio de comunicación digital, para apoyar la
                  difusión de noticias con contenido positivo y buenos
                  fundamentos,con una inversión mínima y logrando una excelente
                  aceptación de los ciudadanos.
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
                  src={empublizid}
                  alt="..."
                  style={{ height: "230px", width: "420px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                <br />
                Texcoco: Creador y director
                <br />
                <small className={classes.smallTitle}>Febrero 2019</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Desarrollé una agencia de publicidad online, con servicio de
                  desarrollo web, imagen corporativa, redes sociales y
                  contenido.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={ruliz}
                  alt="..."
                  style={{ height: "230px", width: "420px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                <br />
                Texcoco: Creador y director
                <br />
                <small className={classes.smallTitle}>Febrero 2005-2020</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Desarrollé un negocio de alquiler de juegos inflables para
                  fiestas infantiles, con mucho éxito en la zona de Texcoco y
                  municipios de su alrededor.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
