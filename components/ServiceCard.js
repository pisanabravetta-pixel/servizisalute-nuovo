import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3 uppercase">
          {service.categoria}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-500 text-sm mb-4">📍 {service.indirizzo}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <span className="text-blue-700 font-bold text-lg">{service.prezzo}</span>
          <Link 
            href={`/servizio/${service.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}
