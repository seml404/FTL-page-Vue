<template>
  <div class="checkbox__wrapper">
    <div
      :class="{ checkbox: true, 'checkbox-active': this.active }"
      @click="(this.active = !this.active), this.$emit('choosen', this.active)"
    >
      <div v-if="active">
        <div class="icons8-checkmark"></div>
      </div>
    </div>
    <p class="input-name input-name_checkbox">{{ typeName.title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  props: ["typeName"],
};
</script>

<style>
.checkbox__wrapper {
  display: flex;
  align-items: center;
  margin-top: 16px;
}

.checkbox {
  height: 24px;
  width: 24px;
  border: 2px solid #ffffff;
  margin-right: 12px;
}

.icons8-checkmark {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjAiIGhlaWdodD0iMjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSIjZWY0ODNlIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE1NC42ODgwMiwzNC4zNDQwMWMtMS40ODk1MSwwLjA0NDM4IC0yLjkwMzI0LDAuNjY2OSAtMy45NDE2NywxLjczNTY4bC04Ny42Nzk2OSw4Ny42Nzk2OWwtMzYuMDc5NjksLTM2LjA3OTY5Yy0xLjQzODAyLC0xLjQ5Nzc2IC0zLjU3MzM5LC0yLjEwMTEgLTUuNTgyNTgsLTEuNTc3MzJjLTIuMDA5MTksMC41MjM3OCAtMy41NzgyNCwyLjA5MjgzIC00LjEwMjAyLDQuMTAyMDJjLTAuNTIzNzgsMi4wMDkxOSAwLjA3OTU1LDQuMTQ0NTYgMS41NzczMSw1LjU4MjU4bDQwLjEzMzMzLDQwLjEzMzMzYzIuMjM5MDQsMi4yMzgxMSA1Ljg2ODI1LDIuMjM4MTEgOC4xMDcyOSwwbDkxLjczMzMzLC05MS43MzMzM2MxLjY5NTY5LC0xLjY0ODI4IDIuMjA1NTUsLTQuMTY4NTEgMS4yODM4OSwtNi4zNDYzYy0wLjkyMTY2LC0yLjE3Nzc5IC0zLjA4NTc2LC0zLjU2NjM4IC01LjQ0OTUxLC0zLjQ5NjY3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+")
    50% 50% no-repeat;
  background-size: 100%;
}

.checkbox-active {
  background-color: #ef483e;
}
</style>
