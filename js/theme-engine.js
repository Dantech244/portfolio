// Liste de tous les thèmes
const themes = ['matrice', 'cyber', 'business', 'retro', 'minimal'];

// Injecte automatiquement les fichiers CSS des thèmes dans le head de la page
function injectThemeStylesheets() {
    themes.forEach(theme => {
        if (!document.querySelector(`link[href="css/theme-${theme}.css"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `css/theme-${theme}.css`;
            document.head.appendChild(link);
        }
    });
}
injectThemeStylesheets();

function switchTheme(themeName) {
    // Nettoie les anciennes classes de thèmes sur le body
    themes.forEach(t => document.body.classList.remove(`theme-${t}`));
    
    // Applique le nouveau thème
    document.body.classList.add(`theme-${themeName}`);
    localStorage.setItem('user-theme', themeName);
    
    // Met à jour l'état actif des boutons si on est sur l'index
    const buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.classList.contains(themeName || (themeName === 'matrice' && 'matrix'))) {
            btn.classList.add('active');
        }
    });
}

function toggleLightDarkMode() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('user-mode', isLight ? 'light' : 'dark');
}

function triggerRandomTheme() {
    const randomIndex = Math.floor(Math.random() * themes.length);
    switchTheme(themes[randomIndex]);
}

// Restauration des préférences au chargement de chaque page
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('user-theme') || 'matrice';
    const savedMode = localStorage.getItem('user-mode');
    
    switchTheme(savedTheme);
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
    }
});