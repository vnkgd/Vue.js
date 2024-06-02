<template>
    <div>
        <h1>Hello Vue CLI</h1>
        <h1>{{text}}</h1>
    </div>
</template>

<script>
export default {
  name: 'NewComponent',
  props: {
    text: String
  }
}
</script>
