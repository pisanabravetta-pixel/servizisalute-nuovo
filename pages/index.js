import Head from 'next/head';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FarmacieSection from '../components/FarmacieSection';
import ServiziSanitariSection from '../components/ServiziSanitariSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>ServiziSalute - Portale Servizi Sanitari a Pagamento Roma</title>
        <meta name="description" content="Trova farmacie, dentisti, diagnostica e servizi a domicilio a Roma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <SearchBar />
            <FarmacieSection />
            <ServiziSanitariSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
