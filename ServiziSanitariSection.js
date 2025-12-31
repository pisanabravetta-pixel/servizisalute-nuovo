import ServiceCard from './ServiceCard';
import Link from 'next/link';

export default function ServiziSanitariSection() {
  const servizi = [
    {
      id: 1,
      title: 'Centro Medico Salus',
      image: '/servizi/centro-medico.jpg',
      indirizzo: 'Brtà Cugra Colliaristo',
      prezzo: 'Visita TAC Corato',
      categoria: 'Diagnostica'
    },
    {
      id: 2,
      title: 'Farmacia San Paolo',
      image: '/servizi/farmacia-san-paolo.jpg',
      indirizzo: 'Restriew Heator elutla',
      prezzo: 'Let one morze Rapido 25€',
      categoria: 'Servizi Domicilio'
    },
    {
      id: 3,
      title: 'Farmacia Piazza Bologna',
      image: '/servizi/farmacia-bologna.jpg',
      indirizzo: 'Aimk Cordiac olalinte',
      prezzo: 'Visita TAC Completa',
      categoria: 'Diagnostica'
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-primary mb-2">Servizi Sanitari a Pagamento</h2>
      <p className="text-gray-600 mb-6">Trova centri diagnostici, cliniche e laboratori.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servizi.map(servizio => (
          <ServiceCard key={servizio.id} service={servizio} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link href="/servizi-sanitari" className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
          Vedi tutti i Servizi Sanitari
        </Link>
      </div>
    </section>
  );
}