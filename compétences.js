function tournerRoue(degres, competence) {
    const roue = document.getElementById('maRoue');
    const zoneTexte = document.getElementById('zoneTexte');
    
    if (roue) {
        roue.style.transform = `rotate(-${degres}deg)`;
    }
    
    const boutons = document.querySelectorAll('.comp-item-roue');
    boutons.forEach(bouton => {
        bouton.style.transform = `rotate(${degres}deg)`;
    });

    if (zoneTexte) {
        zoneTexte.classList.remove('activation-switch');
        
    
        if (competence === 'programmation') {
            zoneTexte.innerHTML = `<h3>Programmation</h3>
                                   <ul>
                                    <li>Python : polyvalent, interprété et orienté objet</li> 
                                    <li>CSS : Langage de feuilles de style pour HTML</li>
                                    <li>Javascript : scripting côté client, rend les pages web dynamiques  </li>
                                    <li>Julia :  Haut niveau, performant et spécialisé pour le calcul scientifique/numérique.</li>
                                    <li>JSON : Format léger et structuré pour échanger des données</li>
                                    <li>SQL : Interroger et manipuler des bases de données relationnelles</li>
                                    <li>VBA : Utilisé pour les macros Excel</li>
                                    <li>HTML : Base des sites web</li>
                                    </ul>`;
        } else if (competence === 'cao') {
            zoneTexte.innerHTML = `<h3>CAO / CAD (Conception)</h3>
                                   <p>Modélisation 3D, mise en plan et conception d'ensembles mécaniques complexes sous SolidWorks, Catia et Inventor dans le respect des contraintes de fabrication.</p>`;
        } else if (competence === 'gestion de projet') {
            zoneTexte.innerHTML = `<h3>Gestion de projet</h3>
                                   <p>Projets menés dans un cadre scolaire et professionnel, utilisation des outils de projet et d'amelioration continue(DMAIC, pareto, 7M, SIPOC, PDCA...)</p>`;
        } else if (competence === 'fao') {
            zoneTexte.innerHTML = `<h3>Fabrication assistée par ordinateur (FAO)</h3>
                                   <p>Programmation sur Siemens NX tournage, usinage 3 axes et axes</p>`;
        }
        
        zoneTexte.classList.add('activation-switch');
    }
}
