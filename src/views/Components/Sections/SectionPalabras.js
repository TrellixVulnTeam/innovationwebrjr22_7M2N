import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Slide from "@material-ui/core/Slide";
import Tooltip from "@material-ui/core/Tooltip";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function SectionPalabras() {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div id="buttons">
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
              <Tooltip
                id="tooltip-left"
                title="ttttttttt hdsdhcdfhdbcd sbshbchsbchsbc shbsbhsbchsb hbhsbcsbchsbn hbhsbbdhbd bbhbdchdbchdebn hbchdbfbehd"
                placement="left"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="rose">INNOVACIÓN</Button>
              </Tooltip>
              <Button color="primary">TECNOLOGÍA</Button>
              <Button color="info">SOFTWARE</Button>
              <Button color="success">EMPRENDIMIENTO</Button>
              <Button color="warning">NEGOCIOS</Button>
              <Button color="danger">INVESTIGACIÓN</Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
