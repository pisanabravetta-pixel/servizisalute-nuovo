import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
           
            <h1 className="text-2xl font-bold text-primary">ServiziSalute</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-700 hover:text-primary">Home</Link></li>
              <li><Link href="/farmacie" className="text-gray-700 hover:text-primary">Farmacie</Link></li>
              <li><Link href="/servizi-sanitari" className="text-gray-700 hover:text-primary">Servizi Sanitari</Link></li>
              <li><Link href="/pubblica-annuncio" className="text-gray-700 hover:text-primary">Pubblica Annuncio</Link></li>
              <li><Link href="/contatti" className="text-gray-700 hover:text-primary">Contatti</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );

}
