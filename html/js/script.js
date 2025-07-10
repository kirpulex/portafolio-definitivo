// Script para navegación de secciones por botones y cambio de wallpaper darkmode

document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.querySelectorAll('.nav-button');
    const panels = document.querySelectorAll('.content-panel');
    const themeToggle = document.getElementById('theme-toggle');
    const backgroundVideo = document.querySelector('.background-video');
    const videoSource = backgroundVideo ? backgroundVideo.querySelector('source') : null;
    // URLS de los dos wallpapers (puedes cambiar la segunda por la que prefieras)
    const wallpaperDay = 'https://videos.pexels.com/video-files/6815635/6815635-uhd_2732_1318_30fps.mp4';
    const wallpaperNight = 'https://videos.pexels.com/video-files/1654216/1654216-hd_1920_1080_30fps.mp4'; // Fondo nocturno solicitado
    let isNight = false;

    navButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Quitar clase 'active' de todos los botones
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase 'active' al botón clicado
            this.classList.add('active');

            // Ocultar todas las secciones
            panels.forEach(panel => panel.classList.remove('active'));
            // Mostrar la sección correspondiente
            const target = this.getAttribute('data-target');
            const targetPanel = document.getElementById(target);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // Cambiar wallpaper al tocar el botón de darkmode
    if (themeToggle && videoSource) {
        themeToggle.addEventListener('click', function (e) {
            e.preventDefault();
            isNight = !isNight;
            videoSource.setAttribute('src', isNight ? wallpaperNight : wallpaperDay);
            backgroundVideo.load();
        });
    }

    // --- RELOJ EN TIEMPO REAL ---
    function updateClock() {
        const clockTime = document.getElementById('clock-time');
        const clockDate = document.getElementById('clock-date');
        const now = new Date();
        if (clockTime) {
            clockTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }
        if (clockDate) {
            clockDate.textContent = now.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }
    }
    updateClock();
    setInterval(updateClock, 1000);
});
