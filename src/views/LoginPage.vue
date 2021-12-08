<template>
  <div>
    <h1>로그인</h1>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LgoinForm';

export default {
  name: 'LoginPage',
  components: { LoginForm },
};
</script>
