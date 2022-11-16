"use client";

import { Anchor } from "grommet";
import { Phone, Mail } from "grommet-icons";

export default function Page() {
  return (
    <div className="contact">
      <h1>Get in touch!</h1>
      <div className="contact--item">
        <Phone />
        <h2>(205) 218-7236</h2>
      </div>
      <div className="contact--item">
        <Mail />
        <h2>
          <Anchor
            href="mailto:johnmurray@fastmail.com"
            label="johnmurray@fastmail.com"
          ></Anchor>
        </h2>
      </div>
    </div>
  );
}
