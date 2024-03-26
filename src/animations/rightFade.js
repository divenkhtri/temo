import React from "react";
import { Fade } from "react-reveal";

const RightFade = ({ children, ...rest }) => {
  return (
    <div>
      <Fade right duration={1000} ssrFadeout {...rest}>
        {children}
      </Fade>
    </div>
  );
};

export default RightFade;
