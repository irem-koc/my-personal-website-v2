import { useContext } from "react";
import { MouseContext } from "./../../../context/mouse-context";
import useMousePosition from "./../../../hooks/useMousePosition";

const DotRing = () => {
  const { x, y } = useMousePosition();
  const { cursor } = useContext(MouseContext);
  return (
    <>
      {/* 2. */}
      <div
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2 : 1})`,
          strokeWidth: 1,
          backgroundColor: cursor.active ? "#A5A6FF" : "transparent",
          opacity: cursor.active ? 0.5 : 1,
          transition: "transform .1s ease-in-out",
        }}
        className="ring"
      ></div>
      {/* 3. */}
      <div
        className="dot"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          visibility: cursor.active ? "hidden" : "visible",
        }}
      ></div>
    </>
  );
};

export default DotRing;
