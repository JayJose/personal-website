"use client";
import { Anchor } from "grommet";
import { DocumentDownload } from "grommet-icons";

export default function Page() {
  return (
    <>
      <h1>About...</h1>
      <DocumentDownload />
      <Anchor
        href="John_Murray_Resume.pdf"
        label="Download my resume."
        download
      />
    </>
  );
}
