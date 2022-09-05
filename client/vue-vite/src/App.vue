<!-- == SCRIPT ============================================================= -->

<script setup lang="ts"></script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <router-view />
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss">
@import '@/scss/palette.scss';
@import '@/scss/colors.scss';

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

body {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $c-text;
  background-color: $c-background;
  transition: color 0.5s, background-color 0.5s;
}
</style>
