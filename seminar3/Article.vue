<template>
    <div class="article">
        <h2>{{ title }}</h2>
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        text: String
    }
}
</script>