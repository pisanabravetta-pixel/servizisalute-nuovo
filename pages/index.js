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
    { id: 101, title: "Sconto 20% Integratori e Cosmetica", image: "https://images.unsplash.com/photo-1587854692152-cbe660feec90?w=600", indirizzo: "Farmacia Roma Est", prezzo: "Sconto 20%", categoria: "Farmacie" },
    { id: 102, title: "TAC Encefalo Totale h24", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600", indirizzo: "Centro Diagnostico Prati", prezzo: "125 €", categoria: "Diagnostica" },
    { id: 103, title: "Sbiancamento Dentale Laser", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600", indirizzo: "Studio Dentistico Eur", prezzo: "89 €", categoria: "Dentisti" },
    { id: 104, title: "Prelievo Sangue a Domicilio", image: "https://images.unsplash.com/photo-1579152276503-346761899a22?w=600", indirizzo: "Tutta Roma", prezzo: "25 €", categoria: "A Domicilio" },
  ];

  const ultimiServizi = [
    { id: 201, title: "Holter Cardiaco 24h", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600", indirizzo: "Zona Pisana", prezzo: "60 €", categoria: "Farmacie" },
    { id: 202, title: "Risonanza Magnetica Aperta", image: "https://images.unsplash.com/photo-1516549119129-df99b825fe34?w=600", indirizzo: "Zona Centro", prezzo: "150 €", categoria: "Diagnostica" },
    { id: 203, title: "Check-up Carie Gratuito", image: "https://images.unsplash.com/photo-1593054323124-b1bb3643f885?w=600", indirizzo: "Zona Monteverde", prezzo: "Gratis", categoria: "Dentisti" },
    { id: 204, title: "Fisioterapia Posturale", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600", indirizzo: "Zona Bravetta", prezzo: "45 €", categoria: "A Domicilio" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f5]">
      <Head>
        <title>Servizi Salute Roma | Farmacie e Sanitari</title>
      </Head>

      {/* TOP BAR */}
      <div className="bg-[#002f34] text-white py-2 px-4 text-center text-xs md:text-sm font-bold uppercase tracking-wider">
        🚀 IL PORTALE 100% GRATUITO DELLA SANITÀ A ROMA - <span className="text-[#ff6724]">PUBBLICA ANNUNCI SENZA COSTI</span>
      </div>

      <Header />
      
      {/* HERO SECTION */}
      <section className="bg-white pt-10 pb-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl md:text-3xl font-black text-gray-900 mb-2 uppercase italic">
            🥇 “Trova servizi sanitari privati a Roma, subito”
          </h1>
          <p className="text-gray-500 font-bold mb-8 italic">
            (confronta farmacie, dentisti, e servizi sanitari a pagamento nella tua zona)
          </p>
          
          <SearchBar />
          
          <div className="flex justify-center gap-6 md:gap-14 mt-12 overflow-x-auto pb-4 px-2">
            {categorie.map((cat, i) => (
              <div key={i} className="flex flex-col items-center cursor-pointer min-w-[90px] group">
                <div className={`${cat.colore} w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-sm border border-gray-100 group-hover:scale-110 transition-all`}>
                  {cat.icona}
                </div>
                <span className="mt-3 text-[11px] font-black text-gray-700 uppercase">{cat.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        
        {/* SEZIONE 1: I servizi sanitari più cercati */}
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

        {/* SEZIONE 2: Testo SEO con icone per non essere spoglio */}
        <section className="mb-20 bg-white p-10 rounded-3xl shadow-sm border border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
              Servizi Sanitari Privati a Roma: Trova il meglio vicino a te
            </h2>
            <div className="text-4xl mb-6">🏛️</div>
            <p className="text-gray-700 leading-relaxed text-lg font-medium italic">
              "Cercare un servizio sanitario o una farmacia a Roma non è mai stato così semplice. Che tu abbia bisogno di risonanza a Roma Nord, di un laboratorio di analisi all'Eur o di un dentista in zona Prati, ServiziSalute ti offre una mappa completa delle eccellenze sanitarie della Capitale. Il nostro portale è pensato per chi cerca rapidità, professionalità e vicinanza, raggruppando i migliori professionisti sanitari della provincia di Roma in un unico posto."
            </p>
          </div>
        </section>

        {/* SEZIONE 3: Ultimi servizi pubblicati */}
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

        {/* SEZIONE 4: Box Azione con elenchi puntati */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-800 mb-10 text-center uppercase tracking-[0.2em]">Perché usare ServiziSalute</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Box Utenti */}
            <div className="bg-[#f8fafc] p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase">Cerchi un servizio sanitario?</h3>
              <p className="text-gray-600 mb-6 font-semibold">Trova rapidamente farmacie, centri diagnostici, dentisti e servizi sanitari a pagamento a Roma.</p>
              <ul className="space-y-3 text-sm text-gray-700 font-medium mb-8">
                <li className="flex items-center">✅ Confronta servizi, zone e disponibilità</li>
                <li className="flex items-center">📍 Ricerca per zona o quartiere</li>
                <li className="flex items-center">🛡️ Servizi sanitari privati verificabili</li>
                <li className="flex items-center">📱 Nessuna registrazione obbligatoria</li>
                <li className="flex items-center">🔒 Sicuro: Strutture verificate</li>
                <li className="flex items-center">⚡ Veloce: Risposte immediate</li>
              </ul>
              <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-blue-800 transition-colors">Sfoglia Categorie</button>
            </div>

            {/* Box Professionisti */}
            <div className="bg-[#fff9f5] p-8 rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-black text-orange-900 mb-4 uppercase">Offri servizi sanitari?</h3>
              <p className="text-gray-600 mb-6 font-semibold">Pubblica i tuoi servizi e raggiungi utenti realmente interessati nella tua zona.</p>
              <ul className="space-y-3 text-sm text-gray-700 font-medium mb-8">
                <li className="flex items-center">🚀 Pubblica i tuoi servizi in pochi minuti</li>
                <li className="flex items-center">🏙️ Visibilità locale su Roma</li>
                <li className="flex items-center">💎 Nessuna commissione</li>
                <li className="flex items-center">🏥 Ideale per farmacie e studi privati</li>
                <li className="flex items-center">📈 Visibilità: Posizionamento su Roma</li>
                <li className="flex items-center">💰 Zero Costi: Nessuna commissione</li>
              </ul>
              <button className="w-full bg-[#ff6724] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#e85a1a] transition-colors">Inserisci Gratis</button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
