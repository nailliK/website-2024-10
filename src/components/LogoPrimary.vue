<script lang="ts" setup>
import {ref, type Ref} from "vue";

const logoCount: number = 4;
const logoIndex: Ref = ref(Math.floor(Math.random() * logoCount));
let isHover: boolean = false;

const setLogo = ()=>{
  logoIndex.value = Math.floor(Math.random() * logoCount);
}
setLogo();

setInterval(setLogo, 3500);

</script>

<template>
  <div id="logo"
       class="logo">
    <a href="/">
      <svg :class="{'active': logoIndex === 0}"
           class="logo__svg logo__svg--knockout"
           viewBox="0 0 1024.31 1024.31"
           xmlns="http://www.w3.org/2000/svg">
        <polygon points="0 0 0 1024.31 193.53 1024.31 193.53 0.75 0 0"/>
        <polygon points="393.36 716.67 393.36 1024.31 790.13 1024.31 527.05 558.54 393.36 716.67"/>
        <polygon points="780.46 0.75 393.36 446.4 393.36 0.75 780.46 0.75"/>
        <polygon points="660.75 407.58 1024.31 1024.07 1024.31 0 660.75 407.58"/>
      </svg>

      <svg :class="{'active': logoIndex === 1}"
           class="logo__svg logo__svg--perspective"
           viewBox="0 0 192 192"
           xmlns="http://www.w3.org/2000/svg">
        <polyline class="cls-1"
                  points="96 96 128 64 192 64"/>
        <polyline class="cls-1"
                  points="96 96 128 128 192 128"/>
        <polygon class="cls-2"
                 points="96 96 128 64 128 0 96 96"/>
        <polygon class="cls-2"
                 points="96 96 64 192 64 0 96 96"/>
        <polygon class="cls-2"
                 points="96 96 128 128 128 192 96 96"/>
        <rect class="cls-3"
              height="192"
              width="64"/>
        <rect class="cls-3"
              height="64"
              width="64"
              x="128"/>
        <rect class="cls-3"
              height="64"
              width="64"
              x="128"
              y="128"/>
      </svg>

      <svg :class="{'active': logoIndex === 2}"
           class="logo__svg logo__svg--blackletter"
           viewBox="0 0 407.76 655.76"
           xmlns="http://www.w3.org/2000/svg">
        <rect height="352"
              width="96"
              x="135.88"
              y="67.88"/>
        <rect height="96"
              transform="translate(0 135.76) rotate(-45)"
              width="96"
              x="115.88"
              y="19.88"/>
        <rect height="96"
              transform="translate(-248.87 238.95) rotate(-45)"
              width="96"
              x="116"
              y="371.88"/>
        <rect height="256"
              width="96"
              x="271.88"
              y="331.88"/>
        <rect height="96"
              transform="translate(-146.84 309.25) rotate(-45)"
              width="96"
              x="251.88"
              y="283.88"/>
        <rect height="96"
              transform="translate(-316.15 412.52) rotate(-45)"
              width="96"
              x="291.88"
              y="539.88"/>
        <rect height="96"
              transform="translate(-50.65 269.43) rotate(-45)"
              width="96.08"
              x="251.87"
              y="147.85"/>
        <rect height="96"
              transform="translate(-166.68 125.3) rotate(-45)"
              width="96.08"
              x="19.87"
              y="215.85"/>
      </svg>

      <svg :class="{'active': logoIndex === 3}"
           class="logo__svg logo__svg--original"
           height="800"
           viewBox="0 0 800 800"
           width="800"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M390.14,296.52,413.93,290l3.42-.94,2,7.39,5.27,19.83,7.61,28.6,9.1,34.2,9.57,36,9.22,34.67L468,479.4l5.61,21.08,1.69,6.34.51,1.91c.06.22.32.77.27,1s-.41.26-.8.37l-6,1.69-16.55,4.63-3.27.91-3.18-11.91-6.67-25-5.88-22-.85-3.17a9.29,9.29,0,0,0-.45-1.69c-.15-.3-.17-.29-.53-.48l-3.25-1.73-19.82-10.56-.47-.25L403,456.8l-11.31,35.06L381,525.09,378,534.59a6.54,6.54,0,0,1-.59,1.83c-.3.37-1.24.42-1.71.54L345,544.85l-.81.21,3-8.74,7.39-21.85,9.61-28.43,9.63-28.47,7.43-22,2.2-6.51.6-1.78c0-.11.27-.54.22-.66s-.58-.32-.7-.39l-2.13-1.18-7.78-4.32-24.34-13.51-25.9-14.38-15.28-8.48-.74-.41,27.65-7.54,6.08-1.66a3.91,3.91,0,0,1,1.59-.35,7.36,7.36,0,0,1,1.61,1l3.48,2.06,26.4,15.62,31.59,18.69,11.82,7,3.83,2.27a12.06,12.06,0,0,0,2,1.21,1.49,1.49,0,0,1,.25.15l-3.35-12.53-8-30.08-9.72-36.38L394.26,312l-4.07-15.24ZM206,323.73a82.76,82.76,0,0,1-26-21.44c-8-9.84-13.79-21.25-18.06-33.13a174.19,174.19,0,0,1-6.6-23.84,324,324,0,0,0-6.17,44,286.8,286.8,0,0,0,.26,43.46c.6,7.22,1.6,14.38,2.56,21.56q1.33,10,3.43,20a260.26,260.26,0,0,0,28.06,74.07,8.44,8.44,0,0,1,.61,1.07c.13.34.12.73.21,1.09a3.71,3.71,0,0,0,.95,1.71h-1.07a203.59,203.59,0,0,0,11.51,54.67,244.33,244.33,0,0,0,10.62,25.39,230.72,230.72,0,0,0,13.58,23.55c2.48,3.81,5.47,7.38,8.31,10.93a129.88,129.88,0,0,0,9.16,10.61c3.18,3.19,6.09,6.64,9.29,9.79s6.27,6,9.55,8.84a209.58,209.58,0,0,0,42.68,28.66q5.82,2.95,11.8,5.55c4.2,1.83,8.39,3.68,12.72,5.18A215.91,215.91,0,0,0,351,643.15a218.69,218.69,0,0,0,57.7,3.86,207.12,207.12,0,0,0,55.7-11.33c1.08-.38,2.16-.76,3.25-1.1a8.49,8.49,0,0,0,1.58-.54c.53-.3,1-.7,1.56-1,2-1.11,4-1.48,6.1-2.23a117,117,0,0,0,12.55-6,222.66,222.66,0,0,0,23.29-13.44,219.71,219.71,0,0,0,20.93-16c3.38-2.91,6.7-5.9,9.9-9s6.28-6.62,9.27-10a230,230,0,0,0,16.39-20.92q3.75-5.43,7.15-11.09c2.37-4,4.43-8,6.5-12.16s4.11-8.36,5.77-12.71a82.94,82.94,0,0,1,24.25,23,109.5,109.5,0,0,1,15.38,31.06,122.88,122.88,0,0,1,4.14,20.06,284.43,284.43,0,0,0,7.21-43.23,269.41,269.41,0,0,0,.27-43.88,287.54,287.54,0,0,0-6.4-42A280.22,280.22,0,0,0,622,426.56a289.24,289.24,0,0,0-16.54-35.64q-1.17-2.14-2.38-4.26a77.53,77.53,0,0,1,38.66,3c3.3,1.13,6.45,2.61,9.69,3.89q4.19,1.66,8.22,3.69a98.47,98.47,0,0,1,15,9.33,109.89,109.89,0,0,1,14.9,13.65,264,264,0,0,0-42.68-71.05A317.6,317.6,0,0,0,617.78,319a272.39,272.39,0,0,0-32.26-25.29,283.2,283.2,0,0,0-36.44-20.6q-2.35-1.11-4.71-2.18a80.08,80.08,0,0,1,28.88-18.83,101,101,0,0,1,38.38-6.9A117.66,117.66,0,0,1,635.1,248a287.58,287.58,0,0,0-36.42-19.35A281.46,281.46,0,0,0,560.44,215a268.31,268.31,0,0,0-41.1-8.09,275,275,0,0,0-43.3-1.63q-10.69.45-21.33,1.76a203.4,203.4,0,0,0-21.34,3.54c-1.78.41-3.55.83-5.34,1.19,1.27-12.35,6.22-23.88,13.36-34a116.83,116.83,0,0,1,27-27.42,114,114,0,0,1,18.32-10.63,297.4,297.4,0,0,0-42.5,6.29,276.79,276.79,0,0,0-41.43,12.76,273.15,273.15,0,0,0-37.73,18.56,291.06,291.06,0,0,0-33,22.53,272.08,272.08,0,0,0-29.66,27.23q-1.78,1.9-3.53,3.83a69.76,69.76,0,0,1-9.13-32.76,120,120,0,0,1,1.09-19.25A114.6,114.6,0,0,1,295,159.8a170.47,170.47,0,0,1,8.65-22.21,317.43,317.43,0,0,0-29.18,30,300.8,300.8,0,0,0-24.16,32.68q-5.42,8.48-10.26,17.3c-3.48,6.35-6.94,12.72-10.08,19.25a250.21,250.21,0,0,0-23.44,81.55q-.29,2.65-.54,5.3"/>
        <path
            d="M400,0C179.09,0,0,179.09,0,400S179.09,800,400,800,800,620.91,800,400,620.91,0,400,0Zm0,760C201.18,760,40,598.82,40,400S201.18,40,400,40,760,201.18,760,400,598.82,760,400,760Z"/>
      </svg>
    </a>
  </div>
</template>

<style lang="scss">

</style>

