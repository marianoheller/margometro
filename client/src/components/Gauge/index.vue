<template>
  <div id="gauge" />
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import { createChart, capValue } from "./utils";

let handler;

export default {
  name: "Gauge",
  props: {
    value: { type: Number, default: 0 }
  },
  mounted: () => {
    handler = createChart("gauge");
  },
  watch: {
    value() {
      const { label, hand } = handler;
      const value = capValue(0, 100)(this.value);
      label.text = value + "%";
      new am4core.Animation(
        hand,
        {
          property: "value",
          to: value
        },
        1000,
        am4core.ease.cubicOut
      ).start();
    }
  }
};
</script>

<style scoped>
#gauge {
  width: 100%;
  height: 100%;
  max-height: 20rem;
}
</style>
