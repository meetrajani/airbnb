import React from 'react'

const Heading = ({ title, center, subtitle }) => {
    return (
      <div className={center ? "text-center" : "text-start"}>
        <div className="text-2xl font-bold">{title}</div>
        {subtitle && <div className="mt-2 font-light text-neutral-500">{subtitle}</div>}
      </div>
    );
};

export default Heading
