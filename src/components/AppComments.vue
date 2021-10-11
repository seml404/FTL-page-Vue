<template>
  <div class="comments-wrapper">
    <p class="input-name">{{ typeName.title }}</p>
    <div class="comments-default" v-if="!switched" @click="switchOn">
      <p class="default-value">{{ typeName.defaultValue }}</p>
    </div>
    <input
      :comments="modelValue"
      v-if="switched"
      type="textarea"
      class="comments-input"
      @mouseout="switchOff"
      @input="change"
      v-model="comments"
    />
  </div>
</template>

<script>
export default {
  props: ["typeName", "modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      switched: false,
      comments: "",
    };
  },
  methods: {
    switchOn() {
      if (!this.comments) {
        this.switched = true;
      }
    },
    switchOff() {
      if (!this.comments) {
        this.switched = false;
      }
    },
    change(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
.comments-default {
  width: 100%;
  height: 80px;
  background: #fff;
  padding-top: 13px;
  padding-left: 14px;
  font-size: 15px;
  line-height: 18px;
  color: #cfcfcf;
}

.comments-input {
  width: 100%;
  height: 80px;
}
</style>
