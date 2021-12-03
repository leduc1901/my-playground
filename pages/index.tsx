import type { NextPage } from "next";

import React, { useState } from "react";
import { useSpring } from "@react-spring/core";
import { a as animate } from "@react-spring/web";
import FloatingLaptop from "../src/components/FloatingLaptop";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });

  return (
    <div>
      <animate.main
        style={{ background: props.open.to([0, 1], ["#f0f0f0", "#ffffff"]) }}
      >
        <animate.div
          className="home-page-header"
          style={{
            opacity: props.open.to([0, 1], [1, 0]),
            transform: props.open.to(
              (o) => `translate3d(-50%,${o * 50 - 100}px,0)`
            ),
          }}
        >
          <h1 style={{ fontSize: "4rem" }}>Hello</h1>
          <p className="text-xl ">Please click on the laptop</p>
        </animate.div>
        <div className="relative w-full overflow-hidden">
          <FloatingLaptop
            openProps={props.open}
            open={open}
            setOpen={setOpen}
          />

          <animate.div
            className="absolute top-0 pt-20 px-4"
            style={{
              opacity: props.open.to([0, 1], [0, 1]),
              width: "50%",
              right: props.open.to([0, 1], ["-45%", "0"]),
            }}
          >
            <h1 className="text-2xl">Hi, my name is Duc Le</h1>
            <p className="text-xl pt-8">
              I&apos;m a young and passionate programmer with 1+ years of
              experience building small and medium scale web applications
            </p>
            <p className="text-xl pt-8">
              I want to find a professional environment to learn and contribute
            </p>
          </animate.div>
        </div>
      </animate.main>
    </div>
  );
};

export default Home;
