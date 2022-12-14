<template>
  <main>
    <article class="prose p-16 max-w-3xl m-auto">
      <ContentDoc />
      <section>
        <form class="flex flex-col space-y-2 mb-4">
          <label
            for="search-blogs"
            class
          >Search blogs</label>
          <input
            id="search-blogs"
            v-model="searchQuery"
            class="px-3 py-2 shadow border border-gray-200"
            type="text"
          />
        </form>
        <div v-for="article, index in articles">
           <div :key="index" :id="`result-${index}`">
            <h3>{{article.title}}</h3>
            </div>
        </div>
      </section>
    </article>

  </main>
</template>

<script>
export default {
    data() {
      return {
        searchQuery: '',
        articles: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = []
          return
        }
        this.articles = await queryContent('posts').where({ title: { $eq: searchQuery } }).find()
      }
    }
  }
</script>

