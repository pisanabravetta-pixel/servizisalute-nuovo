import Head from 'next/head';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FarmacieSection from '../components/FarmacieSection';
import ServiziSanitariSection from '../components/ServiziSanitariSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ServiziSalute Roma | Portale Sanitario</title>
        <meta name="description" content="Trova farmacie e servizi sanitari a Roma" />
      </Head>

      <Header />
      
      {/* Sezione di Benvenuto (HERO) */}
      <section className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            La tua salute a Roma, in un click.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Trova farmacie di turno, specialisti, dentisti e servizi a domicilio nella tua zona.
          </p>
          <div className="max-w-3xl mx-auto bg-white p-2 rounded-lg shadow-xl">
            <SearchBar />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          <FarmacieSection />
          <div className="border-t border-gray-200 pt-16">
            <ServiziSanitariSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

