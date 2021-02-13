<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 189.07 194.01"
    :style="`height: ${size}px; width: ${size}px`"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="97.47"
        y1="230.64"
        x2="194.53"
        y2="62.52"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fff" />
        <stop offset="0" stop-color="#f7f7f7" />
        <stop offset="1" stop-color="#fff" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="57.64"
        y1="161.51"
        x2="234.36"
        y2="161.51"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#c02b35" />
        <stop offset="0.11" stop-color="#c8323b" />
        <stop offset="0.69" stop-color="#ed5456" />
        <stop offset="1" stop-color="#fb6161" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-3"
        x1="29.33"
        y1="130"
        x2="153.02"
        y2="130"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#c02b35" />
        <stop offset="0.16" stop-color="#cc363e" />
        <stop offset="0.71" stop-color="#f1595b" />
        <stop offset="1" stop-color="#f66" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-4"
        x1="29.33"
        y1="134.77"
        x2="153.02"
        y2="134.77"
        xlink:href="#linear-gradient-3"
      />
      <linearGradient
        id="linear-gradient-5"
        x1="29.33"
        y1="139.55"
        x2="153.02"
        y2="139.55"
        xlink:href="#linear-gradient-3"
      />
      <linearGradient
        id="linear-gradient-6"
        x1="118.85"
        y1="147.11"
        x2="153.02"
        y2="147.11"
        xlink:href="#linear-gradient-3"
      />
      <linearGradient
        id="linear-gradient-7"
        x1="199.06"
        y1="43.45"
        x2="115.21"
        y2="188.67"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fb6161" />
        <stop offset="0.31" stop-color="#ed5456" />
        <stop offset="0.89" stop-color="#c8323b" />
        <stop offset="1" stop-color="#c02b35" />
      </linearGradient>
    </defs>
    <g id="Layer_1" data-name="Layer 1">
      <path
        class="cls-1"
        d="M208,74.32H84a25.82,25.82,0,0,0-25.82,25.82V193A25.82,25.82,0,0,0,84,218.84H120L140.48,246a6.92,6.92,0,0,0,11,0L172,218.84h36A25.82,25.82,0,0,0,233.86,193V100.14A25.82,25.82,0,0,0,208,74.32Z"
        transform="translate(-57.64 -55.19)"
      />
      <rect class="cls-2" x="29.33" y="128.6" width="123.68" height="2.79" />
      <rect class="cls-3" x="29.33" y="133.38" width="123.68" height="2.79" />
      <rect class="cls-4" x="29.33" y="138.16" width="123.68" height="2.79" />
      <rect class="cls-5" x="118.85" y="145.72" width="34.17" height="2.79" />
      <path
        class="cls-6"
        d="M176.29,173.34v-7.47q33.41-19.23,41.24-48.76-8.47,5.51-15.42,5.52-11.56,0-19.53-9.35t-8-22.85a33.59,33.59,0,0,1,10.47-25.1q10.48-10.12,25.77-10.14T236.42,68.1Q246.71,81,246.7,100.2q0,27.06-20.69,48.5T176.29,173.34Zm-87.65,0v-7.47q33.42-19.23,41.25-48.76-8.47,5.51-15.54,5.52-11.44,0-19.41-9.35T87,90.43a33.64,33.64,0,0,1,10.41-25.1q10.41-10.12,25.7-10.14T148.72,68.1q10.22,12.9,10.22,32.1,0,27.06-20.63,48.5T88.64,173.34Z"
        transform="translate(-57.64 -55.19)"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class KutipankuLogo extends Vue {
  /* ------------------------------------
  => Props declaration
  ------------------------------------ */
  @Prop({
    required: false,
    type: Number,
    default() {
      return 42;
    }
  })
  size!: number;
}
</script>

<style scoped>
.cls-1 {
  stroke-miterlimit: 10;
  fill: url(#linear-gradient);
  stroke: url(#linear-gradient-2);
}
.cls-2,
.cls-3,
.cls-4,
.cls-5 {
  opacity: 0.3;
}
.cls-2 {
  fill: url(#linear-gradient-3);
}
.cls-3 {
  fill: url(#linear-gradient-4);
}
.cls-4 {
  fill: url(#linear-gradient-5);
}
.cls-5 {
  fill: url(#linear-gradient-6);
}
.cls-6 {
  fill: url(#linear-gradient-7);
}
</style>
