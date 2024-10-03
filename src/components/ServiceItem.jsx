import React from 'react';

function ServiceItem({ title, icon, description }) {
  return (
    <div className="group bg-gradient-to-b from-stone-800 to-stone-900 hover:bg-gradient-to-t hover:from-stone-950 hover:to-stone-900 border border-transparent hover:border-orange-500 transform transition-all duration-300 ease-out rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-4">
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




