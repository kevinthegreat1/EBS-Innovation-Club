<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {},
  onMounted() {
    console.log("Prop mounted")
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css"
</style>
