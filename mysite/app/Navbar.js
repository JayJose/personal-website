"use client";

import { Github, Linkedin } from "grommet-icons";

export default function Navbar() {
  return (
    <nav class="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <Linkedin></Linkedin>
        </li>
        <li>
          <Github></Github>
        </li>
      </ul>
    </nav>
  );
}
