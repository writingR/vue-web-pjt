<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
    <button type="reset">취소</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      console.log('로그인');
      const userData = {
        username: this.username,
        password: this.password,
      };
      const response = await loginUser(userData);
      // console.log(response);
      this.logMessage = `${response.data.user.username}님이 로그인했습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>
