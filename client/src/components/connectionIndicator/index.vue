<template>
  <Indicator v-bind:style="style" />
</template>

<script>
import styled from "vue-styled-components";
import store from "@/store";

const Indicator = styled.div`
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
`;

export default {
  name: "connection-indicator",
  components: {
    Indicator
  },
  props: {
    isConnected: { type: Boolean, default: false }
  },
  computed: {
    style() {
      return `background-color: ${
        this.isConnected ? "#25ff8bBF" : "#ff3e25BF"
      }`;
    }
  }
};
</script>
