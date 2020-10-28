<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
      </div>
    </v-flex>
    <v-flex xs12 sm8 md6>
      <GForm />
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import GForm from "~/components/GForm.vue";
import axios from "axios";

export default {
  data() {
    return {
      sheetId: "1Hz0g11dEheYJabK7GJTZsBY7QqYDk59DKNDQjqaYIxM",
    };
  },
  components: {
    Logo,
    VuetifyLogo,
  },
  mounted() {
    axios
      .get(
        `https://script.google.com/d/1wvy5Kw-gR7zgixtSL_cCmEC3Bk-d4ujd--_IasVfecmw6xxIDXNWbJP1/edit?usp=sharing?url=https://spreadsheets.google.com/feeds/worksheets/${this.sheetId}/public/full?alt=json`
      )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  },
};
</script>
<style lang="scss">
.layout {
  background: rgb(245, 211, 216);
}
.container {
  padding: 0;
}
</style>
