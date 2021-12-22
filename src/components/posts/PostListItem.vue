<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt  | formatDate }}
      <ion-icon class="icon" style="color: #000; font-size: 18px" name="create" @click="routeItem"></ion-icon>
      <ion-icon class="icon" style="color: #000; font-size: 18px" name="trash" @click="deleteItem"></ion-icon>
    </div>
  </li>
</template>

<script>
import { deletePost, fetchPosts } from '../../api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  // filters: {
  //   formatData(value) {
  //     return new Date(value);
  //   }
  // },
  methods: {
    createItem() {
      this.$router.push('/add');
    },
    async deleteItem() {
      if(confirm('정말 삭제하시겠습니까?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
        fetchPosts();
        console.log('delete');
      }
    },
    routeItem() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
      // console.log('update');
    },
  }
};
</script>

<style></style>