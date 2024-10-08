<script lang="ts" setup>
import {ref, type Ref} from "vue";

const emoji: Ref = ref("");

const emojis: Array<string> = [
  "🎹",
  "🍕",
  "🤖",
  "🍣",
  "🐶",
  "🌭",
  "🕹",
  "🏍",
  "🌮",
  "🦕",
  "🍺",
  "🎵",
  "💰",
  "🎃",
  "⛺",
  "🍔"
];

const setEmoji = ()=>{
  emoji.value = emojis[Math.floor(Math.random() * emojis.length)];
}

setInterval(setEmoji, 2500);
setEmoji();

</script>

<template>
  <main id="home"
        class="main">
    <div class="main__content">
      <h1>Killian Louis Grant</h1>

      <section>
        <h3>Who I am</h3>
        <ul>
          <li>Husband and father</li>
          <li>Based out of Denver, Colorado, USA</li>
          <li>Loves
            <span class="emoji">{{ emoji }}</span>
          </li>
        </ul>
      </section>

      <section>
        <h3>What I do</h3>
        <ul>
          <li>Engineering Leadership</li>
          <li>Full-Stack Engineering</li>
          <li>UX/UI Design</li>
        </ul>

        <a download href="https://docs.google.com/document/d/1BY0XK_BWa9bADw-Ao3kFedLsXGs2rcny2AYamFkEl-A/export?format=pdf">Download my
          resume here</a>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
:root {
  --color--background: var(--off-white);
  --position--body: relative;
  --position--footer: relative;
  --position--header: relative;
  --color--primary: var(--green);
  --color--text: var(--grey);
}
</style>