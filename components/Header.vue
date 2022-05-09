<template><div>
    <v-app-bar color="blue accent-2" dark height="55">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-title>Vuetify</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="white" text>Home</v-btn>
        <v-btn color="white" text >About</v-btn>
      </v-toolbar-items>
    </v-app-bar>
</div>
</template>
<script>
export default {

}
</script>