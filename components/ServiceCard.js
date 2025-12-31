import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-gray-200 group">
      <div className="relative h-44 w-full bg-gray-100">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-[14px] leading-tight font-semibold text-gray-800 mb-1 h-10 overflow-hidden uppercase">
          {service.title}
        </h3>
        <p className="text-[#ff6724] text-xl font-black mb-1">{service.prezzo}</p>
        <div className="flex justify-between items-center mt-3 text-gray-400 text-[10px] font-bold uppercase">
          <span>{service.indirizzo}</span>
          <span>Oggi</span>
        </div>
      </div>
    </div>
  );
}
