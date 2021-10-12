<template>
  <div class="select-section">
    <p class="input-name">{{ typeName.title }}</p>
    <div :class="typeName.class">
      <div class="select-top" @click="this.isOpen = !this.isOpen">
        <p
          :class="
            choosenValue === typeName.defaultValue
              ? 'select-default'
              : 'select-choosen'
          "
        >
          {{ choosenValue }}
        </p>
        <div :class="isOpen ? 'img-open' : 'img-close'">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/expand-arrow--v1.png"
          />
        </div>
      </div>
      <transition name="fade" appear>
        <div class="sub-select" v-if="isOpen" @mouseleave="this.isOpen = false">
          <div
            class="select-item"
            v-for="item in typeName.options"
            :key="item.id"
            @click="
              (this.choosenValue = item.optionName),
                (this.isOpen = false),
                this.$emit('choosen', {
                  title: typeName.title,
                  choosenValue: item.optionName,
                })
            "
          >
            {{ item.optionName }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      choosenValue: this.typeName.defaultValue,
    };
  },
  props: ["typeName"],
  methods: {},
};
</script>

<style>
.select-section {
  flex: 0 1 172px;
}

.select {
  transition: all 1s ease-out;
  position: relative;
  height: 44px;
  background-color: #ffffff;
  max-width: 356px;
}

.select-big {
  margin-bottom: 16px;
}

.select .select_small {
  max-width: 172px;
}

.select-default {
  color: #cfcfcf;
}

.select-top {
  display: flex;
  padding: 13px 19px 13px 13px;
  align-items: center;
  justify-content: space-between;
}

.select-top img {
  width: 15px;
}
.img-close {
  transition: all 0.5s ease-out;
}

.img-open {
  transform: rotateX(180deg);
}

.sub-select {
  z-index: 1;
  top: 44px;
  background-color: #ffff;
  position: absolute;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.select-item {
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #000000;
  font-size: 14px;
  line-height: 16.7px;
}
.select-item:hover {
  cursor: pointer;
  background-color: #ef483e;
  color: #ffffff;
}

.select-choosen {
  color: black;
}
</style>
