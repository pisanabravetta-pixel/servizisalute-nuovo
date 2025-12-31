import { NextResponse } from 'next/server';

// Mock data for services
const servizi = [
  {
    id: 1,
    title: 'Farmacia Roma Centro',
    image: '/farmacie/roma-centro.jpg',
    indirizzo: 'Via del Corso, 123',
    prezzo: 'Sconto 20% integratori',
    categoria: 'Farmacie'
  },
  {
    id: 2,
    title: 'Farmacia San Paolo',
    image: '/farmacie/san-paolo.jpg',
    indirizzo: 'Zona San Paolo',
    prezzo: 'Test Covid Rapido 15€',
    categoria: 'Farmacie'
  },
  {
    id: 3,
    title: 'Farmacia Piazza Bologna',
    image: '/farmacie/piazza-bologna.jpg',
    indirizzo: 'Piazza Bologna',
    prezzo: 'Esame Glicemia 8€',
    categoria: 'Farmacie'
  },
  {
    id: 4,
    title: 'Centro Medico Salus',
    image: '/servizi/centro-medico.jpg',
    indirizzo: 'Brtà Cugra Colliaristo',
    prezzo: 'Visita TAC Corato',
    categoria: 'Diagnostica'
  },
  {
    id: 5,
    title: 'Farmacia San Paolo',
    image: '/servizi/farmacia-san-paolo.jpg',
    indirizzo: 'Restriew Heator elutla',
    prezzo: 'Let one morze Rapido 25€',
    categoria: 'Servizi Domicilio'
  },
  {
    id: 6,
    title: 'Farmacia Piazza Bologna',
    image: '/servizi/farmacia-bologna.jpg',
    indirizzo: 'Aimk Cordiac olalinte',
    prezzo: 'Visita TAC Completa',
    categoria: 'Diagnostica'
  }
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const categoria = searchParams.get('categoria');
  
  let filteredServizi = servizi;
  
  if (categoria) {
    filteredServizi = servizi.filter(servizio => servizio.categoria === categoria);
  }
  
  return NextResponse.json(filteredServizi);
}