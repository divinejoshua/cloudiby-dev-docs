<template>
  <v-app>
    <v-main id="size" class="LayoutDefault">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
   #size {
      padding-left: 0px !important;
      padding-right: 0px !important;
      padding-top: 0px !important;
      padding-bottom: 0px !important;
   }
</style>
