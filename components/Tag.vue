<template>
    <a href="#"
      class="px-3 py-1 border rounded-full text-xs uppercase font-semibold"
      :class="newClass"
        style="font-size: 10px">{{ tag }}</a>

        <!-- <a href="#"
        class="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
        style="font-size: 10px">Updates</a> -->
</template>

<script>
export default {

  mounted() {
this.newClasses()
  },
props: ['tag'],

data() {
  return {
    newClass: ''
  }

},
methods: {
  newClasses () {
    if (this.tag == 'Updates') {
      this.newClass = "border-red-300 text-red-300"
    }
     if (this.tag == 'Techniques') {
      this.newClass = "border-blue-300 text-blue-300"
    }

  }
}

}

</script>

<style>

</style>
