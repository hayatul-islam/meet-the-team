import React from "react";
import Team from "./Team";

export default function Teams() {
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqu6P9RzJRAwZ80lW1z7hj93FqzALt_lUnrQ&usqp=CAU",
      job: "Head of Interactive",
    },
    {
      id: 3,
      name: "Ashikur Rahaman",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqu6P9RzJRAwZ80lW1z7hj93FqzALt_lUnrQ&usqp=CAU",
      job: "Digital Art Director",
    },
    {
      id: 4,
      name: "Omar Faruk",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqu6P9RzJRAwZ80lW1z7hj93FqzALt_lUnrQ&usqp=CAU",
      job: "Projects Manager",
    },
  ];
  return (
    <>
      <div className="pt-12">
        <h2 className="text-center font-bold text-4xl">Meet Them Team</h2>
        <div className="flex flex-wrap py-12">
          {teams?.map((team) => (
            <Team key={team?.id} team={team} />
          ))}
        </div>
      </div>
    </>
  );
}
