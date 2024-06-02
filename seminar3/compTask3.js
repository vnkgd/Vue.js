Vue.component("to-do-list", {
    template: `
    <div>
        <input type="text" placeholder="Добавить элемент" v-model="toDoName">
        <button @click="addToDoItem">Добавить</button>
        <ul>
            <li v-for="(item, index) in filteredList" :key="index">{{item}}<button @click="delToDoItem(index)">Удалить</button></li>
        </ul>
        <input type="text" placeholder="Фильтр" v-model="filterText">
    </div>
    `,
    data() {
        return {
            toDoList: ["list 1", "list 2", "list 3"],
            toDoName: "",
            filterText: "",
        }
    },
    methods: {
        addToDoItem() {
            this.toDoList.push(this.toDoName);
            this.toDoName = "";
        },
        delToDoItem(index) {
            this.toDoList.splice(index, 1); //отрезаем от массива один элемент, удаляем
        },
    },
    computed: {
        filteredList() {
            if (this.filterText) {  //есть this.filterText есть, не пустой
                return this.toDoList.filter((item) => item.includes(this.filterText));
            }
            else {
                return this.toDoList;
            }

        },
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