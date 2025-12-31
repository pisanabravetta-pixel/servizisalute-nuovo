import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-gray-200">
      <div className="relative h-48">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-[16px] leading-tight font-medium text-gray-900 mb-1 h-12 overflow-hidden">
          {service.title}
        </h3>
        <p className="text-[#ff6724] text-xl font-bold mb-1">{service.prezzo}</p>
        <p className="text-gray-400 text-xs uppercase font-semibold">{service.categoria}</p>
        <div className="flex justify-between items-center mt-4 text-gray-400 text-xs">
          <span>{service.indirizzo}</span>
          <span>Oggi, 10:30</span>
        </div>
      </div>
    </div>
  );
}
