<template lang="html">
<footer>
  <img src="/logos/logo_clin_oeil.svg" alt="Logo clin d'oeil" id="footer__logo">
  <div id="social">
    <ul>
      <li><a class="inline-link" target="_blank" rel="noopener" href="https://www.facebook.com/commuzlyon">Facebook</a></li>
      <li><a class="inline-link" target="_blank" rel="noopener" href="https://www.instagram.com/commuzlyon/">Instagram</a></li>
      <li><a class="inline-link" target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCDZ2LRLcQB0MZ6hkB_RNDuQ">Youtube</a></li>
      <li><a class="inline-link" target="_blank" rel="noopener" href="https://www.linkedin.com/company/commuz">Linkedin</a></li>
    </ul>
  </div>
  <div id="legal">
    <h3>Mentions légales</h3>
    <p>La Commuz' est un projet artistique commun à l'École centrale de Lyon et à emlyon business school.<br/>
    Elle constitue également un club artistique de l'Association des Élèves de l'École Centrale de Lyon.</p>
  </div>
  <div id="contact">
    <h3>Contacts</h3>
    <p>Pour toute question, contactez-nous sur <a class="inline-link" target="_blank"  rel="noopener" href="https://www.facebook.com/commuzlyon">Facebook</a>. <br/>
    <p>Pour toute question, vous pouvez contacter le bureau de l'association, <a class="inline-link" href="mailto:contact@commuz.fr">Rémi, Juliette et Gaspard</a>. <br/>
    Pour toute demande relative aux partenariats, contactez nos responsables partenariats <router-link class="inline-link" active-class="navbar__link--active" to="/partenariats"><span>Saban, Aurélia et Eulalie</span></router-link></p>
  </div>
</footer>
</template>

<script>
import anime from 'animejs'

export default {
  methods: {
    wink () {
      anime({
        targets: '#right-eye',
        d: 'M 261.435 221.661 L 261.362 221.714 C 261.405 221.696 261.436 221.678 261.435 221.661 Z M 257.712 240.29 C 254.249 242.524 250.741 243.873 248.121 244.726 C 245.5 245.58 243.767 245.94 243.852 246.197 C 243.916 246.391 244.57 246.596 245.286 246.66 C 247.779 246.884 251.414 246.538 253.501 245.879 C 256.478 244.938 260.182 242.546 263.116 239.668 C 266.396 236.452 267.104 235.036 267.316 231.273 C 267.4 229.783 267.449 228.529 267.424 228.487 C 266.55 230.383 265.017 232.757 263.255 234.945 C 261.493 237.132 259.502 239.135 257.712 240.29 C 257.712 240.29 257.712 240.29 257.712 240.29',
        direction: 'alternate',
        easing: [0.77, 0.06, 0.515, 0.955],
        duration: 150
      })
    }
  },
  mounted: function () {
    var observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          window.setTimeout(this.wink, 400)
        }
      })
    }, {
      threshold: 0.9
    })
    observer.observe(document.querySelector('footer'))
  }
}
</script>

<style lang="scss">
footer {
  background: #262626;
  color: #ababab;
  fill: #ababab;
  font-size: 0.9rem;
  box-shadow: inset 0px 3px 3px -2px rgba(0,0,0,0.75);
  padding: 3em 2em;

  h3 {
    font-size: 1em;
    line-height: 1em;
    margin-bottom: 0.7em;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.3em;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  grid-gap: 2em;
  @media only screen and (min-width: 576px) {
    grid-template-columns: 1fr 2fr;
  }
  @media only screen and (min-width: 768px) {
    grid-gap: 1em 3em;
    grid-template-columns: 1fr 2fr 2fr;
  }

  #footer__logo {
    max-width: 100%;
    max-height: 120px;
    grid-area: 2 / 1 / 3 / 2;
    @media only screen and (min-width: 576px) {
      grid-area: 1 / 1 / 3 / 2;
    }
    justify-self: center;
    align-self: center;
  }
}

#social {
  grid-area: 1 / 1 / 2 / 3;
  justify-self: center;
  @media only screen and (min-width: 768px) {
    justify-self: auto;
    grid-area: 1 / 2 / 2 / 4;
  }

  display: flex;

  ul {
    list-style: none;
    font-size: 1em;
    line-height: 1em;
    padding-left: 0;

    li {
      display: inline;

      &:not(:first-child)
      {
        margin-left: 1ch;
      }

      a {
        color: var(--pink);
      }
    }
  }
}

#contact {
  grid-area: 2 / 2 / 3 / 3;
  @media only screen and (min-width: 768px) {
    grid-area: 1 / 3 / 3 / 4;
  }

  dt {
    font-weight: bold;
    margin-bottom: 0.1em;
    margin-top: 0.5em;
  }

  .inline-link {
    &::before {
      top: 1.1em;
    }

    white-space: nowrap;
    color: white;

  }
}

#legal {
  // grid-area: 2 / 1 / 3 / 3;
  display: none;
  @media only screen and (min-width: 768px) {
    grid-area: 2 / 2 / 3 / 3;
    display: block;
  }
}
</style>
