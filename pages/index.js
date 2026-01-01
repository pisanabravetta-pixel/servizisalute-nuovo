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

  const piuCercatiOfferte = [
    { id: 101, title: "Sconto 20% Integratori e Cosmetica", image: "/images/farmacia.jpg", indirizzo: "Farmacia Roma Est", prezzo: "Sconto 20%", categoria: "Farmacie" },
    { id: 102, title: "TAC Encefalo Totale h24", image: "/images/tac.jpg", indirizzo: "Centro Diagnostico Prati", prezzo: "125 €", categoria: "Diagnostica" },
    { id: 103, title: "Sbiancamento Dentale Laser", image: "/images/dentista.jpg", indirizzo: "Studio Dentistico Eur", prezzo: "89 €", categoria: "Dentisti" },
    { id: 104, title: "Analisi del Sangue a Domicilio", image: "/images/prelievo.jpg", indirizzo: "Tutta Roma", prezzo: "25 €", categoria: "A Domicilio" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f5]">
      <Head>
        <title>Servizi Salute Roma | Marketplace Sanitario</title>
      </Head>

      <div className="bg-[#002f34] text-white py-2 px-4 text-center text-xs md:text-sm font-bold uppercase tracking-wider">
        🚀 IL PORTALE 100% GRATUITO DELLA SANITÀ A ROMA - <span className="text-[#ff6724]">PUBBLICA ANNUNCI SENZA COSTI</span>
      </div>

      <Header />
      
      <section className="bg-white pt-10 pb-16 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-black text-[#333] mb-4 uppercase tracking-tighter">
            Trova servizi sanitari privati a Roma
          </h1>
          <p className="text-gray-500 font-semibold mb-10">
            Confronta farmacie, dentisti e specialisti nella tua zona
          </p>
          
          <SearchBar />
          
          {/* CATEGORIE: OGNI ICONA NEL SUO RETTANGOLO (STILE SUBITO) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12">
            {categorie.map((cat, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className={`${cat.colore} w-14 h-14 rounded-full flex items-center justify-center text-2xl`}>
                  {cat.icona}
                </div>
                <span className="mt-3 text-sm font-bold text-[#333] uppercase">{cat.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        
        {/* SERVIZI PIÙ CERCATI */}
        <section className="mb-20">
          <h2 className="text-xl font-black text-[#333] mb-8 uppercase tracking-tight">
            I servizi più cercati a Roma
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {piuCercatiOfferte.map(servizio => (
              <ServiceCard key={servizio.id} service={servizio} />
            ))}
          </div>
        </section>

        {/* SEZIONE SEO: INTEGRATA E PROFESSIONALE */}
        <section className="mb-20 max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-black text-[#333] mb-6 uppercase">
            Servizi Sanitari Privati a Roma: Trova il meglio vicino a te
          </h2>
          <p className="text-gray-600 leading-loose text-lg font-medium">
            Cercare un servizio sanitario o una farmacia a Roma non è mai stato così semplice. 
            Che tu abbia bisogno di una <strong>risonanza a Roma Nord</strong>, 
            di un laboratorio di analisi all'Eur o di un dentista in zona Prati, 
            <span className="text-[#ff6724] font-bold"> ServiziSalute</span> ti offre una mappa completa delle eccellenze sanitarie della Capitale. 
            Il nostro portale è pensato per chi cerca rapidità, professionalità e vicinanza, 
            raggruppando i migliori professionisti in un unico posto.
          </p>
        </section>

        {/* BOX AZIONE FINALI: COLORI NEUTRI E PULITI */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-black text-[#333] mb-4 uppercase">Cerchi un servizio?</h3>
              <p className="text-gray-600 mb-8 font-medium">Trova rapidamente farmacie, centri diagnostici e specialisti a Roma senza registrazione.</p>
              <button className="w-full bg-[#002f34] text-white py-4 rounded font-bold uppercase tracking-widest hover:opacity-90">Sfoglia Categorie</button>
            </div>

            <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-black text-[#333] mb-4 uppercase">Offri servizi?</h3>
              <p className="text-gray-600 mb-8 font-medium">Pubblica i tuoi servizi sanitari e raggiungi migliaia di utenti a Roma. Gratis.</p>
              <button className="w-full bg-[#ff6724] text-white py-4 rounded font-bold uppercase tracking-widest hover:opacity-90">Inserisci annuncio</button>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
