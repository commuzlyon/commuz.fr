// Ce fichier permet d'utiliser Google Analytics avec Nuxt 2, solution temporaire en attendant une mise à niveau vers Nuxt 3

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-XXXXXXXXXX');