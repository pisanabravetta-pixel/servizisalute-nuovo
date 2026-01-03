import Head from 'next/head';

export default function Home() {
  const categorie = [
    { nome: 'Farmacie', icona: 'fa-pills', colore: 'bg-blue-100', text: 'text-blue-600' },
    { nome: 'Dentisti', icona: 'fa-tooth', colore: 'bg-green-100', text: 'text-green-600' },
    { nome: 'Diagnostica', icona: 'fa-microscope', colore: 'bg-purple-100', text: 'text-purple-600' },
    { nome: 'Specialisti', icona: 'fa-user-md', colore: 'bg-red-100', text: 'text-red-600' },
    { nome: 'Emergenze', icona: 'fa-ambulance', colore: 'bg-yellow-100', text: 'text-yellow-600' },
  ];

  const annunci = [
    { id: 1, titolo: "Farmacia h24 Zona Centro", prezzo: "Turno", img: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=400", cat: "Farmacie" },
    { id: 2, titolo: "Pulizia Denti Professionale", prezzo: "60€", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400", cat: "Dentisti" },
    { id: 3, titolo: "Visita Cardiologica + ECG", prezzo: "100€", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", cat: "Specialisti" },
    { id: 4, titolo: "Analisi del Sangue Rapide", prezzo: "40€", img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400", cat: "Diagnostica" },
    { id: 5, titolo: "Sconto 20% Dermocosmesi", prezzo: "Promo", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?w=400", cat: "Farmacie" },
  ];

  const servizi = [
    { n: "Pediatria", i: "fa-stethoscope" }, { n: "Oculistica", i: "fa-eye" },
    { n: "Ortopedia", i: "fa-bone" }, { n: "Psicologia", i: "fa-brain" },
    { n: "Ginecologia", i: "fa-female" }, { n: "Cardiologia", i: "fa-heart" },
    { n: "Fisioterapia", i: "fa-crutch" }, { n: "Laboratorio", i: "fa-vial" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Head>
        <title>RomaSanità | Portale Sanitario Capitale</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </Head>

      {/* TOP BAR */}
      <div className="bg-[#004C99] text-white py-2 px-4 text-xs font-bold uppercase tracking-widest">
        <div className="max-w-7xl mx-auto flex justify-between">
          <span><i className="fas fa-hospital-symbol mr-2"></i> Roma e Provincia</span>
          <span className="hidden md:inline">Il portale gratuito per la salute dei romani</span>
          <span><i className="fas fa-phone-alt mr-2"></i> EMERGENZA: 118</span>
        </div>
      </div>

      {/* HEADER STILE PROFESSIONALE */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-black text-[#0066CC] tracking-tighter">ROMA<span className="text-gray-800">SANITÀ</span></div>
          
          <div className="hidden lg:flex flex-1 max-w-lg mx-10 relative">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input type="text" placeholder="Cerca farmacie, zone, specialisti..." className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-full focus:ring-2 focus:ring-blue-500 outline-none transition" />
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-bold text-gray-600 hover:text-blue-600">ACCEDI</button>
            <button className="bg-[#0066CC] text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:bg-blue-700 transition">+ PUBBLICA</button>
          </div>
        </div>
      </header>

      {/* HERO SECTION SCURA CON STATS */}
      <section className="bg-[#111827] text-white py-20 px-4 border-b border-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">La salute a Roma,<br/><span className="text-blue-500">finalmente semplice.</span></h1>
          <p className="text-gray-400 text-lg mb-12">Trova subito ciò di cui hai bisogno tra migliaia di professionisti verificati nella Capitale.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-black text-green-400">+1.250</div>
              <div className="text-gray-500 text-xs font-bold uppercase mt-1">Annunci Attivi</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-black text-green-400">+850</div>
              <div className="text-gray-500 text-xs font-bold uppercase mt-1">Professionisti</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-black text-green-400">15.000</div>
              <div className="text-gray-500 text-xs font-bold uppercase mt-1">Utenti/Mese</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIE STILE SUBITO.IT */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-xl font-black text-gray-800 uppercase mb-8 flex items-center">
          <span className="w-8 h-1 bg-blue-600 mr-3"></span> Esplora Categorie
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categorie.map((c, i) => (
            <div key={i} className="bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4 hover:border-blue-500 hover:shadow-md cursor-pointer transition">
              <div className={`w-12 h-12 rounded-full ${c.colore} ${c.text} flex items-center justify-center text-xl shadow-inner`}>
                <i className={`fas ${c.icona}`}></i>
              </div>
              <span className="font-bold text-gray-700 uppercase text-sm tracking-tight">{c.nome}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ULTIMI ANNUNCI (5 BOX) */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-black text-gray-800 uppercase mb-8">Ultimi annunci pubblicati</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {annunci.map((a) => (
              <div key={a.id} className="group cursor-pointer">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-3">
                  <img src={a.img} alt={a.titolo} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-black text-blue-600 shadow-sm uppercase">{a.cat}</div>
                </div>
                <div className="text-green-600 font-black text-lg">{a.prezzo}</div>
                <h3 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition">{a.titolo}</h3>
                <div className="text-gray-400 text-xs mt-2 uppercase font-bold">Roma • Oggi</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI PIÙ RICHIESTI (8 BOX ALLINEATI) */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-xl font-black text-gray-800 uppercase mb-8 text-center">I servizi più richiesti</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {servizi.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl text-center border-b-4 border-blue-600 shadow-sm hover:-translate-y-1 transition">
              <i className={`fas ${s.i} text-3xl text-blue-600 mb-4`}></i>
              <h4 className="font-black text-gray-800 uppercase text-sm tracking-widest">{s.n}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SEZIONI DIFFERENZIATE PER PAZIENTI E PROFESSIONISTI */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-blue-900 uppercase mb-4">Perché scegliere RomaSanità?</h3>
            <p className="text-blue-800/70 font-medium mb-6">Mettiamo in contatto diretto pazienti e medici senza alcun costo di intermediazione o commissioni nascoste.</p>
            <ul className="space-y-3">
              <li className="flex items-center text-blue-900 font-bold text-sm"><i className="fas fa-check-circle mr-2 text-blue-500"></i> RICERCA PER QUARTIERE</li>
              <li className="flex items-center text-blue-900 font-bold text-sm"><i className="fas fa-check-circle mr-2 text-blue-500"></i> PROFESSIONISTI VERIFICATI</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-50 p-10 rounded-3xl border border-green-100 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-green-900 uppercase mb-4">Sei un professionista?</h3>
            <p className="text-green-800/70 font-medium mb-6">Aumenta la tua visibilità a Roma e provincia pubblicando i tuoi servizi sanitari sul portale leader della capitale.</p>
            <ul className="space-y-3">
              <li className="flex items-center text-green-900 font-bold text-sm"><i className="fas fa-check-circle mr-2 text-green-500"></i> PUBBLICAZIONE GRATUITA</li>
              <li className="flex items-center text-green-900 font-bold text-sm"><i className="fas fa-check-circle mr-2 text-green-500"></i> CONTATTO DIRETTO</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-10 mb-10">
          <div className="text-3xl font-black text-blue-500 mb-6 md:mb-0 tracking-tighter uppercase">ROMA SANITÀ</div>
          <div className="flex gap-8 text-sm font-bold text-gray-400">
            <a href="#" className="hover:text-white">PRIVACY</a>
            <a href="#" className="hover:text-white">TERMINI</a>
            <a href="#" className="hover:text-white">CONTATTI</a>
          </div>
        </div>
        <div className="text-center text-gray-600 text-xs font-bold uppercase tracking-widest">
          © 2026 ROMA SANITÀ - Tutti i diritti riservati
        </div>
      </footer>
    </div>
  );
}
