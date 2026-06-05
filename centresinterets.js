function afficherInteret(type) {
    const zoneMedia = document.getElementById('zoneMedia');
    if (!zoneMedia) return;

    zoneMedia.classList.remove('visible');

    setTimeout(() => {
        let imageSrc1 = ""; 
        let imageSrc3 = "";
        let imageSrc4 = "";
        let description = "";

        switch(type) {
            case 'photo':
                imageSrc1 = "2021-08-11-14-18-10.jpg";
                imageSrc3 = "2021-08-05-11-12-45.jpg"; 
                imageSrc4 = "insecte.JPG";
                description = "'J'aime prendre des photos'";
                zoneMedia.innerHTML = `
                <div class="cadre-photo">
                    <img src="${imageSrc1}" alt="${description}">
                </div>
            
                <div class="cadre-photo">
                    <img src="${imageSrc3}" alt="${description}">
                </div>
                <div class="cadre-photo">
                    <img src="${imageSrc4}" alt="${description}">
                </div>
                <p style="color: rgb(255, 255, 255);">${description}</p>

                `;
                break;
            case 'peinture':
                description = "Débute l'illustration et de la peinture numérique, en autodidacte, depuis 2022";
                zoneMedia.innerHTML = `
                <div class="cadre-video">
                    <video autoplay>
                    <source src="Painting démo compressed ultra.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                <p style="color: rgb(255, 255, 255);">${description}</p>

                `;
                break;
            case 'piano':
                imageSrc1 = "partition.png"; 
                description = "Pratique du piano orienté improvisations jazzy, depuis 2022 ";
               zoneMedia.innerHTML = `
                    <div class="cadre-photo">
                        <img src="${imageSrc1}" alt="${description}">
                    </div>
                    <p style="color: rgb(255, 255, 255);">${description}</p>
                `;
        }
        zoneMedia.classList.add('visible');

    }, 200); 
}
