<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div
      id="overlayNav"
      class="overlay"
      :class="{ opened: menuOpen }"
    >
      <div class="overlay-content">
        <ul @click='menuOpen = !menuOpen'>
          <li>
            <NuxtLink to="/" @click="black = !black">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/posts/01">Post 01</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/posts/02">Post 02</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
  const black = useState('black');
  const menuOpen = useState("menuOpen");
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
/* overlay nav */
.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  right: -100%;
  top: 0;
  background-color: #052897;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: 0.5s;
}

.overlay.opened {
  width: 100%;
  right: 0;
}

.overlay-content {
  position: relative;
  margin-top: 10rem;
  width: 100%;
  text-align: center;
}

.overlay ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #fff;
  display: block;
  transition: 0.3s;
  text-transform: uppercase;
}
</style>
