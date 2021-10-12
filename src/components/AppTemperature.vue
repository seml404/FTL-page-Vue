<template>
  <div class="temperature-wrapper" v-if="visibility">
    <div class="input-section input-section-small">
      <p class="input-name">{{ typeName.title }}</p>
      <input
        class="input"
        :class="typeName.class"
        :value="modelValue"
        @input="change"
        @keyup.enter="this.$emit('submitted')"
      />
    </div>
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
.temperature-wrapper {
  padding-top: 16px;
}

.input-section-small {
  flex: 0 1 172px;
}
</style>
