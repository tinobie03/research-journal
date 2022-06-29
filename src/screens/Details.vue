<template>
    <div class="flex flex-col h-full">
        <Header />
        <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
            <span
                class="w-full px-4 mx-auto mt-6 mb-8 text-3xl font-bold max-w-7xl sm:px-6 lg:px-8"
            >
                Your Profile
            </span>
            <div class="relative z-0 flex flex-1 overflow-hidden">
                <main
                    class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last"
                >
                    <article>
                        <!-- Description list -->
                        <div
                            class="px-4 mx-auto mt-6 max-w-7xl sm:px-6 lg:px-8"
                        >
                            <dl
                                class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"
                            >
                                <div
                                    v-for="field in Object.keys(profile.fields)"
                                    :key="field"
                                    class="sm:col-span-1"
                                >
                                    <dt
                                        class="text-lg font-medium text-gray-500"
                                    >
                                        {{ field }}
                                    </dt>
                                    <dd class="mt-1 text-lg text-gray-900">
                                        {{ profile.fields[field] }}
                                    </dd>
                                </div>
                            </dl>
                            <router-link
                                to="/change_password"
                                class="inline-flex items-center py-2 px-4 my-4 text-sm font-medium text-white bg-indigo-600 border border-transparent shadow-sm rounded-[10px] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Change Password
                            </router-link>
                        </div>

                        <!-- Team member list -->
                        <div
                            class="px-4 pb-12 mx-auto mt-8 max-w-7xl sm:px-6 lg:px-8"
                        >
                            <h2 class="text-lg font-medium text-gray-500">
                                Your Articles
                            </h2>
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
