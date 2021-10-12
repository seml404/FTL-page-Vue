export default {
  choosenValue(data) {
    for (let item of Object.keys(this.type)) {
      if (this.type[item].title === data.title) {
        this.type[item].choosenValue = data.choosenValue;
      }
    }
  },
  requestedTemperature(data) {
    console.log(data);
    this.needTemperature = data;
  },
  resolveForm() {
    ;

    console.log("worked");
    for (let item of Object.keys(this.type)) {
      if (!item.choosenValue) {
        this.formFilled = false;
      }
    }
    for (let item of Object.keys(this.submitted)) {
      if (!this.submitted[item]) {
        this.formFilled = false;
      }
    }
    if (!this.formFilled) {
      document.documentElement.clientWidth > 728 ? this.popUpVisibleDesktop = true : this.popUpVisibleMobile = true;
      setTimeout(() => {
        this.popUpVisibleDesktop = false;
        this.popUpVisibleMobile = false
      }, 3000);
    } else {
      location.reload();
    }
  },
};