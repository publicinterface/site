<template>
  <main>
    <article class="prose p-16 max-w-3xl m-auto">
      Projects Page
      <ul>
        <li v-for="project in data">
          {{project.title}}<br>
          {{project.description}}<br>
          {{project.img}}<br>
          <NuxtLink :to="project._path">{{project.title}}</NuxtLink>
          <br><br>
        </li>
      </ul>
    </article>
  </main>
</template>
<script setup>
  const { data } = await useAsyncData('projects', () => queryContent('/projects').where({ featured: true }).only(['title','description','featured','img','_path']).find())
  // const { data } = await useAsyncData('projects', () => queryContent('/projects').find())
</script>

