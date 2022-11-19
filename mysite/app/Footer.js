"use client";

import { Github, Linkedin } from "grommet-icons";

export default function Footer() {
  const linkedinLink = process.env.LINKEDIN;
  const githubLink = process.env.GITHUB;

  const copy = "\u00A9";
  const year = new Date().getFullYear();

  return (
    <footer class="footer">
      <p>{`Copyright ${copy} ${year} John J. Murray. All rights reserved.`}</p>
      <p>Made with 🍑 in Atlanta, GA.</p>
      <div>
        <a href={linkedinLink} className="footer--icons">
          <Linkedin color={"black"} />
        </a>
        <a href={githubLink} className="footer--icons">
          <Github color={"black"} />
        </a>
      </div>
    </footer>
  );
}
