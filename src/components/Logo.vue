<template>
  <div class="logo">
    健康书院平台
  </div>
</template>
<script>
export default {
  name: "logo",
  props: {
    isTransparent: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.logo {
  font-size: 25px;
  font-weight: 600;
}
</style>
