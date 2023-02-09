function language()
	{
        
		let currentLang = document.getElementsByTagName('html')[0].getAttribute('lang');
		
		if (currentLang === 'en')
		{
			document.getElementsByTagName('html')[0].setAttribute('lang','es');
            let newUrl = location.pathname.split('/en/');

			// home page
			if (document.body.classList.contains('Home')){
				location.pathname = `/`
			}
			if (document.body.classList.contains('Sports')){
				location.pathname = `/deportes.html`
			}
			if (document.body.classList.contains('Live-Bettinng')){
				location.pathname = `/apuestas-vivo.html`
			}
			if (document.body.classList.contains('Casino')){
				location.pathname = `/casino.html`
			}
			if (document.body.classList.contains('Racebook')){
				location.pathname = `/caballos.html`
			}
			if (document.body.classList.contains('Cockpit')){
				location.pathname = `/gallos.html`
			}
			if (document.body.classList.contains('Banking')){
				location.pathname = `/banca.html`
			}
			if (document.body.classList.contains('Singup')){
				location.pathname = `/registrarse.html`
			}
			if (document.body.classList.contains('Bonuses')){
				location.pathname = `/bonus.html`
			}
			if (document.body.classList.contains('About-Us')){
				location.pathname = `/nosotros.html`
			}
			if (document.body.classList.contains('Terms-conditions')){
				location.pathname = `/terminos.html`
			}
			if (document.body.classList.contains('Responsible-Gaming')){
				location.pathname = `/juegoresponsable.html`
			}
			if (document.body.classList.contains('Self-Exclusion')){
				location.pathname = `/autoexclusion.html`
			}
			if (document.body.classList.contains('Fairness')){
				location.pathname = `/politicareclamos.html`
			}
			if (document.body.classList.contains('AML')){
				location.pathname = `/aml.html`
			}
			if (document.body.classList.contains('Responsible-Gaming')){
				location.pathname = `/juegojusto.html`
			}
			if (document.body.classList.contains('Privacy-Policy')){
				location.pathname = `/privacidad.html`
			}
			if (document.body.classList.contains('House-Rules')){
				location.pathname = `/reglascasa.html`
			}
			if (document.body.classList.contains('Sport-Rules')){
				location.pathname = `/reglasdeportes.html`
			}
			if (document.body.classList.contains('Casino-Rules')){
				location.pathname = `reglascasino.html`
			}

		}
		else
		{
			document.getElementsByTagName('html')[0].setAttribute('lang','en');

			// home Page
			if (document.body.classList.contains('Inicio')){
				location.pathname = `/en/`
			}
			if (document.body.classList.contains('Deportes')){
				location.pathname = `/en/sports.html`
			}
			if (document.body.classList.contains('Apuestas-vivo')){
				location.pathname = `/en/live-betting.html`
			}
			if (document.body.classList.contains('Casino')){
				location.pathname = `/en/casino.html`
			}
			if (document.body.classList.contains('Caballos')){
				location.pathname = `/en/racebook.html`
			}
			if (document.body.classList.contains('Gallos')){
				location.pathname = `/en/cockpit.html`
			}
			if (document.body.classList.contains('Banca')){
				location.pathname = `/en/banking.html`
			}
			if (document.body.classList.contains('Registro')){
				location.pathname = `/en/singup.html`
			}
			if (document.body.classList.contains('Bonus')){
				location.pathname = `/en/bonuses.html`
			}
			if (document.body.classList.contains('nosotros')){
				location.pathname = `/en/aboutUs.html`
			}
			if (document.body.classList.contains('terminos')){
				location.pathname = `en/terms.html`
			}
			if (document.body.classList.contains('juego-responsable')){
				location.pathname = `/en/responsibleGaming.html`
			}
			if (document.body.classList.contains('Autoexclusion')){
				location.pathname = `/en/self-exclusion.html`
			}
			if (document.body.classList.contains('politica-reclamos')){
				location.pathname = `/en/fairness.html`
			}
			if (document.body.classList.contains('AML')){
				location.pathname = `/en/aml.html`
			}
			if (document.body.classList.contains('Juego-justo')){
				location.pathname = `/en/responsibleGaming.html`
			}
			if (document.body.classList.contains('Politica-Privacidad')){
				location.pathname = `/en/privacyPolicy.html`
			}
			if (document.body.classList.contains('Reglas-Casa')){
				location.pathname = `/en/homeRules.html`
			}
			if (document.body.classList.contains('Reglas-Deportes')){
				location.pathname = `/en/sportsRules.html`
			}
			if (document.body.classList.contains('Reglas-Casino')){
				location.pathname = `/en/casinoRules.html`
			}
		}
	}
const changeLanguage = document.querySelectorAll('.btn__lang');
for (let i = 0; i < changeLanguage.length; i++) {
    changeLanguage[i].addEventListener('click', language);
}