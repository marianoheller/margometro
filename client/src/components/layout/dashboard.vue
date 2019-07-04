<template>
  <DashboardContainer>
    <grid-layout
      :layout.sync="layout"
      :col-num="colNum"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <widget-container id="lalala">
          {{ item.i }}
        </widget-container>
      </grid-item>
    </grid-layout>
  </DashboardContainer>
</template>

<script>
import styled from "vue-styled-components";
import VueGridLayout from "vue-grid-layout";
import store from "@/store";

const COL_NUM = 3;
const testLayout = Array(6)
  .fill(0)
  .map((_, i) => ({
    i: i,
    x: i % COL_NUM,
    y: Math.floor(i / COL_NUM),
    w: 1,
    h: 1
  }));

const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const WidgetWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid ${() => store.getters["theme/shadow"]};
  background-color: ${() => store.getters["theme/primary"]};
`;

export default {
  name: "dashboard-layout",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    DashboardContainer,
    "widget-container": WidgetWrapper
  },
  data() {
    return {
      layout: testLayout,
      colNum: COL_NUM
    };
  }
};
</script>
