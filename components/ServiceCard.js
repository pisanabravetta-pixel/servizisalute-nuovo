import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
        
        {service.categoria && (
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <span className="mr-2">📁</span>
            <span>{service.categoria}</span>
          </div>
        )}
        
        {service.indirizzo && (
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <span className="mr-2">📍</span>
            <span>{service.indirizzo}</span>
          </div>
        )}
        
        {service.prezzo && (
          <div className="text-blue-600 font-bold mb-4 mt-2">
            {service.prezzo}
          </div>
        )}
        
        <div className="mt-4">
          <Link 
            href={`/servizio/${service.id}`}
            className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Contatta
          </Link>
        </div>
      </div>
    </div>
  );
}
