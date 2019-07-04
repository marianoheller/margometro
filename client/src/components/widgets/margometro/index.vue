<template>
  <widget-layout>
    <div class="gauge" />
  </widget-layout>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import reduce from 'lodash/reduce';
import store from "@/store";
import WidgetLayout from "@/components/layout/widget.vue";
import { createChart, capValue } from "./utils";

const themeGettersMapper = keys => (
  reduce(keys, (acc, k) => ({
    ...acc,
    [k]: store.getters[`theme/${k}`]
  }), {})
);

let handler;

export default {
  name: "Gauge",
  components: {
    "widget-layout": WidgetLayout
  },
  props: {
    value: { type: Number, default: 0 }
  },
  mounted() {
    handler = createChart("gauge", themeGettersMapper([
      'fontPrimary'
    ]));
  },
  watch: {
    value() {
      const { label, hand } = handler;
      const value = capValue(0, 100)(this.value);
      label.text = value.toFixed(2) + "%";
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
.gauge {
  width: 100%;
  height: 100%;
  max-height: 20rem;
}
</style>
