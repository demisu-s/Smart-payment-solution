// components/GradientAnimation.js
import { useEffect, useRef } from "react";
import Gradient from "@/components/Gradient"; // Correct the import path as needed

const GradientAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Instantiate the Gradient class only once after the component mounts
    if (canvasRef.current) {
      const gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "250px", // Adjust the height as needed
        transform: "skewY(-8deg)", // Creates the slanted look
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "-1",
        overflow: "hidden",
      }}
    >
      {/* The canvas element where the gradient animation will render */}
      <canvas
        id="gradient-canvas"
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
      ></canvas>
    </div>
  );
};

export default GradientAnimation;
