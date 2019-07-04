<template>
  <MainLayout>
    <TopBar />
    <MainLayoutUnder>
      <SideBar />
      <slot></slot>
    </MainLayoutUnder>
  </MainLayout>
</template>

<script>
import styled from "vue-styled-components";
import store from "@/store";
import TopBar from "@/components/topbar";
import SideBar from "@/components/sidebar";

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  color: ${() => store.getters["theme/fontPrimary"]};
  background-color: ${() => store.getters["theme/primary"]};
`;

const MainLayoutUnder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export default {
  name: "main-layout",
  components: {
    MainLayout,
    MainLayoutUnder,
    TopBar,
    SideBar
  }
};
</script>
