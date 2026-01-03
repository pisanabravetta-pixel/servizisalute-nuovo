<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RomaSanità | Portale Annunci Sanitari Roma</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        :root {
            --primary: #0066CC;
            --primary-dark: #004C99;
            --secondary: #00A86B;
            --dark-bg: #111827;
            --light-bg: #F8FAFC;
            --white: #FFFFFF;
            --gray-200: #E2E8F0;
            --gray-500: #64748B;
            --text-main: #1E293B;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; color: var(--text-main); line-height: 1.6; background: var(--light-bg); }

        /* --- TOP BAR & HEADER --- */
        .top-bar { background: var(--primary-dark); color: white; font-size: 13px; padding: 8px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .flex-between { display: flex; justify-content: space-between; align-items: center; }

        .header { background: var(--white); padding: 15px 0; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .logo { font-size: 24px; font-weight: 800; color: var(--primary); text-decoration: none; display: flex; align-items: center; gap: 8px; }
        .logo span { color: var(--text-main); }
        
        .search-container { flex: 1; max-width: 500px; margin: 0 30px; position: relative; }
        .search-container input { width: 100%; padding: 12px 20px 12px 45px; border-radius: 50px; border: 2px solid var(--gray-200); outline: none; transition: 0.3s; }
        .search-container input:focus { border-color: var(--primary); }
        .search-container i { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: var(--gray-500); }

        /* --- HERO SECTION --- */
        .hero { background: var(--dark-bg); color: white; padding: 60px 0 80px; text-align: center; }
        .hero h1 { font-size: 42px; font-weight: 800; margin-bottom: 20px; }
        .hero h1 span { color: var(--primary); }
        .hero p { font-size: 18px; color: #94A3B8; max-width: 700px; margin: 0 auto 40px; }

        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 800px; margin: 0 auto; }
        .stat-card { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); }
        .stat-number { display: block; font-size: 28px; font-weight: 800; color: var(--secondary); }
        .stat-label { font-size: 14px; color: #94A3B8; }

        /* --- CATEGORIE STILE SUBITO --- */
        .section-padding { padding: 60px 0; }
        .section-title { margin-bottom: 40px; font-size: 24px; font-weight: 700; }
        
        .cat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; }
        .cat-card { 
            background: white; padding: 15px; border-radius: 12px; display: flex; align-items: center; 
            gap: 15px; text-decoration: none; color: inherit; border: 1px solid var(--gray-200); transition: 0.3s;
        }
        .cat-card:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-color: var(--primary); }
        .cat-icon { 
            width: 50px; height: 50px; border-radius: 50%; background: #EBF5FF; 
            display: flex; align-items: center; justify-content: center; color: var(--primary); font-size: 20px; flex-shrink: 0;
        }
        .cat-card span { font-weight: 600; font-size: 15px; }

        /* --- ANNUNCI (5 BOX) --- */
        .annunci-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
        .ad-card { background: white; border-radius: 12px; overflow: hidden; border: 1px solid var(--gray-200); }
        .ad-img { height: 150px; background: #eee; position: relative; }
        .ad-img img { width: 100%; height: 100%; object-fit: cover; }
        .ad-content { padding: 15px; }
        .ad-price { color: var(--secondary); font-weight: 700; font-size: 18px; }
        .ad-title { font-size: 15px; font-weight: 600; margin: 5px 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

        /* --- SERVIZI PIÙ RICHIESTI (8 BOX) --- */
        .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .service-item { background: white; padding: 25px; border-radius: 12px; text-align: center; border-bottom: 4px solid var(--primary); }

        /* --- SEZIONI DIFFERENZIATE --- */
        .info-section { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .info-box { padding: 40px; border-radius: 20px; }
        .bg-blue { background: #EBF5FF; color: var(--primary-dark); }
        .bg-green { background: #E6FFFA; color: #065F46; }

        /* --- FOOTER --- */
        .footer { background: var(--dark-bg); color: white; padding: 60px 0 30px; margin-top: 60px; }

        @media (max-width: 1024px) {
            .annunci-grid { grid-template-columns: repeat(3, 1fr); }
            .services-grid { grid-template-columns: repeat(2, 1fr); }
            .info-section { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <div class="top-bar">
        <div class="container flex-between">
            <span><i class="fas fa-map-marker-alt"></i> Roma e Provincia</span>
            <span><i class="fas fa-phone"></i> Emergenza: 118</span>
        </div>
    </div>

    <header class="header">
        <div class="container flex-between">
            <a href="#" class="logo"><i class="fas fa-heartbeat"></i> Roma<span>Sanità</span></a>
            <div class="search-container">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Cerca farmacie, dentisti, specialisti...">
            </div>
            <div style="display: flex; gap: 10px;">
                <button style="background: none; border: none; font-weight: 600; cursor: pointer;">Accedi</button>
                <button style="background: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer;">+ Pubblica</button>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Il Portale della <span>Salute a Roma</span></h1>
            <p>Connettiamo pazienti e professionisti sanitari nella capitale. Tutto a portata di click, senza intermediari.</p>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">+1.250</span>
                    <span class="stat-label">Annunci Attivi</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">+850</span>
                    <span class="stat-label">Professionisti</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">15K</span>
                    <span class="stat-label">Visitatori / Mese</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding container">
        <h2 class="section-title">Esplora le Categorie</h2>
        <div class="cat-grid">
            <a href="#" class="cat-card"><div class="cat-icon"><i class="fas fa-pills"></i></div><span>Farmacie</span></a>
            <a href="#" class="cat-card"><div class="cat-icon"><i class="fas fa-tooth"></i></div><span>Dentisti</span></a>
            <a href="#" class="cat-card"><div class="cat-icon"><i class="fas fa-microscope"></i></div><span>Diagnostica</span></a>
            <a href="#" class="cat-card"><div class="cat-icon"><i class="fas fa-user-md"></i></div><span>Specialisti</span></a>
            <a href="#" class="cat-card"><div class="cat-icon"><i class="fas fa-ambulance"></i></div><span>Emergenze</span></a>
        </div>
    </section>

    <section class="section-padding container" style="background: #fff; border-radius: 20px; padding: 40px;">
        <h2 class="section-title">Ultimi annunci pubblicati</h2>
        <div class="annunci-grid">
            <div class="ad-card">
                <div class="ad-img"><img src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=300" alt="Farmacia"></div>
                <div class="ad-content">
                    <span class="ad-price">Turno</span>
                    <h3 class="ad-title">Farmacia h24 Zona Centro</h3>
                    <small>Oggi, 10:45</small>
                </div>
            </div>
            <div class="ad-card">
                <div class="ad-img"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=300" alt="Dentista"></div>
                <div class="ad-content">
                    <span class="ad-price">€60</span>
                    <h3 class="ad-title">Pulizia Denti Professionale</h3>
                    <small>Oggi, 09:15</small>
                </div>
            </div>
            <div class="ad-card">
                <div class="ad-img"><img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300" alt="Visita"></div>
                <div class="ad-content">
                    <span class="ad-price">€100</span>
                    <h3 class="ad-title">Visita Cardiologica + ECG</h3>
                    <small>Ieri, 18:20</small>
                </div>
            </div>
            <div class="ad-card">
                <div class="ad-img"><img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=300" alt="Analisi"></div>
                <div class="ad-content">
                    <span class="ad-price">€40</span>
                    <h3 class="ad-title">Analisi del Sangue Rapide</h3>
                    <small>Ieri, 15:00</small>
                </div>
            </div>
            <div class="ad-card">
                <div class="ad-img"><img src="https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&w=300" alt="Farmacia"></div>
                <div class="ad-content">
                    <span class="ad-price">Promo</span>
                    <h3 class="ad-title">Farmacia: Sconto 20% Dermocosmesi</h3>
                    <small>Ieri, 12:30</small>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding container">
        <h2 class="section-title">Servizi più richiesti</h2>
        <div class="services-grid">
            <div class="service-item"><i class="fas fa-stethoscope fa-2x"></i><h4>Pediatria</h4></div>
            <div class="service-item"><i class="fas fa-eye fa-2x"></i><h4>Oculistica</h4></div>
            <div class="service-item"><i class="fas fa-bone fa-2x"></i><h4>Ortopedia</h4></div>
            <div class="service-item"><i class="fas fa-brain fa-2x"></i><h4>Psicologia</h4></div>
            <div class="service-item"><i class="fas fa-female fa-2x"></i><h4>Ginecologia</h4></div>
            <div class="service-item"><i class="fas fa-heart fa-2x"></i><h4>Cardiologia</h4></div>
            <div class="service-item"><i class="fas fa-crutch fa-2x"></i><h4>Fisioterapia</h4></div>
            <div class="service-item"><i class="fas fa-vial fa-2x"></i><h4>Laboratorio</h4></div>
        </div>
    </section>

    <section class="section-padding container">
        <div class="info-section">
            <div class="info-box bg-blue">
                <h3>Perché scegliere RomaSanità?</h3>
                <p style="margin-top:15px">Trovi solo professionisti verificati operanti nel comune di Roma. Contatto diretto senza commissioni di prenotazione.</p>
                <ul style="margin-top:15px; list-style: none;">
                    <li><i class="fas fa-check"></i> Ricerca per quartiere</li>
                    <li><i class="fas fa-check"></i> Recensioni reali</li>
                </ul>
            </div>
            <div class="info-box bg-green">
                <h3>Perché pubblicare qui?</h3>
                <p style="margin-top:15px">Raggiungi migliaia di cittadini romani che cercano attivamente servizi sanitari ogni giorno.</p>
                <ul style="margin-top:15px; list-style: none;">
                    <li><i class="fas fa-check"></i> Prima riga nei risultati</li>
                    <li><i class="fas fa-check"></i> Pannello gestione annunci</li>
                </ul>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container flex-between" style="align-items: flex-start;">
            <div>
                <h3>RomaSanità</h3>
                <p style="color: #94A3B8; margin-top: 10px;">Il punto di riferimento per la salute nella Capitale.</p>
            </div>
            <div>
                <h4>Link Utili</h4>
                <p style="color: #94A3B8;">Privacy Policy | Termini | Contatti</p>
            </div>
        </div>
    </footer>

</body>
</html>
