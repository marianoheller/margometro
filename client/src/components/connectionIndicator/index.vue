<template>
  <Indicator v-bind:style="style" />
</template>

<script>
import styled from "vue-styled-components";

const Indicator = styled.div`
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;

export default {
  name: "ConnectionIndicator",
  components: {
    Indicator
  },
  props: {
    isConnected: { type: Boolean, default: false }
  },
  computed: {
    style() {
      return `background-color: ${this.isConnected ? "#25ff8b" : "#ff3e25"}`;
    }
  }
};
</script>
