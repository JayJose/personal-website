"use client";

import Draggable from "react-draggable"; // The default

import { Anchor } from "grommet";
import { UserWorker } from "grommet-icons";

export default function Page() {
  return (
    <div>
      <h1>Woof woof</h1>
      <p>This page is under construction.</p>
      <Draggable>
        <div>
          <img
            style={{ height: "250px", width: "250px" }}
            src="images/luna.png"
            alt="Luna the dog."
          />
        </div>
      </Draggable>
      <div>
        <img
          style={{ height: "250px", width: "250px" }}
          src="images/dogs.png"
          alt="The dogs."
        />
      </div>
    </div>
  );
}
