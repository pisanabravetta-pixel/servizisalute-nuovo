import Head from 'next/head';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

export default function ServiziSanitari() {
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
    <>
      <Head>
        <title>Servizi Sanitari - ServiziSalute Roma</title>
        <meta name="description" content="Trova dentisti, diagnostica e servizi a domicilio a Roma" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <SearchBar />
            
            <section>
              <h2 className="text-3xl font-bold text-primary mb-2">Servizi Sanitari a Pagamento</h2>
              <p className="text-gray-600 mb-6">Trova centri diagnostici, cliniche e laboratori.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servizi.map(servizio => (
                  <ServiceCard key={servizio.id} service={servizio} />
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}