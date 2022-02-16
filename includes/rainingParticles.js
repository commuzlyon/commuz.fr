export default function rainingParticles(particles) {
    // adaptée de http://xahlee.info/js/js_raining_particles.html

    const num_of_particles = 50;  // Nombre de particules
    const driftX = 50;          // Déplacement vertical
    const gravity = 30;        // Dpalcement horizontal
    const update_speed = 100;
 
    const ParticleTypes= particles;

    // Dimensions de la page
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    const viewSpaceWidth = viewportWidth;
    const viewSpaceHeight = viewportHeight;

    // Fonction aléatoire
    const randomInt = ((xmin,xmax) => (Math.floor( Math.random() * (xmax + 1 - xmin) + xmin )));    // Entier aléatoire
    const randomReal = ((xmin,xmax) => ( Math.random() * (xmax - xmin) + xmin ));                   // Réel aléatoire

    let particle_box = document.getElementById("particle_box");
    if (!particle_box) {
      particle_box = document.createElement("div");
      particle_box.setAttribute("id","particle_box");
    }

    // Fonction générative d'une particule
    const f_new_particle = (() => {
        const yy = document.createElement("div");
        // Forme de la particule
        yy. textContent= ParticleTypes[Math.floor( Math.random() * ParticleTypes.length )];
        // Position X
        yy["xxleft"]=randomInt(0, viewSpaceWidth);
        yy.style.left= yy["xxleft"] + "px";
        // Position Y
        yy["xxtop"]= -50;
        yy.style.top= yy["xxtop"] + "px";
        // Rotation
        yy["xrotate"] = randomInt(-150, 150);
        yy.style.transform = "rotate(" + yy["xrotate"] + "deg)";
        // Taille
        yy["xsize"]= 10 + randomInt(0,30);
        yy.style.fontSize = yy["xsize"] + "px";

        yy.style.position="fixed";
        yy.style.zIndex= randomInt(100,9999) .toString();
        yy.style.transition= "top linear 1.5s, left linear 1.5s, transform linear 1.5s";
        return yy;
    });

    // Création des particules
    { for (let i=0; i < num_of_particles; i++) { particle_box.appendChild( f_new_particle()) } } ;

    document.body.appendChild(particle_box);

    const particleNodes = Array.from (particle_box.children);

    // Fonction mis à jours de la position
    const f_update_positions = (() => {

        particleNodes.forEach (((xx) => {
            xx["xxleft"] +=
                (() => {
                    const rnd = Math.random();
                    if ( rnd < 0.3333 ) {
                        return 0;
                    } else if ( rnd < 0.6666) {
                        return driftX;}
                    else {
                        return - driftX;
                    }
                }) ();

            xx["xxtop"] = xx["xxtop"] + ( (xx["xsize"]/20) * (gravity) );

            if ( xx["xxtop"] > (viewSpaceHeight)*2 ) {
                xx.remove();    // Arrivé en bas on supprime la particule
            } else {
                xx["xxtop"] = xx["xxtop"] + gravity /10 * randomInt(0,10); };

            if ( xx["xrotate"] !== 0 ) {
                xx["xrotate"] = xx["xrotate"] + randomInt(-30,60);
                xx.style.transform = "rotate(" + xx["xrotate"] + "deg)";
            };

            xx.style.left = xx["xxleft"] + "px";
            xx.style.top = xx["xxtop"] + "px";
        }))

        // Si plus de particule on met fin à l'interval
        if (particleNodes.length == 0){
            clearInterval(particlesUpdateInterval);
        }

    });
    const particlesUpdateInterval = setInterval( f_update_positions , update_speed);
}