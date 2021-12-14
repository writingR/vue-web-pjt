<template>
  <div>
    <div class="form-container">
      <PostAddForm></PostAddForm>
    </div>
  </div>
</template>

<script>
import PostAddForm from '@/components/posts/PostAddForm';

export default {
  name: 'PostAddPage',
  components: { PostAddForm },
};
</script>

<style scoped>

</style>