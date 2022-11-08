"use client";

import { Github, Linkedin } from "grommet-icons";
import Link from "next/link";

export default function Navbar() {
  const linkedinLink = process.env.LINKEDIN;
  const githubLink = process.env.GITHUB;
  return (
    <nav class="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <a href={linkedinLink}>
            <Linkedin></Linkedin>
          </a>
        </li>
        <li>
          <a href={githubLink}>
            <Github></Github>
          </a>
        </li>
      </ul>
    </nav>
  );
}
