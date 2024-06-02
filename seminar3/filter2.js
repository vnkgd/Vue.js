<template>
    <div>
        <div>
            <button @click="filterArticles('tag1')">Tag 1</button>
        <button @click="filterArticles('tag2')">Tag 2</button>
    <button @click="filterArticles('tag3')">Tag 3</button>
    </div >

    <div v-for="article in filteredArticles" : key="article.title">
        <h3>{{ article.title }}</h3>
        <p>{{ article.text }}</p>
        <p>Tag: {{ article.tag }}</p>
    </div>
  </div >
</template >

    <script>
        export default {
            data() {
    return {
            articles: [
        {title: 'Article 1', text: 'Text for Article 1', tag: 'tag1' },
        {title: 'Article 2', text: 'Text for Article 2', tag: 'tag2' },
        {title: 'Article 3', text: 'Text for Article 3', tag: 'tag3' }
        ],
        selectedTag: null
    };
  },
        computed: {
            filteredArticles() {
      if (this.selectedTag) {
        return this.articles.filter(article => article.tag === this.selectedTag);
      } else {
        return this.articles;
      }
    }
  },
        methods: {
            filterArticles(tag) {
            this.selectedTag = tag;
    }
  }
};
    </script>