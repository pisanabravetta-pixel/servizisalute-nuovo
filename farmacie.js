import Head from 'next/head';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

export default function Farmacie() {
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
    <>
      <Head>
        <title>Farmacie - ServiziSalute Roma</title>
        <meta name="description" content="Trova farmacie a Roma con servizi e promozioni" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <SearchBar />
            
            <section>
              <h2 className="text-3xl font-bold text-primary mb-2">Farmacie a Roma</h2>
              <p className="text-gray-600 mb-6">Scopri le farmacie disponibili nella tua zona.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {farmacie.map(farmacia => (
                  <ServiceCard key={farmacia.id} service={farmacia} />
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