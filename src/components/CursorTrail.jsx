// "use client"

// import { useState, useEffect, useCallback, useRef } from "react"

// export default function CursorTrail() {
//   const [cursorTrail, setCursorTrail] = useState([])
//   const [isClient, setIsClient] = useState(false)
//   const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 })
//   const lastMousePos = useRef({ x: 0, y: 0 })
//   const animationFrame = useRef()

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   const handleMouseMove = useCallback((e) => {
//     const currentTime = Date.now()
//     const velocity = {
//       x: e.clientX - lastMousePos.current.x,
//       y: e.clientY - lastMousePos.current.y,
//     }

//     setMouseVelocity(velocity)
//     lastMousePos.current = { x: e.clientX, y: e.clientY }

//     setCursorTrail((prevTrail) => [
//       {
//         x: e.clientX,
//         y: e.clientY,
//         id: currentTime,
//         velocity: Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y),
//         angle: (Math.atan2(velocity.y, velocity.x) * 180) / Math.PI,
//       },
//       ...prevTrail.slice(0, 12), // Keep 13 trail elements for smoother effect
//     ])
//   }, [])

//   // Auto-cleanup old trail elements
//   useEffect(() => {
//     const cleanup = () => {
//       setCursorTrail((prevTrail) => prevTrail.filter((cursor) => Date.now() - cursor.id < 800))
//       animationFrame.current = requestAnimationFrame(cleanup)
//     }
//     animationFrame.current = requestAnimationFrame(cleanup)

//     return () => {
//       if (animationFrame.current) {
//         cancelAnimationFrame(animationFrame.current)
//       }
//     }
//   }, [])

//   useEffect(() => {
//     if (isClient) {
//       window.addEventListener("mousemove", handleMouseMove)
//       return () => {
//         window.removeEventListener("mousemove", handleMouseMove)
//       }
//     }
//   }, [handleMouseMove, isClient])

//   if (!isClient) {
//     return null
//   }

//   return (
//     <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
//       {/* Main cursor trail */}
//       {cursorTrail.map((cursor, index) => {
//         const age = Date.now() - cursor.id
//         const opacity = Math.max(0, 1 - age / 600)
//         const scale = Math.max(0.4, 1 - index * 0.06)
//         const velocityScale = Math.min(1.8, 1 + cursor.velocity * 0.008)

//         // Alternate between the two green colors
//         const isEven = index % 2 === 0
//         const primaryColor = isEven ? "#A7E92F" : "#32C766"
//         const secondaryColor = isEven ? "#32C766" : "#A7E92F"

//         return (
//           <div
//             key={cursor.id}
//             className="absolute transition-all duration-75 ease-out"
//             style={{
//               left: cursor.x,
//               top: cursor.y,
//               transform: `translate(-50%, -50%) scale(${scale * velocityScale}) rotate(${cursor.angle}deg)`,
//               opacity: opacity,
//             }}
//           >
//             {/* Route/Path cursor design */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="28"
//               viewBox="0 0 28 28"
//               width="28"
//               className="drop-shadow-lg"
//             >
//               <g fill="none" fillRule="evenodd" transform="translate(6 4)">
//                 {/* Outer glow */}
//                 <circle cx="8" cy="8" r="10" fill={primaryColor} opacity="0.3" className="blur-sm" />
//                 {/* Main cursor body */}
//                 <path
//                   d="m8 20c-1.105 0-2-.895-2-2 0-.738.405-1.376 1-1.723v-12.554c-.595-.347-1-.985-1-1.723 0-1.105.895-2 2-2s2 .895 2 2c0 .738-.405 1.376-1 1.723v12.554c.595.347 1 .985 1 1.723 0 1.105-.895 2-2 2z"
//                   fill="#ffffff"
//                   className="drop-shadow-sm"
//                 />
//                 <path
//                   d="m8 18.5c-.828 0-1.5-.672-1.5-1.5 0-.552.298-1.032.75-1.292v-11.416c-.452-.26-.75-.74-.75-1.292 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .552-.298 1.032-.75 1.292v11.416c.452.26.75.74.75 1.292 0 .828-.672 1.5-1.5 1.5z"
//                   fill={primaryColor}
//                 />
//                 {/* Route dots */}
//                 <circle cx="8" cy="3" r="2" fill={secondaryColor} />
//                 <circle cx="8" cy="17" r="2" fill={secondaryColor} />
//               </g>
//             </svg>

//             {/* Glowing route effect */}
//             <div
//               className="absolute inset-0 rounded-full blur-md"
//               style={{
//                 background: `radial-gradient(circle, ${primaryColor}40 0%, ${secondaryColor}20 50%, transparent 70%)`,
//                 transform: `scale(${1.5 + cursor.velocity * 0.03})`,
//               }}
//             />
//           </div>
//         )
//       })}

//       {/* Route particles for high velocity */}
//       {cursorTrail.slice(0, 2).map((cursor, index) => {
//         if (cursor.velocity < 8) return null

//         return (
//           <div
//             key={`particle-${cursor.id}`}
//             className="absolute"
//             style={{
//               left: cursor.x + (Math.random() - 0.5) * 30,
//               top: cursor.y + (Math.random() - 0.5) * 30,
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             <div
//               className="w-1.5 h-1.5 rounded-full animate-ping"
//               style={{
//                 backgroundColor: index % 2 === 0 ? "#A7E92F" : "#32C766",
//                 animationDuration: `${0.4 + Math.random() * 0.3}s`,
//               }}
//             />
//           </div>
//         )
//       })}

//       {/* Connecting route lines */}
//       <svg className="absolute inset-0 w-full h-full">
//         {cursorTrail.slice(0, -1).map((cursor, index) => {
//           const nextCursor = cursorTrail[index + 1]
//           if (!nextCursor) return null

//           const age = Date.now() - cursor.id
//           const opacity = Math.max(0, 0.4 - age / 800)

//           return (
//             <line
//               key={`line-${cursor.id}`}
//               x1={cursor.x}
//               y1={cursor.y}
//               x2={nextCursor.x}
//               y2={nextCursor.y}
//               stroke={index % 2 === 0 ? "#A7E92F" : "#32C766"}
//               strokeWidth="2"
//               opacity={opacity}
//               strokeDasharray="4,2"
//               className="transition-opacity duration-150"
//             />
//           )
//         })}
//       </svg>

//       {/* Speed ripple effect */}
//       {cursorTrail.slice(0, 1).map((cursor) => {
//         if (cursor.velocity < 15) return null

//         return (
//           <div
//             key={`ripple-${cursor.id}`}
//             className="absolute border-2 rounded-full animate-ping"
//             style={{
//               left: cursor.x,
//               top: cursor.y,
//               transform: "translate(-50%, -50%)",
//               borderColor: "#A7E92F",
//               width: `${Math.min(cursor.velocity * 1.5, 60)}px`,
//               height: `${Math.min(cursor.velocity * 1.5, 60)}px`,
//               animationDuration: "0.8s",
//             }}
//           />
//         )
//       })}
//     </div>
//   )
// }
"use client"

import { useState, useEffect, useCallback, useRef } from "react"

export default function CursorTrail() {
  const [cursorTrail, setCursorTrail] = useState([])
  const [isClient, setIsClient] = useState(false)
  const lastMousePos = useRef({ x: 0, y: 0, time: 0 })
  const animationFrame = useRef()


  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleMouseMove = useCallback((e) => {
    const currentTime = Date.now()
    const timeDelta = currentTime - lastMousePos.current.time || 16
    
    const velocity = {
      x: (e.clientX - lastMousePos.current.x) / Math.max(timeDelta, 1) * 16,
      y: (e.clientY - lastMousePos.current.y) / Math.max(timeDelta, 1) * 16,
    }

    const velocityMagnitude = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y)
    
    lastMousePos.current = { 
      x: e.clientX, 
      y: e.clientY, 
      time: currentTime 
    }

    setCursorTrail((prevTrail) => {
      const newTrail = [
        {
          x: e.clientX,
          y: e.clientY,
          id: currentTime,
          velocity: velocityMagnitude,
          angle: (Math.atan2(velocity.y, velocity.x) * 180) / Math.PI,
          timestamp: currentTime,
        },
        ...prevTrail.slice(0, 11), // Keep max 12 trail elements
      ]
      
      // Filter out old elements immediately during state update
      return newTrail.filter((cursor) => currentTime - cursor.timestamp < 800)
    })
  }, [])

  // Animation loop for smooth fading even when mouse stops
  useEffect(() => {
    if (!isClient) return

    const animate = () => {
      setCursorTrail((prevTrail) => {
        const currentTime = Date.now()
        const filtered = prevTrail.filter((cursor) => currentTime - cursor.timestamp < 800)
        
        // Always trigger re-render if there are trail elements (for smooth fading)
        if (filtered.length > 0) {
          // Force re-render by creating new array reference
          return [...filtered]
        }
        
        // Only return same reference if no trail elements exist
        return filtered.length !== prevTrail.length ? filtered : prevTrail
      })
      
      animationFrame.current = requestAnimationFrame(animate)
    }

    animationFrame.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [isClient])

  useEffect(() => {
    if (isClient) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true })
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [handleMouseMove, isClient])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  if (!isClient) {
    return null
  }

  const currentTime = Date.now()

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Main cursor trail */}
      {cursorTrail.map((cursor, index) => {
        const age = currentTime - cursor.timestamp
        if (age > 800) return null // Extra safety check
        
        const opacity = Math.max(0, (800 - age) / 800) // Linear fade
        const scale = Math.max(0.3, 1 - index * 0.06)
        const velocityScale = Math.min(1.8, 1 + cursor.velocity * 0.008)

        // Alternate between the two green colors
        const isEven = index % 2 === 0
        const primaryColor = isEven ? "#A7E92F" : "#32C766"
        const secondaryColor = isEven ? "#32C766" : "#A7E92F"

        return (
          <div
            key={cursor.id}
            className="absolute transition-opacity duration-150 ease-out"
            style={{
              left: cursor.x,
              top: cursor.y,
              transform: `translate(-50%, -50%) scale(${scale * velocityScale}) rotate(${cursor.angle}deg)`,
              opacity: opacity,
            }}
          >
            {/* Route/Path cursor design */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 28 28"
              width="28"
              className="drop-shadow-lg"
            >
              <g fill="none" fillRule="evenodd" transform="translate(6 4)">
                {/* Outer glow */}
                <circle cx="8" cy="8" r="10" fill={primaryColor} opacity="0.3" className="blur-sm" />
                {/* Main cursor body */}
                <path
                  d="m8 20c-1.105 0-2-.895-2-2 0-.738.405-1.376 1-1.723v-12.554c-.595-.347-1-.985-1-1.723 0-1.105.895-2 2-2s2 .895 2 2c0 .738-.405 1.376-1 1.723v12.554c.595.347 1 .985 1 1.723 0 1.105-.895 2-2 2z"
                  fill="#ffffff"
                  className="drop-shadow-sm"
                />
                <path
                  d="m8 18.5c-.828 0-1.5-.672-1.5-1.5 0-.552.298-1.032.75-1.292v-11.416c-.452-.26-.75-.74-.75-1.292 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .552-.298 1.032-.75 1.292v11.416c.452.26.75.74.75 1.292 0 .828-.672 1.5-1.5 1.5z"
                  fill={primaryColor}
                />
                {/* Route dots */}
                <circle cx="8" cy="3" r="2" fill={secondaryColor} />
                <circle cx="8" cy="17" r="2" fill={secondaryColor} />
              </g>
            </svg>

            {/* Glowing route effect */}
            <div
              className="absolute inset-0 rounded-full blur-md"
              style={{
                background: `radial-gradient(circle, ${primaryColor}40 0%, ${secondaryColor}20 50%, transparent 70%)`,
                transform: `scale(${1.5 + Math.min(cursor.velocity * 0.03, 0.5)})`,
              }}
            />
          </div>
        )
      })}

      {/* Route particles for high velocity - Fixed lifecycle */}
      {cursorTrail.slice(0, 2).map((cursor, index) => {
        const age = currentTime - cursor.timestamp
        if (cursor.velocity < 8 || age > 600) return null // Shorter particle lifetime

        const particleOpacity = Math.max(0, (600 - age) / 600)
        
        return (
          <div
            key={`particle-${cursor.id}-${index}`}
            className="absolute"
            style={{
              left: cursor.x + (Math.sin(cursor.id + index) * 25), // Deterministic positioning
              top: cursor.y + (Math.cos(cursor.id + index) * 25),
              transform: "translate(-50%, -50%)",
              opacity: particleOpacity,
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: index % 2 === 0 ? "#A7E92F" : "#32C766",
                animation: `ping 0.6s ease-out`,
              }}
            />
          </div>
        )
      })}

      {/* Connecting route lines */}
      <svg className="absolute inset-0 w-full h-full">
        {cursorTrail.slice(0, -1).map((cursor, index) => {
          const nextCursor = cursorTrail[index + 1]
          if (!nextCursor) return null

          const age = currentTime - cursor.timestamp
          if (age > 600) return null
          
          const opacity = Math.max(0, (600 - age) / 600) * 0.4

          return (
            <line
              key={`line-${cursor.id}`}
              x1={cursor.x}
              y1={cursor.y}
              x2={nextCursor.x}
              y2={nextCursor.y}
              stroke={index % 2 === 0 ? "#A7E92F" : "#32C766"}
              strokeWidth="2"
              opacity={opacity}
              strokeDasharray="4,2"
              className="transition-opacity duration-150"
            />
          )
        })}
      </svg>

      {/* Speed ripple effect - Fixed lifecycle */}
      {cursorTrail.slice(0, 1).map((cursor) => {
        const age = currentTime - cursor.timestamp
        if (cursor.velocity < 15 || age > 800) return null

        const rippleOpacity = Math.max(0, (800 - age) / 800)

        return (
          <div
            key={`ripple-${cursor.id}`}
            className="absolute border-2 rounded-full"
            style={{
              left: cursor.x,
              top: cursor.y,
              transform: "translate(-50%, -50%)",
              borderColor: "#A7E92F",
              width: `${Math.min(cursor.velocity * 1.5, 60)}px`,
              height: `${Math.min(cursor.velocity * 1.5, 60)}px`,
              opacity: rippleOpacity,
              animation: `ping 0.8s ease-out`,
            }}
          />
        )
      })}
    </div>
  )
}