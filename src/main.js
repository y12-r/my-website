import './style.css'
import { animate, stagger } from 'animejs'

animate('.site-header', {
  opacity: [0, 1],
  translateY: [-20, 0],
  duration: 800,
})

animate('.hero-subtitle', {
  opacity: [0, 1],
  translateY: [20, 0],
  delay: 300,
  duration: 800,
})

animate('.hero-title', {
  opacity: [0, 1],
  translateY: [30, 0],
  delay: 500,
  duration: 1000,
})

animate('.hero-text', {
  opacity: [0, 1],
  translateY: [20, 0],
  delay: 700,
  duration: 800,
})

animate('.works-button', {
  opacity: [0, 1],
  scale: [0.8, 1],
  delay: 900,
  duration: 700,
})

animate('.about, .skills', {
  opacity: [0, 1],
  translateY: [40, 0],
  delay: stagger(250, { start: 1100 }),
  duration: 900,
})