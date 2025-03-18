import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faMobileScreen,
  faDesktop,
  faEnvelope,
  faEnvelopesBulk,
  faGlobe 
} from '@fortawesome/free-solid-svg-icons'

import { 
  faSoundcloud, 
  faInstagram, 
  faHtml5, 
  faCss3, 
  faVuejs,
  faJs,
  faPhp,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(faSoundcloud, faInstagram, faHtml5, faCss3, faVuejs, faJs, faPhp, faLinkedin, faMobileScreen, faDesktop, faEnvelope, faEnvelopesBulk, faGlobe)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
