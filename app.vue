<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
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
      </nav>
    </header>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>
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
</style>
