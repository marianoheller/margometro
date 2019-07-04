<template>
  <widget-container>
    <slot></slot>
  </widget-container>
</template>

<script>
import Vue from 'vue';
import styled from 'vue-styled-components';
import store from "@/store";

const WidgetContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid ${() => store.getters["theme/shadow"]}; */
  background-color: red;
`;

export default {
  name: "widget-layout",
  components: {
    // WidgetContainer: Vue.component('widget-container', WidgetContainer),
    'widget-container': WidgetContainer,
  },
};
