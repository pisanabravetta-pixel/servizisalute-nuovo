import ServiceCard from './ServiceCard';

export default function FarmacieSection() {
  const farmacie = [
    {
      id: 1,
      title: 'Farmacia Roma Centro',
      image: '/farmacie/roma-centro.jpg',
      indirizzo: 'Via del Corso, 123',
      prezzo: 'Sconto 20% integratori',
      categoria: 'Farmacie'
    },
    {
      id: 2,
      title: 'Farmacia San Paolo',
      image: '/farmacie/san-paolo.jpg',
      indirizzo: 'Zona San Paolo',
      prezzo: 'Test Covid Rapido 15€',
      categoria: 'Farmacie'
    },
    {
      id: 3,
      title: 'Farmacia Piazza Bologna',
      image: '/farmacie/piazza-bologna.jpg',
      indirizzo: 'Piazza Bologna',
      prezzo: 'Esame Glicemia 8€',
      categoria: 'Farmacie'
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-primary mb-2">Offerte e Servizi dalle Farmacie</h2>
      <p className="text-gray-600 mb-6">Scopri promozioni e servizi nelle farmacie vicine a te.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {farmacie.map(farmacia => (
          <ServiceCard key={farmacia.id} service={farmacia} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link href="/farmacie" className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
          Vedi tutte le Farmacie
        </Link>
      </div>
    </section>
  );
}