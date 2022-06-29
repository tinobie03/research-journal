<template>
    <div class="flex flex-col h-full">
        <Header />
        <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
            <span
                class="w-full px-4 mx-auto mt-6 mb-8 text-3xl font-bold max-w-7xl sm:px-6 lg:px-8"
            >
                My Articles
            </span>
            <div class="relative z-0 flex flex-1 overflow-hidden">
                <main
                    class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last"
                >
                    <article>
                        <!-- Team member list -->
                        <div
                            class="px-4 pb-12 mx-auto mt-8 max-w-7xl sm:px-6 lg:px-8"
                        >
                            <div
                                class="grid grid-cols-1 gap-4 mt-1 sm:grid-cols-2"
                            >
                                <div
                                    v-for="person in team"
                                    :key="person.handle"
                                    class="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                                >
                                    <div class="flex-1 min-w-0">
                                        <a href="#" class="focus:outline-none">
                                            <span
                                                class="absolute inset-0"
                                                aria-hidden="true"
                                            />
                                            <p
                                                class="text-lg font-medium text-gray-900"
                                            >
                                                {{ person.title }}
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

import Header from '../components/Header.vue'

const profile = {
    fields: {
        Name: 'pppppp',
        Email: 'ricardocooper@example.com',
        Department: 'Software',
        School: 'Product Development',
    },
}

const team = [
    {
        title: 'Article 1',
    },
    {
        title: 'Article 2',
    },
    {
        title: 'Article 3',
    },
    {
        title: 'Article 4',
    },

    {
        title: 'Article 3',
    },
    {
        title: 'Article 4',
    },
    {
        title: 'Article 3',
    },
    {
        title: 'Article 4',
    },
    {
        title: 'Article 3',
    },
    {
        title: 'Article 4',
    },
]

export default {
    components: {
        Header,
    },
    setup() {
        const sidebarOpen = ref(false)

        return {
            profile,
            team,
        }
    },
}
</script>
