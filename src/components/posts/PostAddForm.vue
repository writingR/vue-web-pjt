<template>
  <div class="contents">
    <h1 class="page-header">글작성</h1>
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
        <button type="submit" class="btn">작성</button>
        <button type="reset" class="btn" style="margin-left: 5px" v-on:click="mainPageMove">홈</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/index';

export default {
  name: 'PostAddForm',
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
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
          contents: this.contents,
        }
        const response = await createPost(postData);
        console.log(response.data);
        this.logMessage = '정상적으로 글이 등록되었습니다.';
        //this.$router.push('/main');
      } catch (err) {
        // this.logMessage = '작성에 실패했습니다. 다시 확인해주세요.';
        this.logMessage = err.response.data.message;
        console.log(err.response.data.message);
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