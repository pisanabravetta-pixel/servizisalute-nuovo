import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-gray-200 group">
      <div className="relative h-44 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-[15px] leading-snug font-semibold text-gray-800 mb-1 h-10 overflow-hidden">
          {service.title}
        </h3>
        <p className="text-[#ff6724] text-xl font-extrabold mb-1">{service.prezzo}</p>
        <div className="flex justify-between items-center mt-3 text-gray-400 text-[11px] font-medium uppercase tracking-tighter">
          <span>{service.indirizzo}</span>
          <span>Oggi</span>
        </div>
      </div>
    </div>
  );
}
