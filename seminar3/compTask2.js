Vue.component("to-do-list", {
    template: `
    <div>
        <input type="text" placeholder="Добавить элемент" v-model="toDoName">
        <button @click="addToDoItem">Добавить</button>
        <ul>
            <li v-for="(item, index) in toDoList" :key="index">{{item}}<button @click="delToDoItem(index)">Удалить</button></li>
        </ul>
    </div>
    `,
    data() {
        return {
            toDoList: ["Первый элемент", "Второй элемент", "Третий элемент"],
            toDoName: "",
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
});


new Vue({
    el: '#app',
    data: {
    }
})


// Cannot find element: #app
// означает, что не стоит defer в прикреплении скрипта