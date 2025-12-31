import Head from 'next/head';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

export default function Home() {
  const categorie = [
    { nome: 'Farmacie', icona: '💊', colore: 'bg-green-100' },
    { nome: 'Dentisti', icona: '🦷', colore: 'bg-blue-100' },
    { nome: 'Diagnostica', icona: '🔬', colore: 'bg-purple-100' },
    { nome: 'A Domicilio', icona: '🏠', colore: 'bg-yellow-100' },
  ];

  const annunciFittizi = [
    { id: 1, title: "Pulizia Denti + Controllo Carie", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400", indirizzo: "Roma (Bravetta)", prezzo: "59 €", categoria: "Dentisti" },
    { id: 2, title: "TAC Encefalo senza contrasto", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400", indirizzo: "Roma (Prati)", prezzo: "125 €", categoria: "Diagnostica" },
    { id: 3, title: "Infermiere a domicilio per medicazioni", image: "https://images.unsplash.com/photo-1581578731522-a204786499ec?w=400", indirizzo: "Roma (Eur)", prezzo: "25 €", categoria: "A Domicilio" },
    { id: 4, title: "Aerosol a ultrasuoni Noleggio", image: "https://images.unsplash.com/photo-1576765974102-b756026ecee3?w=400", indirizzo: "Roma (Pisana)", prezzo: "5 €/gg", categoria: "Farmacie" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f5]">
      <Head>
        <title>Servizi Salute Roma | Cerca Farmacie, TAC e Dentisti a Roma</title>
      </Head>

      {/* TOP BAR GRATIS */}
      <div className="bg-[#002f34] text-white py-2 text-center text-xs md:text-sm font-medium">
        Il primo portale 100% gratuito per la sanità a Roma. <span className="text-[#ff6724] font-bold">Pubblica annunci senza costi.</span>
      </div>

      <Header />
      
      <section className="bg-white pt-10 pb-16 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 uppercase">
            Marketplace Sanitario Roma
          </h1>
          <SearchBar />
          
          <div className="flex justify-center gap-6 md:gap-14 mt-12 overflow-x-auto pb-4">
            {categorie.map((cat, i) => (
              <div key={i} className="flex flex-col items-center cursor-pointer min-w-[100px] group">
                <div className={`${cat.colore} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-all`}>
                  {cat.icona}
                </div>
                <span className="mt-3 text-sm font-bold text-gray-700">{cat.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* PERCHÉ SCEGLIERE NOI */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Perché usare Servizi Salute Roma?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#ff6724] shadow-sm">
              <h4 className="font-bold text-lg mb-2">✅ Consultazione Gratis</h4>
              <p className="text-gray-600 text-sm">Cerca tra centinaia di servizi e contatta direttamente chi preferisci.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
              <h4 className="font-bold text-lg mb-2">✅ Pubblicazione Gratis</h4>
              <p className="text-gray-600 text-sm">Sei una farmacia o un centro? Inserisci i tuoi servizi senza pagare commissioni.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-lg mb-2">✅ Solo Roma</h4>
              <p className="text-gray-600 text-sm">Niente ricerche generiche. Solo risultati reali nei quartieri di Roma.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Annunci Recenti</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {annunciFittizi.map(annuncio => (
              <ServiceCard key={annuncio.id} service={annuncio} />
            ))}
          </div>
        </section>

        {/* BOX AZIONE */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Hai bisogno di un servizio?</h3>
            <p className="text-gray-500 mb-6">Dalla TAC a domicilio alla farmacia aperta, trova tutto qui.</p>
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold">Sfoglia categorie</button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Sei un inserzionista?</h3>
            <p className="text-gray-500 mb-6">Aumenta la tua visibilità a Roma gratuitamente.</p>
            <button className="w-full bg-[#ff6724] text-white py-3 rounded-lg font-bold">Inserisci Annuncio Gratis</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
