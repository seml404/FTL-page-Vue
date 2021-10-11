<template>
  <div v-if="visible" class="pop-up-wrapper">
    <p>{{ contentText }}</p>
  </div>
</template>

<script>
export default {
  props: ["visible", "contentText"],
};
</script>

<style>
.pop-up-wrapper {
  padding: 24px;
  max-width: 356px;
  height: 102px;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  background-color: #4b4b4f;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 50px;
  left: 100%;
}
</style>
