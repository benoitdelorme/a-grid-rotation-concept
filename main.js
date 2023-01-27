import './style.css'
import Lenis from '@studio-freight/lenis'

class App {
  constructor() {
    this.DOM = {}
    this.DOM.grid = document.querySelector('.c-grid')
    
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual'
    }
    
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    this.initRender()
    this.initEvents()
  }

  initRender() {
    requestAnimationFrame(this.update.bind(this))
  }
  
  initEvents() {
    this.lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        this.DOM.grid.setAttribute('style', `--progress:${progress}`)
    })
  }

  update(time) {
    this.lenis.raf(time)
    requestAnimationFrame(this.update.bind(this))
  }
}

new App()