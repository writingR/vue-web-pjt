<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <ion-icon class="icon" style="color: #000; font-size: 18px" name="create" @click="createItem"></ion-icon>
      <ion-icon class="icon" style="color: #000; font-size: 18px" name="trash" @click="deleteItem"></ion-icon>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    createItem() {
      this.$router.push('/add');
    },
    deleteItem() {
      console.log('delete');
    },
  }
};
</script>

<style></style>