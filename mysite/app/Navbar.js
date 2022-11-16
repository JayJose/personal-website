"use client";

import { Github, Linkedin } from "grommet-icons";
import Link from "next/link";

export default function Navbar() {
  const linkedinLink = process.env.LINKEDIN;
  const githubLink = process.env.GITHUB;

  return (
    <nav className="navbar">
      <p className="logo">
        <Link href="/">John Murray</Link>
      </p>
      <ul className="navbar--items">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className="navbar--icon">
          <a href={linkedinLink}>
            <Linkedin color={"black"} />
          </a>
        </li>
        <li className="navbar--icon">
          <a href={githubLink}>
            <Github color={"black"} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
