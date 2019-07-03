<template>
  <div>
    <color-picker
      :value="color"
      @input="setThemeColor($event.hex)"
      :disableAlpha="true"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Chrome } from "vue-color";

export default {
  name: "theme-picker",
  components: {
    "color-picker": Chrome
  },
  computed: {
    ...mapGetters({
      color: "theme/primary"
    })
  },
  methods: {
    ...mapMutations({
      setThemeColor: "theme/setThemeColor"
    })
  }
};
</script>

<style></style>
