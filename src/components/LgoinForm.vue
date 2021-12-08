<template>
  <form>
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" name="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="password" id="password" name="password" />
    </div>
    <button type="submit">로그인</button>
    <button type="reset">취소</button>
  </form>
</template>

<script>
export default {
  name: 'LgoinForm',
};
</script>
