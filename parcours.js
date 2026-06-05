function ouvrirIframe(event, url) {
    event.preventDefault();
    
    const modal = document.getElementById('zoneIframe');
    const iframe = document.getElementById('monIframe');
    
    iframe.src = url;
    
    modal.style.display = 'flex';
}

function fermerIframe() {
    const modal = document.getElementById('zoneIframe');
    const iframe = document.getElementById('monIframe');
    
    // Cache la fenêtre
    modal.style.display = 'none';
    
    iframe.src = "";
}