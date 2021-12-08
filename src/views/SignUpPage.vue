<template>
  <div>
    <h1>회원가입</h1>
    <SignUpForm></SignUpForm>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm';

export default {
  name: 'SignUpPage',
  components: { SignUpForm },
};
</script>
