<template>
    <div>
        <div><img class="big" :src="currentImgUrl" alt=""></div>
        <div>
        <img class="mini" v-for="(img, index) in imgList" :key="index" :src="img.url" alt="" @click="imgSelectIndex(index)">
        </div>
    </div>

</template>

<script>
export default {
  name: 'GalleryComp',
  data () {
    return {
      currentImgIndex: 0,
      imgList: [
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFlZRp3r3Nnli62hRr0UkfBWOsNta4GX2Gg&usqp=CAU'
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOX3H1_o3bTBEjFJyEQMsif0nk-WqzgG5x8A&usqp=CAU'
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tv5nHHAz8tq5_zIgPfBxu3TqZkD6LZ6ycA&usqp=CAU'
        }
      ]
    }
  },
  computed: {
    currentImgUrl () {
      return this.imgList[this.currentImgIndex].url
    }
  },
  methods: {
    imgSelectIndex (i) {
      this.currentImgIndex = i
    }
  }
}
</script>

<style>
  .mini{
    width: 100px;
  }
  .big {
    width: 300px;
  }
</style>
