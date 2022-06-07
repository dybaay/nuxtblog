<template>

                <div class="flex flex-col">

                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                        <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="ml-4">
                                                        <a href="/post/">
                                                            <div class="text-sm font-medium text-gray-900">
                                                                Test <title></title>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>


                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="/admin/post/edit" class="text-blue-600 hover:text-blue-900">Edit</a>
                                            </td>

                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <form action="/admin/post/delete" method="post">

                                                    <input type="submit" class="text-red-600 bg-white cursor-pointer hover:text-red-900" value="Delete">
                                                </form>
                                            </td>
                                        </tr>

                                        <!-- More people... -->
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
