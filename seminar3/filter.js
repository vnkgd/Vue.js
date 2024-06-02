Vue.component("to-do-list", {
    // props: {
    //     title: String,
    //     text: String
    // },
    template: `
    <div>
        <div>
        <button @click="filterArticles('tag1')">Tag 1</button>
    <button @click="filterArticles('tag2')">Tag 2</button>
<button click="filterArticles('tag3')">Tag 3</button>
</div >
<div v-for="article in filteredArticles" :key="article.title">
    <h3>{{ article.title }}</h3>
    <p>{{ article.text }}</p>
    <p>Tag {{ article.tag }}</p>
</div>
    </div>
    `,
    data() {
        return {
            // toDoList: ["list 1", "list 2", "list 3"],
            // toDoName: "",
            // filterText: "",
            // selectedTag: null,
            articles: [
                { title: 'Article 1', text: 'Text for Article 1', tag: 'tag1' },
                { title: 'Article 2', text: 'Text for Article 2', tag: 'tag2' },
                { title: 'Article 3', text: 'Text for Article 3', tag: 'tag3' }
            ],
            selectedTag: null
        }
    },
    methods: {
        // addToDoItem() {
        //     this.toDoList.push(this.toDoName);
        //     this.toDoName = "";
        // },
        // delToDoItem(index) {
        //     this.toDoList.splice(index, 1); //отрезаем от массива один элемент, удаляем
        // },
        // selectTag(tag) {
        //     this.selectedTag = tag
        // }
        filterArticles(tag) {
            this.selectedTag = tag;
        }
    },
    computed: {
        // filteredList() {
        //     if (this.filterText) {  //есть this.filterText есть, не пустой
        //         return this.toDoList.filter((item) => item.includes(this.filterText));
        //     }
        //     else {
        //         return this.toDoList;
        //     }

        // },
        filteredArticles() {
            if (this.selectedTag) {
                return this.articles.filter(article => article.tag === this.selectedTag);
            } else {
                return this.articles;
            }
        }
    },
});


new Vue({
    el: '#app',
    data: {
    }
})


// Cannot find element: #app
// означает, что не стоит defer в прикреплении скрипта
// <script src="compTask3.js" defer></script>