import React, { useEffect, useState } from 'react';

function Cursor() {

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      // circle.style.backgroundColor = "white";
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => cancelAnimationFrame(animateCircles);
  }, []);

  const circleElements = [];
  for (let i = 0; i < 20; i++) {
    circleElements.push(
      <div
        key={i}
        className="circle  bg-white"
        style={{
          position: 'absolute',
          display: 'block',
          width: '15px',
          height: '15px',
          borderRadius: '20px',
        }}
      ></div>
    );
  }

  return (
    <>
      <div className="cursor" style={{ pointerEvents: 'none', position: 'fixed', display: 'block', borderRadius: 0, mixBlendMode: 'difference', top: 0, left: 0, zIndex: 5 }}>
        {circleElements}
      </div>
    </>
  );
};

export default Cursor;
