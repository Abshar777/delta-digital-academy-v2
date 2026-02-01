"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import LogoD from "@/../public/logoD.png";

const Cursor = () => {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth <= 1024) return;

    const ball = ballRef.current;
    if (!ball) return;

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const ratio = 0.15;
    let active = false;

    const BALL = {
      width: 48,
      height: 48,
      border: 2,
      opacity: 1,
      magnetic: 70,
      alter: 100,
    };

    gsap.set(ball, {
      xPercent: -50,
      yPercent: -50,
      width: BALL.width,
      height: BALL.height,
      borderWidth: BALL.border,
      opacity: BALL.opacity,

    });

    const mouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // console.log(mouse.x, mouse.y);
    };

    const update = () => {
      if (!active) {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;
        gsap.set(ball, { x: pos.x, y: pos.y });
        document.body.style.cursor = "none";
      }
    };

    gsap.ticker.add(update);
    window.addEventListener("mousemove", mouseMove);
    

    
    

    // ===============================
    // Hide Cursor on Elements
    // ===============================
    const hideTargets = document.querySelectorAll(
      "a, button, iframe, .tt-hide-cursor"
    );

    hideTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(ball, { scale: 0, opacity: 0, duration: 0.3 });
      });
      document.body.style.cursor = "pointer";
      el.addEventListener("mouseleave", () => {
        gsap.to(ball, { scale: 1, opacity: BALL.opacity, duration: 0.3 });
      });
    });

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);


 
  return (
    <div id="magic-cursor" className="">
      <div id="ball" className="opacity-0" style={{border:"none"}} ref={ballRef}>
        <Image src={LogoD} alt="logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default Cursor;
