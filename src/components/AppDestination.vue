<template>
  <div class="addresses__item" v-if="!choosen" @click="choosen = true">
    <div class="address__part">
      <div class="addresses__symbol">
        <div class="addresses__small"></div>
      </div>
      <p class="addresses__text">Адрес не указан</p>
    </div>
    <div class="address__part address__part_button">
      <div class="addresses__button" @click.prevent="choosen = true">
        <a href="#" class="addresses__choose">Не выбрано</a>
      </div>
    </div>
  </div>
  <input
    type="text"
    class="input address-input"
    v-if="choosen"
    v-model="pointChoosen"
    @mouseout="checkChoosen"
  />
</template>

<script>
export default {
  data() {
    return {
      pointChoosen: "",
      choosen: false,
    };
  },
  methods: {
    checkChoosen() {
      if (!this.pointChoosen) {
        this.choosen = false;
      }
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  margin-bottom: 4px;
}
</style>
