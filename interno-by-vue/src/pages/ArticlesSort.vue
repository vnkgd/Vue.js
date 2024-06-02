<template>
  <div>
<section class="post">
        <div class="post__container">
            <h2 class="post__title">Sort Articles by Tags on Vue</h2>
            <br>
            <div class="articles__filters">
                <div id="tag-buttons">
                    <button v-for="tag in tags" @click="sortByTag(tag)" class="articles__filter" :key="tag.id">{{ tag }}</button>
                </div>
            </div>
            <div class="post__container">
                <div class="post__item item-post" v-for="article in sortedArticles" :key="article.id">
                    <div class="item-post__image">
                        <img :src="article.image" alt="Article Image">
                    <!-- <img :src="{{ article.image }}" alt=""> -->
                        <!-- <picture>
                            <source srcset="/img/main-about.06eed713.webp" type="image/webp"><img
                                src="/img/main-about.3c0098c0.jpg" alt="image" />
                        </picture> -->
                    </div>
                    <div class="item-post__content">
                        <h4 class="item-post__title">
                            {{ article.title }}
                        </h4>
                        <div class="item-post__text">
                            <p>
                                {{ article.text }}
                            </p>
                            <p>
                                Tag: {{ article.tag }}
                            </p>
                        </div>
                        <div class="item-post__bottom">
                            <div class="item-post__date">30 May, 2024</div>
                            <a href="#" class="item-post__button button_arrow arrow_small">
                                <img src="../img/icons/arrow-small.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
  </div>
</template>

<script>
export default {
  name: 'ArticlesSort',

  data () {
    return {
      articles: [
        {
          id: 1,
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          text: `
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                `,
          image: '/img/01.6ef104fe.jpg',
          tag: 'tag1'
        },
        { id: 2, title: 'Article 2', text: 'Consectetur adipiscing elit', image: '/img/02.c2d52ba6.jpg', tag: 'tag2' },
        { id: 3, title: 'Article 3', text: 'Sed do eiusmod tempor incididunt', image: '/img/03.2d7d3529.jpg', tag: 'tag3' }
      ],
      tags: ['tag1', 'tag2', 'tag3'],
      selectedTag: null,
      currentTag: null
    }
  },

  mounted () {

  },

  methods: {
    filterArticles (tag) {
      if (this.selectedTag === tag) {
        this.selectedTag = null
      } else {
        this.selectedTag = tag
      }
    },
    sortByTag (tag) {
      this.currentTag = tag
    }
  },

  computed: {
    filteredArticles () {
      if (this.selectedTag) {
        return this.articles.filter(article => article.tag === this.selectedTag)
      } else {
        return this.articles
      }
    },
    sortedArticles () {
      if (this.currentTag) {
        return this.articles.filter(article => article.tag === this.currentTag)
          .concat(this.articles.filter(article => article.tag !== this.currentTag))
      }
      return this.articles
    }
  }
}
</script>
