import Head from 'next/head';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FarmacieSection from '../components/FarmacieSection';
import ServiziSanitariSection from '../components/ServiziSanitariSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>ServiziSalute Roma | Portale Sanitario</title>
      </Head>

      <Header />
      
      {/* Sezione Hero: dà un impatto professionale immediato */}
      <div className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">La tua salute a Roma, in un click.</h2>
          <p className="text-xl text-blue-100 mb-8">Trova farmacie di turno, specialisti e servizi a domicilio nella tua zona.</p>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="space-y-20">
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
