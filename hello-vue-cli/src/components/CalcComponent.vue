<template>
  <div>
    <!-- Калькулятор -->
    <div class="calc">
        <input class="input" type="text" v-model="result">
        <button @click="$event => addButton(num)" v-for="num in nums" :key="num.id">{{ num }}</button>
        <button @click="$event => addButton(tab)" v-for="tab in tabs" :key="tab.id">{{ tab }}</button>
        <button @click="culcResult">=</button>
        <button class="reset" @click="reset">C</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcComponent',

  data() {
    return {
        nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        tabs: ['-', '+', '*', '/'],
        result: '',
    };
  },
  methods: {
    addButton (char) {
        this.result = this.result.toString(); //иначе суммировал при нажатии других цифр, а по факту просто цифры добавляются
        this.result += char;
    },
    culcResult () {
        this.result = eval(this.result);
    },
    reset () {
        this.result = '';
    }
    },
};
</script>

<style lang="css" scoped>
.calc {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    justify-content: center;
    padding-top: 48px;
    padding-bottom: 48px;
}

.input {
    grid-column: 1 / -1;
    text-align: right;
}

.reset {
    grid-column: 1 / -1;
}
</style>