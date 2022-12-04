<template>
  <header id="header">
    <div class="container-fluid">
      <div class="l">
        <NuxtLink to="/" @click='menuOpen = false'>Public Interface</NuxtLink>
      </div>
      <div class="c">
        <div class="anchor">{{menuOpen}}</div>
      </div>
      <div class="r">
        <a href="#" class="toggle" @click="menuOpen = !menuOpen"></a>
      </div>
    </div>
  </header>
</template>
<script setup>
  const menuOpen = useState('menuOpen', () => false)
</script>
<style>
#header {
  position: fixed;
  top: 0;
  width: 100%;
  display: block;
  z-index: 900;
}

.container-fluid {
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
}

.toggle {
  width: 24px;
  height: 24px;
  display: block;
  background: green;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.l {
  flex: 1; /* shorthand for: flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.c {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.r {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>