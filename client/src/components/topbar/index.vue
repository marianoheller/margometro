<template>
  <Container>
    <ElemWrapper>
      <theme-picker />
    </ElemWrapper>
    <ElemWrapper>
      <connection-indicator v-bind:isConnected="isConnected" />
    </ElemWrapper>
  </Container>
</template>

<script>
import styled from "vue-styled-components";
import ThemePicker from "./themePicker";
import ConnectionIndicator from "../connectionIndicator";

const Container = styled.div`
  width: 100%;
  height: 2rem;
  box-shadow: rgba(255, 255, 255, 0.08) 0px 1px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ElemWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

export default {
  name: "TopBar",
  components: {
    Container,
    ElemWrapper,
    ConnectionIndicator,
    "theme-picker": ThemePicker
  },
  data() {
    return {
      isConnected: false
    };
  },
  sockets: {
    connect() {
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
    },
    weather(data) {
      return data;
    },
    measure(data) {
      this.socketMessage = data;
    }
  }
};
</script>
