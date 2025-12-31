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
    { id: 101, title: "Sconto 20% Integratori e Cosmetica", image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500", indirizzo: "Farmacia Roma Est", prezzo: "Sconto 20%", categoria: "Farmacie" },
    { id: 102, title: "TAC Encefalo Totale h24", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500", indirizzo: "Centro Diagnostico Prati", prezzo: "125 €", categoria: "Diagnostica" },
    { id: 103, title: "Sbiancamento Dentale Laser", image: "https://images.unsplash.com/photo-1598256942487-02717cb97a01?w=500", indirizzo: "Studio Dentistico Eur", prezzo: "89 €", categoria: "Dentisti" },
    { id: 104, title: "Prelievo Sangue a Domicilio", image: "https://images.unsplash.com/photo-1579152276503-346761899a22?w=500", indirizzo: "Tutta Roma", prezzo: "25 €", categoria: "A Domicilio" },
  ];

  const ultimiServizi = [
    { id: 201, title: "Holter Cardiaco 24h", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500", indirizzo: "Zona Pisana", prezzo: "60 €", categoria: "Farmacie" },
    { id: 202, title: "Risonanza Magnetica Aperta", image: "https://images.unsplash.com/photo-1516549119129-df99b825fe34?w=500", indirizzo: "Zona Centro", prezzo: "150 €", categoria: "Diagnostica" },
    { id: 203, title: "Check-up Carie Gratuito", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500", indirizzo: "Zona Monteverde", prezzo: "Gratis", categoria: "Dentisti" },
    { id: 204, title: "Fisioterapia Posturale", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500", indirizzo: "Zona Bravetta", prezzo: "45 €", categoria: "A Domicilio" },
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
      
      <section className="bg-white pt-10 pb-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl md:text-3xl font-black text-gray-900 mb-2 uppercase italic tracking-tighter">
            🥇 “Trova servizi sanitari privati a Roma, subito”
          </h1>
          <p className="text-gray-500 font-bold mb-8 italic">
            (confronta farmacie, dentisti, e servizi sanitari a pagamento nella tua zona)
          </p>
          <SearchBar />
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

        {/* SEZIONE SEO: BLOCCO CARINO E MODERNO */}
        <section className="mb-20">
          <div className="bg-[#e9eff2] rounded-[2rem] p-8 md:p-12 border border-gray-200 shadow-sm">
            <div className="max-w-4xl mx-auto text-center">
              <span className="bg-white text-[#ff6724] px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block shadow-sm">Info Roma</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                Servizi Sanitari Privati a Roma: <br/><span className="text-blue-600">Trova il meglio vicino a te</span>
              </h2>
              <div className="h-1 w-20 bg-[#ff6724] mx-auto mb-8 rounded-full"></div>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-medium italic">
                "Cercare un servizio sanitario o una farmacia a Roma non è mai stato così semplice. 
                Che tu abbia bisogno di una <span className="text-gray-900 font-bold">risonanza a Roma Nord</span>, 
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

        {/* BOX AZIONE */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-800 mb-10 text-center uppercase">Perché usare ServiziSalute</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase">Cerchi un servizio sanitario?</h3>
              <p className="text-gray-600 mb-6 font-bold text-sm">Trova rapidamente farmacie, centri diagnostici, dentisti e servizi sanitari a pagamento a Roma.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-bold mb-8">
                <li>• Ricerca per zona o quartiere</li>
                <li>• Strutture verificate</li>
                <li>• Nessuna registrazione obbligatoria</li>
                <li>• Sicuro: Strutture verificate</li>
                <li>• Veloce: Risposte immediate</li>
              </ul>
              <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-black uppercase tracking-widest">Sfoglia Categorie</button>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-black text-orange-900 mb-4 uppercase">Offri servizi sanitari?</h3>
              <p className="text-gray-600 mb-6 font-bold text-sm">Pubblica i tuoi servizi e raggiungi utenti realmente interessati nella tua zona.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-bold mb-8">
                <li>• Pubblica i tuoi servizi in pochi minuti</li>
                <li>• Visibilità locale su Roma</li>
                <li>• Nessuna commissione</li>
                <li>• 📈 Visibilità: Posizionamento su Roma</li>
                <li>• 💰 Zero Costi: Nessuna commissione</li>
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
