import { useState } from 'react';

export default function SearchBar() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <form className="flex flex-col md:flex-row gap-2 bg-white p-2 rounded-lg shadow-lg">
        <input 
          type="text" 
          placeholder="Cosa cerchi? (es. Dentista, Tachipirina...)" 
          className="flex-[2] p-4 outline-none border-r border-gray-100 text-gray-700"
        />
        <select className="flex-1 p-4 outline-none border-r border-gray-100 text-gray-500 bg-white">
          <option>Tutte le categorie</option>
          <option>Farmacie</option>
          <option>Dentisti</option>
          <option>Diagnostica</option>
          <option>Servizi a domicilio</option>
        </select>
        <input 
          type="text" 
          placeholder="In quale zona di Roma?" 
          className="flex-1 p-4 outline-none text-gray-700"
        />
        <button className="bg-[#ff6724] hover:bg-[#e85a1a] text-white font-bold py-4 px-8 rounded-md transition-colors">
          Cerca
        </button>
      </form>
    </div>
  );
}

