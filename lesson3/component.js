
const compItem = {
    name: 'comp-item',
    template: `<p>item info</p>`
}

Vue.component('new-component', {
    // props: ['title', 'counter'],
    props: ['title'],
    data() {
        return {
            // title: 'Title',
            counter: 0,
        }
    },

    components: {
        'comp': compItem,
    },

    methods: {
        increase(step) {
            this.counter += step;
        }
    },

    template:
        //     `
        // <div>
        //     <h3>{{title}}</h3>
        //     <p>Новый шаблон для vue</p>
        // </div>
        // `
        //     `
        // <div>
        //     <h3>{{title}}</h3>
        //     <p>counter click {{counter}}</p>
        //     <button @click="$parent.counter++">+1</button>
        // </div>
        // `
        `
    <div>
        <h3>{{title}}</h3>
        <comp></comp>
        <p>counter click {{counter}}</p>
        <button @click="increase (2)">+2</button>
    </div>
    `
});

// Vue.component('standart-component', {
//     // el: '#app',  это в компонент не вставляем
//     // data: { //data c return
//     data() {
//         return {
//             message: 'text message',
//         }
//     },
//     methods: {
//         showText() {
//             this.message = 'Кнопку нажал, молодец!'
//         },
//     },
//     computed: {
//         newComponent() {
//             return (
//                 this.message
//             );
//         },
//     },
//     template:
//         // '<h2>Стандартный компонент standart-template</h2>'
//         `
//         <div>
//             <h2>Стандартный компонент standart-template</h2>
//             <p>Стандартный компонент для vue</p>
//         </div>
//     `

// });

Vue.component('change-one', {
    template:
        `
        <div>
            <h2>Info change component</h2>
            <p>Новый текстовый блок</p>
        </div>
    `,
});

Vue.component('change-two', {
    template:
        `
        <div>
            <h2>2 change component</h2>
            <p>Другой текстовый блок</p>
        </div>   
    `,
});

Vue.component('change-three', {
    template:
        `<ul>
            <li>List item info 1 </li>
            <li>List item info 2 </li>
            <li>List item info 3 </li>
        </ul> 
    `,
});
//работает только последний, потому что элементы нужно помещать в div
