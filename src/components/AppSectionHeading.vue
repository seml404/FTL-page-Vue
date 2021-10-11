<template>
  <div class="section-title">
    <div class="section__number">{{ sectionName.number }}</div>
    <h2 class="section__name">{{ sectionName.title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["sectionName"],
};
</script>

<style></style>
