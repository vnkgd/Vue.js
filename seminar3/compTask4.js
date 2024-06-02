Vue.component("product", {
    props: {},
    template: `
    <div>
        <ul>
            <li v-for="item in sortedList" :key="item.id">
                {{item.productName}}, {{item.price}}
            </li>
        </ul>
        <button @click="sortDirection='up'">По возрастанию цены</button>
        <button @click="sortDirection='down'">По убыванию цены</button>
        <button @click="sortDirection=''">Сбросить</button>
    </div>
    `,
    data() {
        return {
            products: [
                {
                    id: 1,
                    productName: "Яблоко",
                    price: 15
                },
                {
                    id: 2,
                    productName: "Персик",
                    price: 35
                },
                {
                    id: 3,
                    productName: "Апельсин",
                    price: 20
                },
            ],
            sortDirection: "",
        }
    },
    methods: {
    },
    computed: {
        sortedList() {
            const sortedArrProducts = [...this.products];
            // [...this.products] создаём новый массив на основе текущего, чтобы основной массив не менялся, для соблюдения консистентности данных
            //если изменим массив, то к начальному уже не вернём.
            //сброс нам не поможет
            switch (this.sortDirection) {
                case "up":
                    return sortedArrProducts.sort((a, b) => a.price - b.price);
                case "down":
                    return sortedArrProducts.sort((a, b) => b.price - a.price)
                default:
                    return this.products;
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

// Unknown custom element: <product> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
// (found in <Root>)