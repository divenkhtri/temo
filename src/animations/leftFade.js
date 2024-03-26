import React from "react";
import { Fade } from "react-reveal";

const LeftFade = ({ children, ...rest }) => {
  return (
    <div>
      <Fade left duration={1000} ssrFadeout {...rest}>
        {children}
      </Fade>
    </div>
  );
};

export default LeftFade;
