import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'
// import * as swiper from '@node/alpine-swiper/src' // @ts-nocheck


export default (Alpine: Alpine) => {
    Alpine.plugin(intersect)
    // Alpine.plugin(swiper)
}
