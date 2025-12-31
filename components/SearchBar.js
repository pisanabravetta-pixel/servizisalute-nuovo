import { useState } from 'react';

export default function SearchBar() {
  const zoneRoma = ["Tutta Roma", "Roma Nord", "Roma Sud", "Roma Est", "Roma Ovest", "Centro Storico", "Eur", "Prati", "Bravetta/Pisana", "Trastevere", "Monteverde"];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <form className="flex flex-col md:flex-row items-stretch bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-2 border-gray-100">
        {/* Cosa cerchi */}
        <div className="flex-[2] flex items-center px-4 py-3 md:py-5 border-b md:border-b-0 md:border-r border-gray-200">
          <span className="text-gray-400 mr-2">🔍</span>
          <input 
            type="text" 
            placeholder="Cosa cerchi? (es. TAC, Dentista, Badante...)" 
            className="w-full outline-none text-gray-800 font-medium"
          />
        </div>

        {/* Categoria */}
        <div className="flex-1 flex items-center px-4 py-3 md:py-5 border-b md:border-b-0 md:border-r border-gray-200">
          <span className="text-gray-400 mr-2">📂</span>
          <select className="w-full outline-none bg-transparent text-gray-600 appearance-none cursor-pointer">
            <option>Tutte le categorie</option>
            <option>Farmacie</option>
            <option>Dentisti</option>
            <option>Diagnostica</option>
            <option>A Domicilio</option>
          </select>
        </div>

        {/* Zone di Roma */}
        <div className="flex-1 flex items-center px-4 py-3 md:py-5">
          <span className="text-gray-400 mr-2">📍</span>
          <select className="w-full outline-none bg-transparent text-gray-600 appearance-none cursor-pointer">
            {zoneRoma.map((zona, i) => (
              <option key={i} value={zona}>{zona}</option>
            ))}
          </select>
        </div>

        {/* Bottone Cerca */}
        <button className="bg-[#ff6724] hover:bg-[#e85a1a] text-white font-bold px-10 py-4 md:py-0 transition-all text-lg">
          Cerca
        </button>
      </form>
    </div>
  );
}
