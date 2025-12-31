import { useState } from 'react';

export default function SearchBar() {
  const zoneRoma = [
    "Tutta Roma",
    "--- CENTRO ---",
    "Centro Storico", "Trastevere", "Prati", "Testaccio", "Parioli",
    "--- OVEST (TUA ZONA) ---",
    "Bravetta", "Pisana", "Casaletto", "Monteverde", "Gianicolense", "Aurelia", "Boccea",
    "--- NORD ---",
    "Flaminio", "Cassia", "Corso Francia", "Balduina", "Talenti", "Nomentana",
    "--- EST ---",
    "Tiburtina", "Collatina", "Prenestina", "San Lorenzo", "Piazza Bologna",
    "--- SUD ---",
    "Eur", "Garbatella", "Ostiense", "Appia Nuova", "Tuscolana", "Ardeatina",
    "--- LITORALE ---",
    "Ostia", "Fiumicino", "Infernetto"
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <form className="flex flex-col md:flex-row items-stretch bg-white rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-200">
        {/* Input Testo */}
        <div className="flex-[2] flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100">
          <input 
            type="text" 
            placeholder="Cerca: TAC, Pulizia denti, Analisi..." 
            className="w-full outline-none text-gray-800 font-medium placeholder-gray-400 text-lg"
          />
        </div>

        {/* Selezione Categoria */}
        <div className="flex-1 flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50/50">
          <select className="w-full outline-none bg-transparent text-gray-700 font-semibold cursor-pointer appearance-none">
            <option>Tutte le categorie</option>
            <option>Farmacie</option>
            <option>Dentisti</option>
            <option>Diagnostica</option>
            <option>A Domicilio</option>
          </select>
        </div>

        {/* Selezione Zone Roma (stile Immobiliare.it) */}
        <div className="flex-1 flex items-center px-6 py-4 bg-gray-50/50">
          <select className="w-full outline-none bg-transparent text-gray-700 font-semibold cursor-pointer appearance-none">
            {zoneRoma.map((zona, i) => (
              <option key={i} value={zona} disabled={zona.startsWith("---")}>
                {zona}
              </option>
            ))}
          </select>
        </div>

        {/* Bottone */}
        <button className="bg-[#ff6724] hover:bg-[#e85a1a] text-white font-black px-12 py-5 transition-all text-xl">
          CERCA
        </button>
      </form>
    </div>
  );
}
