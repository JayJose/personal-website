"use client";
import { Anchor } from "grommet";
import { DocumentDownload } from "grommet-icons";

export default function Page() {
  return (
    <>
      <h1>Work</h1>
      <DocumentDownload color={"black"} />
      <Anchor
        color={"black"}
        href="John_Murray_Resume.pdf"
        label="Download my resume."
        download
      />
      <p>Experience</p>
      <p>Certifications & Skills</p>
      <p>Publications</p>
    </>
  );
}
