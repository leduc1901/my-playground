import type { NextPage } from "next";

import React, { useState } from "react";
import Link from "next/link";
import { useProgress } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as animate } from "@react-spring/web";
import FloatingLaptop from "../src/components/FloatingLaptop";
import { useFade } from "../src/springs/fade";
import { useSlideFromBottom } from "../src/springs/slideFromBottom";
import { Loader } from "../src/springs/loader";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });
  const { progress } = useProgress();

  const fadeIntroduction = useFade({ open, delay: 800 });
  const fadeApp1 = useFade({ open, delay: 1200 });
  const fadeApp2 = useFade({ open, delay: 1600 });
  const fadeApp3 = useFade({ open, delay: 2000 });
  const slideIntroduction = useSlideFromBottom({
    open,
    delay: 800,
    distance: 40,
  });

  const slideApp1 = useSlideFromBottom({
    open,
    delay: 1200,
    distance: 40,
  });

  const slideApp2 = useSlideFromBottom({
    open,
    delay: 1600,
    distance: 40,
  });

  const slideApp3 = useSlideFromBottom({
    open,
    delay: 2000,
    distance: 40,
  });

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
          {progress < 100 ? (
            <div className="w-full flex justify-center">
              <Loader progress={progress} />
            </div>
          ) : (
            <p className="text-xl">Please click on the laptop</p>
          )}
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
            <animate.p
              className="text-xl pt-8"
              style={{
                opacity: fadeIntroduction,
                marginTop: slideIntroduction,
              }}
            >
              Here are the small apps I built in my spare time:
            </animate.p>
            <div className="flex flex-col">
              {[
                {
                  name: "To do list",
                  opacity: fadeApp1,
                  slide: slideApp1,
                  href: "/todo-list",
                },
                {
                  name: "Music Player",
                  opacity: fadeApp2,
                  slide: slideApp2,
                  href: "/",
                },
                {
                  name: "Calculator",
                  opacity: fadeApp3,
                  slide: slideApp3,
                  href: "/",
                },
              ].map(({ href, slide, opacity, name }, index) => (
                <Link href={href} passHref key={index}>
                  <animate.a
                    style={{
                      opacity,
                      marginTop: slide,
                    }}
                    className="text-xl pt-8 underline"
                  >
                    {name}
                  </animate.a>
                </Link>
              ))}
            </div>
          </animate.div>
        </div>
      </animate.main>
    </div>
  );
};

export default Home;
