import React from "react";

export default function Team({ team }) {
  const { id, img, name, job } = team || {};
  return (
    <>
      <div className={`space-y-3 ${id % 2 === 0 && "pt-16 ml-[-50px]"} pb-6`}>
        <div>
          <img className="w-[300px] h-[280px]" src={img} alt={name} />
        </div>
        <div>
          <h4 className="text-lg font-medium">{name}</h4>
          <p className="text-sm">{job}</p>
        </div>
      </div>
    </>
  );
}
