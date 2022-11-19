"use client";

import { Anchor } from "grommet";
import { Phone, Mail } from "grommet-icons";

export default function Page() {
  const iconColor = "black";
  return (
    <div className="contact">
      <h1>Get in touch!</h1>
      <div className="contact--item">
        <Phone color={iconColor} />
        <h2>(205) 218-7236</h2>
      </div>
      <div className="contact--item">
        <Mail color={iconColor} />
        <h2>
          <Anchor
            color={"black"}
            href="mailto:johnmurray@fastmail.com"
            label="johnmurray@fastmail.com"
          ></Anchor>
        </h2>
      </div>
    </div>
  );
}
