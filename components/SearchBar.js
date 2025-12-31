import { useState } from 'react';

export default function SearchBar() {
  const zoneRoma = [
    "Tutta Roma", 
    "Centro Storico", "Prati", "Trastevere", "Testaccio",
    "Bravetta", "Pisana", "Monteverde", "Gianicolense", "Aurelio",
    "Eur", "Ostiense", "Garbatella", "Magliana",
    "Roma Nord", "Flaminio", "Parioli", "Corso Francia",
    "San Lorenzo", "Piazza Bologna", "Appio Latino", "Tuscolana",
    "Ostia", "Fiumicino", "Pomezia"
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <form className="flex flex-col md:flex-row items-stretch bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200">
        <div className="flex-[2] flex items-center px-5 py-4 border-b md:border-b-0 md:border-r border-gray-100">
          <span className="text-gray-400 mr-3">🔍</span>
          <input 
            type="text" 
            placeholder="Cerca un servizio (es. TAC, Pulizia denti...)" 
            className="w-full outline-none text-gray-800 font-semibold placeholder-gray-400"
          />
        </div>

        <div className="flex-1 flex items-center px-5 py-4 border-b md:border-b-0 md:border-r border-gray-100">
          <span className="text-gray-400 mr-3">📂</span>
          <select className="w-full outline-none bg-transparent text-gray-700 font-medium cursor-pointer appearance-none">
            <option>Tutte le categorie</option>
            <option>Farmacie</option>
            <option>Dentisti</option>
            <option>Diagnostica</option>
            <option>A Domicilio</option>
          </select>
        </div>

        <div className="flex-1 flex items-center px-5 py-4">
          <span className="text-gray-400 mr-3">📍</span>
          <select className="w-full outline-none bg-transparent text-gray-700 font-medium cursor-pointer appearance-none">
            {zoneRoma.map((zona, i) => (
              <option key={i} value={zona}>{zona}</option>
            ))}
          </select>
        </div>

        <button className="bg-[#ff6724] hover:bg-[#e85a1a] text-white font-black px-12 py-5 transition-all text-xl uppercase tracking-wider">
          Cerca
        </button>
      </form>
    </div>
  );
}
