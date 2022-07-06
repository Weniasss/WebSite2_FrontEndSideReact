import React from "react";

import FooterTitle from "../../atoms/Footer/FooterTitle";
import FooterLink from "../../atoms/Footer/FooterLink";

const FooterColumn2 = (props) => {
  return (
    <div>
      <FooterTitle title={props.title1} />

      <FooterLink text={props.text1} />

      <FooterLink text={props.text2} />

      <FooterLink text={props.text3} />

      <FooterLink text={props.text4} />
    </div>
  );
};

export default FooterColumn2;
