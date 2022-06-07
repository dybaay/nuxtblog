<template>
<div class="px-6 py-8">
  <Nav/>
    <section class="max-w-2xl mx-auto mb-5">
        <div class="flex justify-between">
            <aside class="mr-10">
                <a href="/admin/posts/create" class="hover:text-blue-600">New Post</a>
            </aside>
            <div class="border border-gray-200 p-10 rounded-xl flex-1">
                <!-- This example requires Tailwind CSS v2.0+ -->
               <DashboardPost/>
               <DashboardPost/>

            </div>
        </div>
    </section>
  <Footer/>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
