<template>
  <Container>
    <theme-picker />
  </Container>
</template>

<script>
import styled from "vue-styled-components";
import ThemePicker from "./themePicker";

const Container = styled.div`
  width: 100%;
  height: 2rem;
  box-shadow: rgba(255, 255, 255, 0.08) 0px 1px 0px 0px;
`;

export default {
  name: "TopBar",
  components: {
    Container,
    "theme-picker": ThemePicker
  }
};
</script>
