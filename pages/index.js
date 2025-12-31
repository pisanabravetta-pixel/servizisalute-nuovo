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

  const piuCercati = ["TAC Aperta", "Ecografia Addome", "Infermieri a domicilio", "Pulizia denti", "Fisioterapia", "Psicologo", "Analisi del sangue", "Oculista"];

  const annunciFittizi = [
    { id: 1, title: "Pulizia Denti + Visita Specialistica", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400", indirizzo: "Roma (Bravetta)", prezzo: "59 €", categoria: "Dentisti" },
    { id: 2, title: "TAC Encefalo Alta Risoluzione", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400", indirizzo: "Roma (Prati)", prezzo: "120 €", categoria: "Diagnostica" },
    { id: 3, title: "Infermiere Certificato per Iniezioni", image: "https://images.unsplash.com/photo-1581578731522-a204786499ec?w=400", indirizzo: "Roma (Eur)", prezzo: "30 €", categoria: "A Domicilio" },
    { id: 4, title: "Noleggio Sedia a Rotelle", image: "https://images.unsplash.com/photo-1576765974102-b756026ecee3?w=400", indirizzo: "Roma (Centro)", prezzo: "15 €/gg", categoria: "Farmacie" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f5]">
      <Header />
      
      {/* Hero e Ricerca */}
      <section className="bg-white pt-12 pb-16 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-8">Servizi Salute Roma: Il mercato della sanità di zona</h1>
          <SearchBar />
          
          {/* Categorie */}
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
        {/* Annunci in Vetrina */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            🔥 Annunci in vetrina
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {annunciFittizi.map(annuncio => (
              <ServiceCard key={annuncio.id} service={annuncio} />
            ))}
          </div>
        </section>

        {/* Servizi più cercati */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6">I servizi più cercati a Roma</h2>
          <div className="flex flex-wrap gap-3">
            {piuCercati.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-700 rounded-full text-sm cursor-pointer transition-colors border border-gray-200">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Perché scegliere noi */}
        <section className="mb-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-4">🆓</div>
            <h3 className="font-bold text-lg mb-2">Sempre Gratis</h3>
            <p className="text-gray-600 text-sm">Consultare gli annunci e contattare i professionisti è e sarà sempre gratuito.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-bold text-lg mb-2">Pubblica in 30 secondi</h3>
            <p className="text-gray-600 text-sm">Sei un professionista? Inserisci il tuo annuncio gratuitamente e trova subito nuovi pazienti.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold text-lg mb-2">Solo a Roma</h3>
            <p className="text-gray-600 text-sm">Siamo specializzati sulla capitale. Trovi solo servizi realmente vicini a te.</p>
          </div>
        </section>

        {/* Box Privati/Professionisti */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#e3f2fd] p-8 rounded-2xl flex items-center gap-6">
            <div className="text-5xl">🏥</div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">Cerchi assistenza?</h3>
              <p className="text-blue-800/70 mb-4 font-medium">Trova specialisti verificati nella tua zona.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-md">Scopri tutti gli annunci</button>
            </div>
          </div>
          <div className="bg-[#fff3e0] p-8 rounded-2xl flex items-center gap-6">
            <div className="text-5xl">📢</div>
            <div>
              <h3 className="text-xl font-bold text-orange-900">Vuoi più visibilità?</h3>
              <p className="text-orange-800/70 mb-4 font-medium">Pubblicare un annuncio non costa nulla.</p>
              <button className="bg-[#ff6724] text-white px-6 py-2 rounded-lg font-bold shadow-md">Inserisci annuncio gratis</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
