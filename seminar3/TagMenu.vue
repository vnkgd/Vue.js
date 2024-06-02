<template>
    <ul class="tag-menu">
        <li v-for="(tag, index) in tags" :key="index" @click="selectTag(tag)">
            {{ tag }}
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            selectedTag: null
        }
    },
    methods: {
        selectTag(tag) {
            this.selectedTag = tag
        }
    }
}
</script>