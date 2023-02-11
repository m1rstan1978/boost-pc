import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import EnMain from '../views/EnMain.vue'
import GuideMain from '../views/GuideMain'
import PhSoftware from '../components/PhSoftware'
import PhBios from '../components/PhBios'
import PhTimings from '../components/PhTimings'
import PhRtl from '../components/PhRtl'
import PhTestSystem from '../components/PhTestSystem'
import PhControl from '../components/PhControl'
import PhTips from '../components/PhTips'
import PhLinks from '../components/PhLinks'
import Development from '../views/Development'
import PhantomSystem from '../views/PhantomSystem'
import PhantomSystemEn from '../views/PhantomSystemEn'
import Policy from '../views/Policy'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/guide',
    name: 'GuideMain',
    component: GuideMain,
    children: [
      {
        path: '/guide/software',
        components: {
          guide: PhSoftware
        }
      },
      {
        path: '/guide/bios-settings',
        components: {
          guide: PhBios
        }
      },
      {
        path: '/guide/overclocking',
        components: {
          guide: PhTimings
        }
      },
      {
        path: '/guide/rtl-iol',
        components: {
          guide: PhRtl
        }
      },
      {
        path: '/guide/stability-test',
        components: {
          guide: PhTestSystem
        }
      },
      {
        path: '/guide/skew-control',
        components: {
          guide: PhControl
        }
      },
      {
        path: '/guide/tips-tricks',
        components: {
          guide: PhTips
        }
      },
      {
        path: '/guide/useful-links',
        components: {
          guide: PhLinks
        }
      }
    ]
  },
  {
    path: '/developer',
    name: 'developer',
    component: Development
  },
  {
    path: '/phantom-system',
    name: 'phantom',
    component: PhantomSystem
  },
  {
    path: '/policy',
    name: 'policy',
    component: Policy
  },
  {
    path: '/en',
    name: 'EnMain',
    component: EnMain
  },
  {
    path: '/phantom-system/en',
    name: 'PhantomSystemEn',
    component: PhantomSystemEn
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
