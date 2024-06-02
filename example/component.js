new Vue({
    el: '#app',
    data: {
        articles: [
            {
                id: 1,
                title: 'Low Cost Latest Invented Interior Designing Ideas',
                text: `
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpis dignissim maximus.posuere in.Contrary to popular
                            belief.
                    `,
                image: 'img/blog/01.jpg',
                tag: 'tag1'
            },
            { id: 2, title: 'Article 2', text: 'Consectetur adipiscing elit', image: 'img/blog/01.jpg', tag: 'tag2' },
            { id: 3, title: 'Article 3', text: 'Sed do eiusmod tempor incididunt', image: 'img/blog/01.jpg', tag: 'tag3' }
        ],
        tags: ['tag1', 'tag2', 'tag3'],
        selectedTag: null,
        currentTag: null
    },
    computed: {
        filteredArticles() {
            if (this.selectedTag) {
                return this.articles.filter(article => article.tag === this.selectedTag);
            } else {
                return this.articles;
            }
        },
        sortedArticles() {
            if (this.currentTag) {
                return this.articles.filter(article => article.tag === this.currentTag)
                    .concat(this.articles.filter(article => article.tag !== this.currentTag));
            }
            return this.articles;
        }
    },
    methods: {
        filterArticles(tag) {
            if (this.selectedTag === tag) {
                this.selectedTag = null;
            } else {
                this.selectedTag = tag;
            }
        },
        sortByTag(tag) {
            this.currentTag = tag;
        }
    }
});