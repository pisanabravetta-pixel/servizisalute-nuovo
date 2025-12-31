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

  // Solo servizi tecnici/diagnostici, niente medici o psicologi
  const piuCercati = ["TAC Aperta", "Ecografia Addome", "Iniezioni a domicilio", "Pulizia denti", "Fisioterapia Riabilitativa", "Analisi del sangue", "Sostituzione Catetere", "Radiografia Torace"];

  const annunciFittizi = [
    { id: 1, title: "Pulizia Denti + Ablazione Tartaro", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400", indirizzo: "Roma (Bravetta)", prezzo: "59 €", categoria: "Dentisti" },
    { id: 2, title: "TAC Encefalo Alta Risoluzione", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400", indirizzo: "Roma (Prati)", prezzo: "120 €", categoria: "Diagnostica" },
    { id: 3, title: "Infermiere per Flebo e Prelievi", image: "https://images.unsplash.com/photo-1581578731522-a204786499ec?w=400", indirizzo: "Roma (Eur)", prezzo: "30 €", categoria: "A Domicilio" },
    { id: 4, title: "Noleggio Magnetoterapia", image: "https://images.unsplash.com/photo-1576765974102-b756026ecee3?w=400", indirizzo: "Roma (Centro)", prezzo: "10 €/gg", categoria: "Farmacie" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f5]">
      <Head>
        <title>Farmacie di turno, Dentisti e TAC a Roma | Servizi Salute Roma</title>
        <meta name="description" content="Il primo marketplace per trovare farmacie, centri diagnostici per TAC e servizi infermieristici a domicilio a Roma. Pubblica e cerca gratis." />
      </Head>

      <Header />
      
      <section className="bg-white pt-12 pb-16 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-8 uppercase tracking-tight">
            Servizi Sanitari e Farmacie a Roma
          </h1>
          <SearchBar />
          
          <div className="flex justify-center gap-6 md:gap-14 mt-12 overflow-x-auto pb-4">
            {categorie.map((cat, i) => (
              <div key={i} className="flex flex-col items-center cursor-pointer min-w-[100px] group">
                <div className={`${cat.colore} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl shadow-sm group-hover:shadow-md transition-all`}>
                  {cat.icona}
                </div>
                <span className="mt-3 text-sm font-bold text-gray-700">{cat.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">🔥 Annunci in vetrina</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {annunciFittizi.map(annuncio => (
              <ServiceCard key={annuncio.id} service={annuncio} />
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6">I servizi più cercati a Roma</h2>
          <div className="flex flex-wrap gap-3">
            {piuCercati.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-gray-50 hover:bg-orange-50 text-gray-600 hover:text-[#ff6724] rounded-md text-sm cursor-pointer transition-colors border border-gray-200 font-medium">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Nuova Sezione: Perché scegliere Servizi Salute Roma */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">Perché scegliere Servizi Salute Roma?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-sm">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-xl mb-3">100% Gratuito</h3>
              <p className="text-gray-600">Nessuna commissione. Pubblicare annunci e consultare i servizi è gratis per tutti, per sempre.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-3">Diretto e Veloce</h3>
              <p className="text-gray-600">Contatta direttamente la struttura o l'infermiere. Senza intermediari e senza perdite di tempo.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="font-bold text-xl mb-3">Tutta Roma coperta</h3>
              <p className="text-gray-600">Dalla Pisana al Centro Storico. Filtra per zona e trova il servizio più vicino a casa tua.</p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#e3f2fd] p-10 rounded-3xl flex items-center gap-6 border-2 border-blue-100">
            <div className="text-6xl">🏥</div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900">Cerchi una struttura?</h3>
              <p className="text-blue-800/70 mb-5 font-medium">Trova centri diagnostici e farmacie aperte.</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all">Sfoglia categorie</button>
            </div>
          </div>
          <div className="bg-[#fff3e0] p-10 rounded-3xl flex items-center gap-6 border-2 border-orange-100">
            <div className="text-6xl">📢</div>
            <div>
              <h3 className="text-2xl font-bold text-orange-900">Pubblica Servizi</h3>
              <p className="text-orange-800/70 mb-5 font-medium">Aggiungi la tua farmacia o il tuo studio tecnico.</p>
              <button className="bg-[#ff6724] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-[#e85a1a] transition-all">Inserisci gratis</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
