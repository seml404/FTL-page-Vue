<template>
  <div class="container">
    <app-pop-up :visible="popUpVisible" :contentText="popUpAlert"></app-pop-up>
    <form action="#" class="main-form">
      <header class="header">
        <h1 class="main-title">FTL: Прямая машина</h1>
      </header>
      <section class="form-section">
        <app-section-heading :section-Name="section[0]"></app-section-heading>
        <app-input
          :typeName="type.input1"
          v-model="submitted.from"
          @submitted="resolveForm"
        ></app-input>
        <app-input
          :typeName="type.input2"
          v-model="submitted.to"
          @submitted="resolveForm"
        ></app-input>
      </section>
      <section class="form-section">
        <app-section-heading :section-Name="section[1]"></app-section-heading>
        <div class="section__half">
          <app-dropdown
            :typeName="type.select1"
            @choosen="choosenValue"
          ></app-dropdown>
          <app-dropdown
            :typeName="type.select2"
            @choosen="choosenValue"
          ></app-dropdown>
        </div>
      </section>
      <section class="form-section">
        <app-section-heading :section-Name="section[2]"></app-section-heading>
        <app-dropdown
          :typeName="type.select3"
          @choosen="choosenValue"
        ></app-dropdown>
        <div class="section__half">
          <app-dropdown :typeName="type.select4"></app-dropdown>
          <app-input
            :typeName="type.input3"
            v-model="submitted.declaredValue"
            @submitted="resolveForm"
          ></app-input>
        </div>
        <app-check-box
          :typeName="type.input4"
          @choosen="requestedTemperature"
        ></app-check-box>
        <div class="section__half">
          <app-temperature
            :typeName="type.input6"
            :visibility="needTemperature"
            v-model="notNecessary.lowTemperature"
            @submitted="resolveForm"
          ></app-temperature>
          <app-temperature
            :typeName="type.input7"
            :visibility="needTemperature"
            v-model="notNecessary.highTemperature"
            @submitted="resolveForm"
          ></app-temperature>
        </div>
      </section>
      <section class="form-section">
        <app-section-heading :section-Name="section[3]"></app-section-heading>
        <div class="time-text">
          <p class="input-name">Когда прибыть на точку</p>
          <p class="input-name input-time">700 км в день</p>
        </div>
        <div class="addresses">
          <app-destination v-model="notNecessary.points[0]"></app-destination>
          <app-destination v-model="notNecessary.points[1]"></app-destination>
        </div>
        <app-comments
          v-model="notNecessary.comments"
          :typeName="type.input5"
        ></app-comments>
      </section>
    </form>
  </div>
</template>

<script>
import Methods from "./methods";
import Params from "./params";
import AppInput from "./components/AppInput.vue";
import AppDropdown from "./components/AppDropdown";
import AppCheckBox from "./components/AppCheckBox.vue";
import AppSectionHeading from "./components/AppSectionHeading.vue";
import AppDestination from "./components/AppDestination.vue";
import AppComments from "./components/AppComments.vue";
import AppPopUp from "./components/AppPopUp.vue";
import AppTemperature from "./components/AppTemperature.vue";
export default {
  components: {
    AppDropdown,
    AppInput,
    AppCheckBox,
    AppSectionHeading,
    AppDestination,
    AppComments,
    AppPopUp,
    AppTemperature,
  },
  data() {
    return Params;
  },
  methods: Methods,
};
</script>

<style></style>
