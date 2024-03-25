import React from "react";
import { Fade } from "react-reveal";

const HeadingFade = ({ children, ...rest }) => {
  return (
    <div>
      <Fade bottom duration={1000} ssrFadeout {...rest}>
        {children}
      </Fade>
    </div>
  );
};

export default HeadingFade;
