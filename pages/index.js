import Head from 'next/head';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FarmacieSection from '../components/FarmacieSection';
import ServiziSanitariSection from '../components/ServiziSanitariSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>ServiziSalute - Roma</title>
        <meta name="description" content="Trova farmacie e servizi sanitari a Roma" />
      </Head>

      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <SearchBar />
        <div className="space-y-12 mt-8">
          <FarmacieSection />
          <ServiziSanitariSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
