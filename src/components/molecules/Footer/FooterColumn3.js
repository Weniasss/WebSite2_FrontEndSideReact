import React from "react";

import FooterTitle from "../../atoms/Footer/FooterTitle";
import FooterInformation from "../../atoms/Footer/FooterInformation";

const FooterColumn3 = () => {
  return (
    <div class="">
      <FooterTitle title="Contacts" />

      <FooterInformation text="New York, NY 10012, US" icon="faHome" />

      <FooterInformation text="info@example.com" icon="faEnvelope" />

      <FooterInformation text="+ 01 234 567 88" icon="faPhone" />

      <FooterInformation text="+ 01 234 567 89" icon="faMobileRetro" />
    </div>
  );
};

export default FooterColumn3;
