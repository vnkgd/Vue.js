<template>
    <TagMenu />
    <article v-if="selectedTag === 'Vue'" title="Введение в Vue.js"
        text="Vue.js — это JavaScript-фреймворк для создания пользовательских интерфейсов." />
    <Article v-else-if="selectedTag === 'React'" title="Сравнение Vue и React"
        text="В статье сравниваются два популярных фреймворка для разработки веб-приложений." />
<Article
      v-else
      title="Основы JavaScript"
      text="Статья о базовых концепциях языка
      />