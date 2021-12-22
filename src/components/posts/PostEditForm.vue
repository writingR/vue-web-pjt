<template>
  <div class="contents">
    <h1 class="page-header">글수정</h1>
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" v-model="title">
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" v-model="contents" rows="5"></textarea>
          <p class="validation-text warning" v-if="!isContentsValid">해당 내용에 길이는 200자 이하만 가능합니다.</p>
        </div>
        <button type="submit" class="btn">수정</button>
        <button type="reset" class="btn" style="margin-left: 5px" v-on:click="mainPageMove">홈</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost, updatePost } from '@/api/posts';

export default {
  name: 'PostEditForm',
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
    // console.log(data);
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 220;
    },
  },
  methods: {
    async submitForm() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents
        };
        console.log(postData);
        const id = this.$route.params.id;
        console.log(id);
        await updatePost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.logMessage = '정상적으로 글이 수정되었습니다.';
        this.$router.push('/main');
      } catch (e) {
        console.log(e);
        this.logMessage = '수정할 수 없습니다.';
      }
    },
    mainPageMove() {
      this.$router.push('/main');
    }
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: #fff;
}
</style>