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
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/dogs">Dogs</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
      </ul>
    </nav>
  );
}
