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
  "🦕"
];

emoji.value = emojis[Math.floor(Math.random() * emojis.length)];

</script>

<template>
  <main id="home"
        class="main">
    <div class="main__content">
      <h1>Killian <span class="hide-for-mobile">Louis</span> Grant</h1>

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

        <a download href="/Killian%20Louis%20Grant%20-%20Qualifications%20Summary%20-%20Sep%202024.pdf">Download my
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