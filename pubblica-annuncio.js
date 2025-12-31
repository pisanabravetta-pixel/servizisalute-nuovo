import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PubblicaAnnuncio() {
  return (
    <>
      <Head>
        <title>Pubblica Annuncio - ServiziSalute</title>
        <meta name="description" content="Pubblica il tuo servizio sanitario su ServiziSalute" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Pubblica il tuo Annuncio</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-600 mb-6">
                Pubblica gratuitamente il tuo servizio sanitario su ServiziSalute. 
                Raggiungi migliaia di potenziali clienti a Roma.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Tipo di Servizio</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Seleziona categoria</option>
                    <option>Farmacia</option>
                    <option>Dentista</option>
                    <option>Diagnostica</option>
                    <option>Servizi Domicilio</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nome Servizio</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nome del tuo servizio"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Indirizzo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Indirizzo completo"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Telefono</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Numero di telefono"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Descrizione</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    rows="4"
                    placeholder="Descrivi il tuo servizio..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Prezzo (opzionale)</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Esempio: 50€, Sconto 20%"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Immagine (opzionale)</label>
                  <input 
                    type="file" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    accept="image/*"
                  />
                </div>
                
                <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors font-medium">
                  Pubblica Annuncio Gratuito
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}