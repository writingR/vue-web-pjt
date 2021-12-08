<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">pw: </label>
        <input type="text" id="password" v-model="password" />
      </div>
      <div>
        <label for="nickname">nicname: </label>
        <input type="text" id="nickname" v-model="nickname" />
      </div>
      <button type="submit">회원가입</button>
      <button type="reset">취소</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    };
  },
  methods: {
    submitForm() {
      console.log('submit');
    },
  },
};
</script>
