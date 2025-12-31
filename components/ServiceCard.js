import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider">
          {service.categoria}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        
        <div className="flex items-center text-gray-500 mb-4 text-sm italic">
          <span className="mr-2">📍</span>
          {service.indirizzo}
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
          <span className="text-blue-600 font-extrabold text-lg">{service.prezzo}</span>
          <Link 
            href={`/servizio/${service.id}`}
            className="bg-blue-50 text-blue-600 font-bold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}

