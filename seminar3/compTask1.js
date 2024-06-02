//счётчик 2
"use strict";

Vue.component("counter", {
    template:
        `
        <div>
        <p>{{counter}}</p>
        <button @click="counterIncrease">+</button>
        <button @click="counterDecrease">-</button>
        </div>   
    `,
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        // counterIncrease(step) {  //это с шагом
        //     this.counter += step;
        // },
        counterIncrease() {  //это с шагом
            this.counter++;
        },
        counterDecrease() {  //это с шагом
            this.counter--;
        },
    },
});


new Vue({
    el: '#app',
    data: {
    }
})