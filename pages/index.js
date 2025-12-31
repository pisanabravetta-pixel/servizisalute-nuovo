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

  // Servizi bilanciati per riempire bene le righe
  const piuCercati = [
    "TAC Aperta", "Ecografia Addome", "Iniezioni a domicilio", "Pulizia denti", 
    "Fisioterapia", "Analisi del sangue", "Sostituzione Catetere", "Radiografia Torace",
    "Holter Cardiaco", "Spirometria", "Medicazioni", "Apparecchi Dentali",
    "Test Intolleranze", "Noleggio Stampelle", "Risonanza Magnetica", "Igiene Orale"
  ];

  const annunciFittizi = [
    { id: 1, title: "Pulizia Denti + Controllo Carie", image: "https://images.unsplash.com/photo-1593054323124-b1bb3643f885?auto=format&fit=crop&w=600&q=80", indirizzo: "Roma (Bravetta)", prezzo: "59 €", categoria: "Dentisti" },
    { id: 2, title: "TAC Encefalo Alta Risoluzione", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80", indirizzo: "Roma (Prati)", prezzo: "125 €", categoria: "Diagnostica" },
    { id: 3, title: "Infermiere per Flebo e Prelievi", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80", indirizzo: "Roma (Eur)", prezzo: "30 €", categoria: "A Domicilio" },
    { id: 4, title: "Noleggio Magnetoterapia", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80", indirizzo: "Roma (Centro)", prezzo: "10 €/gg", categoria: "Farmacie" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f5]">
      <Head>
        <title>Servizi Salute Roma | Cerca Farmacie, TAC e Dentisti a Roma</title>
      </Head>

      {/* TOP BAR (Stile Subito) */}
      <div className="bg-[#002f34] text-white py-2 px-4 text-center text-xs md:text-sm font-semibold tracking-wide">
        🚀 IL PORTALE 100% GRATUITO DELLA SANITÀ A ROMA - <span className="text-[#ff6724]">PUBBLICA ANNUNCI SENZA COSTI</span>
      </div>

      <Header />
      
      <section className="bg-white pt-10 pb-16 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 uppercase tracking-tighter italic">
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
        
        {/* Perché scegliere Servizi Salute Roma */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12 uppercase tracking-tight">Perché scegliere Servizi Salute Roma?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-sm border-b-4 border-[#ff6724]">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-xl mb-3 uppercase">100% Gratuito</h3>
              <p className="text-gray-600">Nessuna commissione. Pubblicare e consultare i servizi è gratis per tutti, per sempre.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border-b-4 border-blue-600">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-3 uppercase">Diretto</h3>
              <p className="text-gray-600">Contatta direttamente la farmacia o il tecnico. Senza intermediari e senza perdite di tempo.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border-b-4 border-green-500">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="font-bold text-xl mb-3 uppercase">Quartieri Roma</h3>
              <p className="text-gray-600">Dalla Pisana al Centro. Filtra per zona e trova il servizio realmente vicino a te.</p>
            </div>
          </div>
        </section>

        {/* Annunci in Vetrina */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">🔥 ANNUNCI IN VETRINA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {annunciFittizi.map(annuncio => (
              <ServiceCard key={annuncio.id} service={annuncio} />
            ))}
          </div>
        </section>

        {/* Servizi più cercati a Roma */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wider">I servizi più cercati a Roma</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {piuCercati.map((item, i) => (
              <span key={i} className="px-2 py-3 bg-gray-50 hover:bg-orange-50 text-gray-600 hover:text-[#ff6724] rounded text-[11px] font-bold text-center cursor-pointer transition-colors border border-gray-100 uppercase">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Box Privati/Professionisti */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl flex items-center gap-6 border border-gray-200">
            <div className="text-6xl">🏥</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase">Cerchi un servizio?</h3>
              <p className="text-gray-500 mb-5">Sfoglia le farmacie e i centri diagnostici di zona.</p>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-black">Sfoglia categorie</button>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl flex items-center gap-6 border border-gray-200">
            <div className="text-6xl">📢</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase">Vuoi pubblicare?</h3>
              <p className="text-gray-500 mb-5">Inserisci la tua attività gratuitamente in pochi click.</p>
              <button className="bg-[#ff6724] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-[#e85a1a]">Inserisci gratis</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
