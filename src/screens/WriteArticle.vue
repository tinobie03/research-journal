<template>
    <main>
        <Header />
        <div id="app" class="flex-col px-8 m-auto space-y-8 max-w-7xl">
            <span class="w-full text-3xl font-bold text-center">
                Write Your Article
            </span>
            <div class="w-full">
                <label for="search" class="text-lg">Research Name</label>
                <div class="relative">
                    <div
                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                    >
                        <SearchIcon
                            class="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                    <input
                        id="title"
                        name="title"
                        class="block w-full py-2 pl-10 pr-3 text-lg placeholder-gray-500 bg-white border-gray-300 rounded-md shadow-md border-1 focus:outline-none sm:text-lg"
                        placeholder="Write Title"
                        type="text"
                    />
                </div>
            </div>
            <label for="search" class="text-lg">Article</label>
            <ckeditor
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
            ></ckeditor>
        </div>
    </main>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                // The configuration of the editor.
            },
        }
    },
    components: { Header },
}
</script>

<style></style>
