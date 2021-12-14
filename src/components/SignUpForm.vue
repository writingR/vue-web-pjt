<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input type="text" id="username" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username || username == ''">
              이메일을 입력해주세요.
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw: </label>
          <input type="text" id="password" v-model="password" />
          <p class="validation-text">
            <span class="warning" v-if="!password">
              비밀번호를 입력해주세요.
            </span>
          </p>
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input type="text" id="nickname" v-model="nickname" />
          <p class="validation-text">
            <span class="warning" v-if="!nickname">
              닉네임을 입력해주세요.
            </span>
          </p>
        </div>
        <button v-bind:disabled="!isUsernameValid || !password || !nickname" type="submit" class="btn">
          회원가입
        </button>
        <button type="reset" class="btn">취소</button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
  name: 'SignUpForm',
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      console.log('submit');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const response = await registerUser(userData);
      console.log(response.data.username);
      this.logMessage = `${response.data.username}님이 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
};
</script>
