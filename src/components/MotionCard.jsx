import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import myPortfolio1 from '/images/body-images/my-portfolio/my-portfolio1.png'
import WorkCard from "./WorkCard";

const MotionCard = ({
  title,
  firstTech, 
  secondTech, 
  description, 
  gitLink, 
  category, 
  siteLink, 
  readLink, 
  pics,
  onRead,
}) => {
  return (
    <motion.div
      initial={{ width: 'auto', }} // Initial width
      whileHover={{ width: 350, }} // Width on hover
      transition={{ duration: 0.25 }} // Transition duration for width
      className="text-white hover:shadow-lg hover:z-[5]"
    >
      <TiltCard
        title={title}
        firstTech={firstTech}
        secondTech={secondTech}
        description={description}
        gitLink={gitLink}
        category={category}
        siteLink={siteLink}
        readLink={readLink}
        pics={pics}
        onRead={onRead}
      />
    </motion.div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({
  title,
  firstTech, 
  secondTech, 
  description, 
  gitLink, 
  category, 
  siteLink, 
  readLink, 
  pics,
  onRead,
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      // className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        // className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        /> */}
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          // className="text-center text-2xl font-bold"
        >
            <WorkCard 
              title={title}
              firstTech={firstTech}
              secondTech={secondTech}
              description={description}
              gitLink={gitLink}
              category={category}
              siteLink={siteLink}
              readLink={readLink}
              pics={pics}
              onRead={onRead}
            />
        </p>
      </div>
    </motion.div>
  );
};

export default MotionCard;