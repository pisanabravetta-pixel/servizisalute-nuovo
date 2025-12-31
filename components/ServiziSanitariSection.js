import Link from 'next/link';
import ServiceCard from './ServiceCard';

export default function ServiziSanitariSection() {
  const servizi = [
    {
      id: 1,
      title: 'Analisi del Sangue',
      image: 'https://images.unsplash.com/photo-1579152276503-346761899a22?w=800',
      indirizzo: 'Laboratorio Bravetta',
      prezzo: 'Da 25€',
      categoria: 'Analisi'
    },
    {
      id: 2,
      title: 'Visita Dentistica',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800',
      indirizzo: 'Studio Pisana',
      prezzo: 'Check-up gratuito',
      categoria: 'Dentista'
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-2">Servizi Sanitari Specialistici</h2>
      <p className="text-gray-600 mb-6">Prenota visite e analisi nei migliori centri di zona.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servizi.map(servizio => (
          <ServiceCard key={servizio.id} service={servizio} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link href="/servizi-sanitari" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Vedi tutti i Servizi
        </Link>
      </div>
    </section>
  );
}
