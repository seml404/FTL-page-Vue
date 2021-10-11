<template>
  <div class="input-section input-section-small" v-if="visibility">
    <p class="input-name">{{ typeName.title }}</p>
    <input
      class="input"
      :class="typeName.class"
      :value="modelValue"
      @input="change"
      @keyup.enter="this.$emit('submitted')"
    />
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue", "submitted"],

  methods: {
    change(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  props: ["typeName", "modelValue", "visibility"],
};
</script>

<style>
.input-section-small {
  flex: 0 1 172px;
}
</style>
