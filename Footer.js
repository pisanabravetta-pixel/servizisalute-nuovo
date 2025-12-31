import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/termini-condizioni" className="text-gray-600 hover:text-primary">
              Termini e Condizioni
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary">
              Privacy
            </Link>
            <Link href="/contatti" className="text-gray-600 hover:text-primary">
              Contatti
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} ServiziSalute.it - Portale di annunci per servizi sanitari a pagamento. Tutti i servizi sono erogati direttamente dalle strutture inserzioniste.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}