import { motion } from "framer-motion";
import React from "react";
import Team from "./Team";

export default function Teams() {
  // fake data
  const teams = [
    {
      id: 1,
      name: "Monet Goode",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqu6P9RzJRAwZ80lW1z7hj93FqzALt_lUnrQ&usqp=CAU",
      job: "Founder",
    },
    {
      id: 2,
      name: "Audires Linkus",
      img: "https://media.istockphoto.com/photos/man-with-crossed-arms-isolated-on-gray-background-picture-id1171169099?b=1&k=20&m=1171169099&s=170667a&w=0&h=cGg7Lzrw41hB5eLyvA9G3V_AZwVDOeuUGipLQ-yKVyw=",
      job: "Head of Interactive",
    },
    {
      id: 3,
      name: "Ashikur Rahaman",
      img: "https://t3.ftcdn.net/jpg/02/76/34/74/360_F_276347475_XLF6MQQ1hj85TN2TkfQtMPWju8a8Ktmh.jpg",
      job: "Digital Art Director",
    },
    {
      id: 4,
      name: "Omar Faruk",
      img: "https://thumbs.dreamstime.com/b/portrait-smiling-young-man-white-t-shirt-isolated-white-background-portrait-smiling-young-man-white-t-shirt-164570158.jpg",
      job: "Projects Manager",
    },
  ];
  return (
    <>
      <div className="pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h2 className="text-center font-bold text-4xl">Meet Them Team</h2>
        </motion.div>
        <div className="flex flex-wrap py-12 justify-center">
          {teams?.map((team) => (
            <Team key={team?.id} team={team} />
          ))}
        </div>
      </div>
    </>
  );
}
