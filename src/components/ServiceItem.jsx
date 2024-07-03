import React from 'react';

function ServiceItem({ title, icon, description }) {
  return (
    <div className="group  bg-stone-800 hover:bg-stone-950 border border-dotted border-slate-200 hover:-translate-y-2 transform transition rounded-md p-5">
      <div className="text-orange-500  w-6 h-6 mb-3">
        {icon}
      </div>
      <h1 className="font-semibold text-lg text-emerald-100 -200 mb-1">
        {title}
      </h1>
      <p className="text-xl text-slate-100 font-dancing-script" >{description}</p>
    </div>
  );
}

export default ServiceItem;




