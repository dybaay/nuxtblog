<template>
<div class="px-6 py-8">
  <Nav/>
  <Header/>
  <main class="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
  <FirstCard/>
   <div class="lg:grid lg:grid-cols-2">
  <SecondCard/>
  <SecondCard/>
   </div>
      <div class="lg:grid lg:grid-cols-3">
        <OtherCard/>
         <OtherCard/>
         <OtherCard/>
      </div>
  </main>
  <Footer/>
</div>

</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
