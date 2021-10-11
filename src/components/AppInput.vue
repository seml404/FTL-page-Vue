<template>
  <div classs="input-section">
    <p class="input-name">{{ typeName.title }}</p>
    <input
      :class="typeName.class"
      :placeholder="choosenValue"
      :value="modelValue"
      @input="change"
      v-on:keyup.enter="this.$emit('submitted')"
    />
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue", "submitted"],
  data() {
    return {
      choosenValue: this.typeName.defaultValue,
    };
  },
  methods: {
    change(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  props: ["typeName", "modelValue"],
};
</script>

<style>
.input-section {
  margin-bottom: 16px;
}
</style>
