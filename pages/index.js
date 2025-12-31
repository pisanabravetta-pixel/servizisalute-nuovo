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

  // Sezione 1: I servizi più cercati (Offerte dirette)
  const piuCercatiOfferte = [
    { id: 101, title: "Sconto 20% Integratori e Cosmetica", image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=600", indirizzo: "Farmacia Roma Est", prezzo: "Da 10 €", categoria: "Farmacie" },
    { id: 102, title: "TAC Encefalo Totale", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600", indirizzo: "Centro Diagnostico Prati", prezzo: "125 €", categoria: "Diagnostica" },
    { id: 103, title: "Sbiancamento Dentale Professionale", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600", indirizzo: "Studio Dentistico Eur", prezzo: "89 €", categoria: "Dentisti" },
    { id: 104, title: "Prelievo Sangue a Domicilio", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600", indirizzo: "Tutta Roma", prezzo: "25 €", categoria: "A Domicilio" },
  ];

  // Sezione 3: Ultimi servizi pubblicati (Novità)
  const ultimiServizi = [
    { id: 201, title: "Test Intolleranze Alimentari", image: "https://images.unsplash.com/photo-1579152276503-346761899a22?w=600", indirizzo: "Zona Pisana", prezzo: "45 €", categoria: "Farmacie" },
    { id: 202, title: "Risonanza Magnetica Aperta", image: "https://images.unsplash.com/photo-1516549119129-df99b825fe34?w=600", indirizzo: "Zona Centro", prezzo: "150 €", categoria: "Diagnostica" },
    { id: 203, title: "Apparecchio Invisibile (Invisalign)", image: "https://images.unsplash.com/photo-1598256942487-02717cb97a01?w=600", indirizzo: "Zona Monteverde", prezzo: "Consulto Gratis", categoria: "Dentisti" },
    { id: 204, title: "Fisioterapia Riabilitativa", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600", indirizzo: "Zona Bravetta", prezzo: "40 €/seduta", categoria: "A Domicilio" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f5]">
      <Head>
        <title>Servizi Sanitari Privati Roma | Farmacie, TAC e Dentisti</title>
      </Head>

      {/* TOP BAR */}
      <div className="bg-[#002f34] text-white py-2 px-4 text-center text-xs md:text-sm font-semibold">
        🥇 “Trova servizi sanitari privati a Roma, subito”
      </div>

      <Header />
      
      {/* HERO SECTION */}
      <section className="bg-white pt-12 pb-16 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-tight mb-2">
              Servizi Sanitari e Farmacie a Roma
            </h1>
            <p className="text-gray-600 font-medium">confronta farmacie, dentisti, e servizi sanitari a pagamento nella tua zona</p>
          </div>
          
          <SearchBar />
          
          <div className="flex justify-center gap-6 md:gap-14 mt-12 overflow-x-auto pb-4">
            {categorie.map((cat, i) => (
              <div key={i} className="flex flex-col items-center cursor-pointer min-w-[100px] group">
                <div className={`${cat.colore} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-all`}>
                  {cat.icona}
                </div>
                <span className="mt-3 text-sm font-bold text-gray-700 uppercase tracking-tighter">{cat.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        
        {/* SEZIONE 1: I servizi sanitari più cercati a Roma */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">I servizi sanitari più cercati a Roma</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {piuCercatiOfferte.map(servizio => (
              <ServiceCard key={servizio.id} service={servizio} />
            ))}
          </div>
        </section>

        {/* SEZIONE 2: Testo SEO / Descrizione Portale */}
        <section className="mb-20 bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 uppercase">
            Servizi Sanitari Privati a Roma: Trova il meglio vicino a te
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            "Cercare un servizio medico a Roma non è mai stato così semplice. Che tu abbia bisogno di una visita specialistica a Roma Nord, di un laboratorio di analisi all'Eur o di un dentista in zona Prati, ServiziSalute ti offre una mappa completa delle eccellenze sanitarie della Capitale. Il nostro portale è pensato per chi cerca rapidità, professionalità e vicinanza, raggruppando i migliori professionisti sanitari della provincia di Roma in un unico posto."
          </p>
        </section>

        {/* SEZIONE 3: Ultimi servizi pubblicati */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">Ultimi servizi pubblicati</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ultimiServizi.map(servizio => (
              <ServiceCard key={servizio.id} service={servizio} />
            ))}
          </div>
        </section>

        {/* SEZIONE 4: Perché usare ServiziSalute (Privati/Professionisti) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase text-center tracking-widest">Perché usare ServiziSalute</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Box Utenti */}
            <div className="bg-white p-10 rounded-3xl flex items-center gap-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-6xl">🏥</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 uppercase">Sei un privato?</h3>
                <p className="text-gray-500 mb-5 font-medium italic">Trova subito il servizio di cui hai bisogno senza attese.</p>
                <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black uppercase text-sm">Cerca Servizi</button>
              </div>
            </div>
            {/* Box Professionisti */}
            <div className="bg-white p-10 rounded-3xl flex items-center gap-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-6xl">📢</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 uppercase">Sei un professionista?</h3>
                <p className="text-gray-500 mb-5 font-medium italic">Pubblica la tua attività gratuitamente e fatti trovare a Roma.</p>
                <button className="bg-[#ff6724] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#e85a1a] uppercase text-sm">Inserisci gratis</button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

