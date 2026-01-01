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

  const ultimiServizi = [
    { id: 201, title: "Holter Cardiaco 24h", image: "/images/holter.jpg", indirizzo: "Zona Pisana", prezzo: "60 €", categoria: "Farmacie" },
    { id: 202, title: "Risonanza Magnetica Aperta", image: "/images/risonanza.jpg", indirizzo: "Zona Centro", prezzo: "150 €", categoria: "Diagnostica" },
    { id: 203, title: "Check-up Carie Gratuito", image: "/images/visita-dentista.jpg", indirizzo: "Zona Monteverde", prezzo: "Gratis", categoria: "Dentisti" },
    { id: 204, title: "Fisioterapia Posturale", image: "/images/fisioterapia.jpg", indirizzo: "Zona Bravetta", prezzo: "45 €", categoria: "A Domicilio" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f5]">
      <Head>
        <title>Servizi Salute Roma | Marketplace Sanitario</title>
      </Head>

      {/* TOP BAR */}
      <div className="bg-[#002f34] text-white py-2 px-4 text-center text-xs md:text-sm font-bold uppercase tracking-wider">
        🚀 IL PORTALE 100% GRATUITO DELLA SANITÀ A ROMA - <span className="text-[#ff6724]">PUBBLICA ANNUNCI SENZA COSTI</span>
      </div>

      <Header />
      
      <section className="bg-white pt-10 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl md:text-3xl font-black text-gray-900 mb-2 uppercase italic tracking-tighter">
            🥇 “Trova servizi sanitari privati a Roma, subito”
          </h1>
          <p className="text-gray-500 font-bold mb-10 italic">
            (confronta farmacie, dentisti, e servizi sanitari a pagamento nella tua zona)
          </p>
          <SearchBar />
          
          {/* BLOCCO CATEGORIE STILE SUBITO.IT */}
          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categorie.map((cat, i) => (
                <div key={i} className="flex flex-col items-center cursor-pointer group hover:bg-gray-50 p-4 rounded-lg transition-all">
                  <div className={`${cat.colore} w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-sm border border-white group-hover:scale-110 transition-transform`}>
                    {cat.icona}
                  </div>
                  <span className="mt-3 text-xs font-black text-gray-700 uppercase tracking-tighter">{cat.nome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        
        {/* I SERVIZI PIÙ CERCATI */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-gray-800 mb-8 border-l-8 border-[#ff6724] pl-4 uppercase">
            I servizi sanitari più cercati a Roma
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {piuCercatiOfferte.map(servizio => (
              <ServiceCard key={servizio.id} service={servizio} />
            ))}
          </div>
        </section>

        {/* BLOCCO SEO PERFEZIONATO ED ELEGANTE */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-14 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6724]"></div>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                Servizi Sanitari Privati a Roma: <span className="text-blue-600">Trova il meglio vicino a te</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-medium italic">
                "Cercare un servizio sanitario o una farmacia a Roma non è mai stato così semplice. 
                Che tu abbia bisogno di una <span className="text-gray-900 font-bold underline decoration-[#ff6724] decoration-2">risonanza a Roma Nord</span>, 
                di un laboratorio di analisi all'Eur o di un dentista in zona Prati, 
                <span className="text-blue-600 font-bold"> ServiziSalute</span> ti offre una mappa completa delle eccellenze sanitarie della Capitale. 
                Il nostro portale è pensato per chi cerca rapidità, professionalità e vicinanza, 
                raggruppando i migliori professionisti sanitari della provincia di Roma in un unico posto."
              </p>
            </div>
          </div>
        </section>

        {/* ULTIMI SERVIZI */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-gray-800 mb-8 border-l-8 border-blue-600 pl-4 uppercase">
            Ultimi servizi pubblicati
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ultimiServizi.map(servizio => (
              <ServiceCard key={servizio.id} service={servizio} />
            ))}
          </div>
        </section>

        {/* BOX AZIONE - CONTROLLO TESTI CATEGORIE */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase">Cerchi un servizio sanitario?</h3>
              <ul className="space-y-3 text-sm text-gray-700 font-bold mb-8">
                <li className="flex items-start gap-2">✅ <span>Trova farmacie, centri diagnostici e dentisti a Roma.</span></li>
                <li className="flex items-start gap-2">✅ <span>Confronta servizi e disponibilità senza perdere tempo.</span></li>
                <li className="flex items-start gap-2">✅ <span>Ricerca rapida per zona o quartiere.</span></li>
                <li className="flex items-start gap-2">✅ <span>Nessuna registrazione obbligatoria.</span></li>
              </ul>
              <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-black uppercase tracking-widest">Sfoglia Categorie</button>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-black text-orange-900 mb-4 uppercase">Offri servizi sanitari?</h3>
              <ul className="space-y-3 text-sm text-gray-700 font-bold mb-8">
                <li className="flex items-start gap-2">🚀 <span>Pubblica i tuoi servizi e raggiungi utenti a Roma.</span></li>
                <li className="flex items-start gap-2">🏙️ <span>Visibilità locale mirata sulla Capitale.</span></li>
                <li className="flex items-start gap-2">💰 <span>Zero commissioni e zero costi di inserimento.</span></li>
                <li className="flex items-start gap-2">🏥 <span>Ideale per farmacie, laboratori e studi tecnici.</span></li>
              </ul>
              <button className="w-full bg-[#ff6724] text-white py-4 rounded-xl font-black uppercase tracking-widest">Inserisci Gratis</button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
