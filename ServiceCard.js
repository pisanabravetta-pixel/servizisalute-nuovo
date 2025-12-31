import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        
        {service.categoria && (
          <div className="flex items-center text-gray-600 mb-2">
            <i className="fas fa-tag mr-2"></i>
            <span>{service.categoria}</span>
          </div>
        )}
        
        {service.indirizzo && (
          <div className="flex items-center text-gray-600 mb-2">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>{service.indirizzo}</span>
          </div>
        )}
        
        {service.prezzo && (
          <div className="text-primary font-bold mb-4">
            {service.prezzo}
          </div>
        )}
        
        <div className="mt-4">
          <Link 
            href={`/servizio/${service.id}`}
            className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            Contatta
          </Link>
        </div>
      </div>
    </div>
  );
}