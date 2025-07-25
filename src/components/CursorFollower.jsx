import React, { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const followerRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      posX.current += (mouseX.current - posX.current) * 0.1;
      posY.current += (mouseY.current - posY.current) * 0.1;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${posX.current}px, ${posY.current}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate(); // Start animation

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 w-4 h-4 bg-[#A7E92F] rounded-full pointer-events-none z-50"
      style={{
        transform: 'translate3d(0, 0, 0)',
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
}
