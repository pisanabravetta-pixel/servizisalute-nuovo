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
    { id: 1, title: "Pulizia Denti + Visita", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400", indirizzo: "Roma (Bravetta)", prezzo: "59 €", categoria: "Dentisti" },
    { id: 2, title: "Risonanza Magnetica Aperta", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400", indirizzo: "Roma (Prati)", prezzo: "120 €", categoria: "Diagnostica" },
    { id: 3, title: "Infermiere Notturno h24", image: "https://images.unsplash.com/photo-1576765608596-6e953bcdca97?w=400", indirizzo: "Roma (Eur)", prezzo: "30 €/ora", categoria: "A Domicilio" },
    { id: 4, title: "Kit Pronto Soccorso Completo", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400", indirizzo: "Roma (Centro)", prezzo: "45 €", categoria: "Farmacie" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f5]">
      <Header />
      
      {/* Hero con SearchBar */}
      <section className="bg-white py-10 border-b">
        <div className="container mx-auto px-4">
          <SearchBar />
          
          {/* 4 Icone Categorie */}
          <div className="flex justify-center gap-8 md:gap-16 mt-10">
            {categorie.map((cat, i) => (
              <div key={i} className="flex flex-col items-center cursor-pointer group">
                <div className={`${cat.colore} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl shadow-sm group-hover:shadow-md transition-all`}>
                  {cat.icona}
                </div>
                <span className="mt-2 text-sm font-semibold text-gray-700">{cat.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Sezione Annunci */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Annunci in vetrina</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {annunciFittizi.map(annuncio => (
            <ServiceCard key={annuncio.id} service={annuncio} />
          ))}
        </div>

        {/* Sezione Utenti / Inserzionisti */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="text-5xl">👤</div>
            <div>
              <h3 className="text-xl font-bold">Sei un privato?</h3>
              <p className="text-gray-600 mb-4">Cerca il servizio più vicino a te e prenota subito.</p>
              <button className="text-blue-600 font-bold hover:underline">Inizia a cercare →</button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="text-5xl">💼</div>
            <div>
              <h3 className="text-xl font-bold">Sei un professionista?</h3>
              <p className="text-gray-600 mb-4">Pubblica i tuoi servizi e raggiungi nuovi clienti a Roma.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Inizia a vendere</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
