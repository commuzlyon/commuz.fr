<template lang="html">
  <nav class="navbar">
    <ul class="navbar__navs">
      <li class="navbar__item">
        <router-link class="navbar__link" active-class="navbar__link--active" to="/" exact>
          <svg width="37.44" height="48" viewBox="0 0 37.439999 48">
            <path d="M15.537 46.947c-2.042-.666-3.59-1.808-6.45-4.757-2.965-3.056-3.127-3.297-3.944-5.874-.74-2.34-.802-2.835-.474-3.835.427-1.305.317-8.82-.14-9.534-.42-.656-1.066.695-1.335 2.796-.146 1.136-.312 1.567-.494 1.28-.594-.938-.233-2.655 1.19-5.65 1.535-3.236 2.094-4.054 3.156-4.622.617-.33.62-.32.08.43-.307.423-1.067 1.505-1.69 2.404l-1.13 1.635.53 1.324c.292.73.677 1.325.857 1.325.2 0 .254.527.14 1.36l-.187 1.36.47-1.266c.55-1.474 1.636-2.734 2.357-2.736.277 0 1.1.316 1.83.702 1.27.672 1.384.68 2.632.19l1.304-.512.18 1.17c.792 5.16 3.193 10.797 5.64 13.244 1.506 1.506 4.33 3.118 5.477 3.124.855.005.694.432-.985 2.625-2.168 2.832-3.843 3.897-6.287 3.998-1.06.044-2.288-.038-2.728-.18zM12.062 33.17l.755-.622-.7-.71c-1.567-1.59-6.42-.974-5.524.7.452.845 1.4 1.206 3.23 1.23 1.018.015 1.72-.173 2.24-.6zm-8.34-3.42c-.262-1.568-.272-2.696-.036-3.924.182-.948.348-1.812.37-1.92.15-.79.532 2.23.558 4.443.044 3.592-.408 4.302-.892 1.4zm15.015.828c0-1.562 2.284-3.51 4.118-3.51.84 0 1.002.123 1.002.758 0 1.54-2.35 3.403-4.288 3.403-.624 0-.833-.164-.833-.652zM2.28 29.126c-.277-.276-.5-.816-.496-1.2.007-.68.02-.68.633.103.57.727.844 1.6.503 1.6-.075 0-.363-.227-.64-.504zm15.79-2.005c.47-.876 1.98-1.66 3.13-1.622.875.028.87.037-.178.338-.628.18-1.142.568-1.237.93-.09.343-.35.623-.58.623-.228 0-.66.093-.96.208-.467.18-.492.114-.176-.477zM1.48 25.284c.016-.373.092-.45.194-.194.092.23.08.506-.026.613-.106.106-.182-.083-.168-.42zm3.964-3.122c-.576-3.07 3.3-6.696 8.31-7.77 1.068-.23 2.218-.423 2.557-.43.572-.01.563.045-.127.78-.41.435-.918 1.48-1.13 2.32l-.39 1.53-1.707.246c-2.024.292-3.83 1.294-5.568 3.087-.696.72-1.373 1.306-1.505 1.306-.133 0-.33-.48-.44-1.07zm13.875-3.17c-.262-.476-.402-2.245-.41-5.2-.013-4.452-.006-4.493 1.037-6.49 1.713-3.28 3.538-4.975 6.62-6.147l.77-.293-.456 1.505c-.25.827-.458 1.53-.46 1.562 0 .032.464-.076 1.035-.24.57-.164 1.366-.298 1.767-.298h.728l-.612 1.2-.613 1.2 2.57-.116 2.57-.116-.844 1.106c-.463.608-.843 1.2-.843 1.316 0 .115.54.21 1.2.214 1.438.005 2.702.31 2.573.622-.246.596-9.36 9.034-10.263 9.5-1.273.66-3.936 1.384-5.1 1.39-.57.002-1.004-.243-1.266-.717zm-9.383-4.08c.11-.177.44-.318.74-.316.465.004.474.048.06.315-.627.404-1.05.404-.8 0zm1.7-1.18c.23-.092.507-.08.613.026.107.106-.082.182-.42.168-.372-.015-.448-.09-.193-.193z" fill="#fff"/>
          </svg>
        </router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" active-class="navbar__link--active" to="/spectacle"><span>Le spectacle</span></router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" active-class="navbar__link--active" to="/galerie"><span>Les photos</span></router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" active-class="navbar__link--active" to="/equipe"><span>L'équipe</span></router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" active-class="navbar__link--active" to="/partenariats"><span>Partenariats</span></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.navbar {
  background: rgba(0, 0, 0, 0.5);
  border-bottom: solid 0.3px rgba(0,0,0,0.4);
  z-index: 10;
  width: 100%;
}

.navbar.rel {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
}

.navbar.abs {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.navbar__navs {
  list-style-type: none;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;
  @media only screen and (max-width: 992px) {
    font-size: 0.8em;
    justify-content: center;
  }
}

.navbar__link {
  outline: none;
  fill: white;
  color: white;
  margin-right: 0.25rem;
  svg {
    padding: 0.25rem;
    margin-right: 0.25rem;
    path {
      fill: inherit;
    }
  }
}

.navbar__item:not(:first-child) .navbar__link {
  padding: 0.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    opacity: 0.6;
    background: var(--dark-pink);
    transform: scale3d(0,1,1);
    transform-origin: 0% 50%;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.2,1,0.3,1);
  }

  &:hover {
    &::before {
      transform: scale3d(1,1,1);
    }
  }
}

.navbar__link--active {
  svg path {
    fill: var(--pink);
  }
  color: var(--pink);
}
</style>
