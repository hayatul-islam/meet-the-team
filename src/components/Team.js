import { motion } from "framer-motion";
import React from "react";

export default function Team({ team }) {
  const { id, img, name, job } = team || {};
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div
          className={`space-y-3 ${
            id % 2 === 0 && "sm:pt-24 sm:ml-[-50px]"
          } pb-6`}
        >
          <div>
            <img
              className="w-[250px] h-[220px] md:w-[300px] md:h-[280px]"
              src={img}
              alt={name}
            />
          </div>
          <div>
            <h4 className="text-lg font-medium">{name}</h4>
            <p className="text-sm">{job}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
