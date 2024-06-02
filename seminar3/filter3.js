new Vue({
    el: '#app',
    data: {
        articles: [
            { id: 1, title: 'Article 1', text: 'Lorem ipsum dolor sit amet', image: 'https://placeimg.com/200/200/any', tag: 'tag1' },
            { id: 2, title: 'Article 2', text: 'Consectetur adipiscing elit', image: 'https://placeimg.com/200/200/any', tag: 'tag2' },
            { id: 3, title: 'Article 3', text: 'Sed do eiusmod tempor incididunt', image: 'https://placeimg.com/200/200/any', tag: 'tag3' }
        ],
        tags: ['tag1', 'tag2', 'tag3'],
        selectedTag: null
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
            if (this.selectedTag === tag) {
                this.selectedTag = null;
            } else {
                this.selectedTag = tag;
            }
        }
    }
});