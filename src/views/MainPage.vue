<template>
  <div>
    <h1 class="page-header">메인페이지</h1>
    <MainForm></MainForm>
  </div>
</template>

<script>
import MainForm from '@/components/MainForm';

export default {
  name: 'MainPage',
  components: { MainForm },
};
</script>
