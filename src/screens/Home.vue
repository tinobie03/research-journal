<template>
    <div class="min-h-full">
        <Header />
        <h1 class="text-4xl font-bold text-center">
            Research & Commercialization
        </h1>
        <div class="py-10">
            <div
                class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8"
            >
                <main class="lg:col-span-10 xl:col-span-9">
                    <div class="">
                        <h1 class="my-10 text-3xl font-bold">Articles</h1>
                        <ul role="list" class="space-y-4">
                            <li
                                v-for="question in questions"
                                :key="question.id"
                                class="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg"
                            >
                                <article
                                    :aria-labelledby="
                                        'question-title-' + question.id
                                    "
                                >
                                    <div>
                                        <div class="flex space-x-3">
                                            <div class="flex-1 min-w-0">
                                                <p
                                                    class="text-lg font-medium text-gray-900"
                                                >
                                                    <span
                                                        class="hover:underline"
                                                        >{{
                                                            question.author.name
                                                        }}</span
                                                    >
                                                </p>
                                                <p
                                                    class="text-sm text-gray-500"
                                                >
                                                    <span
                                                        class="hover:underline"
                                                    >
                                                        <time
                                                            :datetime="
                                                                question.datetime
                                                            "
                                                            >{{
                                                                question.date
                                                            }}</time
                                                        >
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <h2
                                            :id="
                                                'question-title-' + question.id
                                            "
                                            class="mt-4 text-2xl font-medium text-gray-900"
                                        >
                                            {{ question.title }}
                                        </h2>
                                    </div>
                                    <div
                                        class="mt-2 space-y-4 text-lg text-gray-700"
                                        v-html="question.body"
                                    />
                                    <div
                                        class="flex justify-between mt-6 space-x-8"
                                    >
                                        <div class="flex space-x-6">
                                            <span
                                                class="inline-flex items-center text-sm"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                                >
                                                    <ThumbUpIcon
                                                        class="w-5 h-5"
                                                        aria-hidden="true"
                                                    />
                                                    <span
                                                        class="font-medium text-gray-900"
                                                        >{{
                                                            question.likes
                                                        }}</span
                                                    >
                                                    <span class="sr-only"
                                                        >likes</span
                                                    >
                                                </button>
                                            </span>
                                            <span
                                                class="inline-flex items-center text-sm"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                                >
                                                    <ChatAltIcon
                                                        class="w-5 h-5"
                                                        aria-hidden="true"
                                                    />
                                                    <span
                                                        class="font-medium text-gray-900"
                                                        >{{
                                                            question.replies
                                                        }}</span
                                                    >
                                                    <span class="sr-only"
                                                        >replies</span
                                                    >
                                                </button>
                                            </span>
                                        </div>
                                        <div class="flex text-sm">
                                            <span
                                                class="inline-flex items-center text-sm"
                                            >
                                                <router-link
                                                    to="/article"
                                                    class="flex items-center space-x-2 text-[#FFB400] hover:text-indigo-600"
                                                >
                                                    <EyeIcon
                                                        class="w-5 h-5"
                                                        aria-hidden="true"
                                                    />

                                                    <span class="text-lg"
                                                        >View Article</span
                                                    >
                                                </router-link>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </main>
                <aside class="hidden xl:block xl:col-span-3">
                    <div class="sticky space-y-4 mt-[7.5rem] top-4">
                        <section aria-labelledby="trending-heading">
                            <div class="bg-white rounded-lg shadow">
                                <div class="p-6">
                                    <h2
                                        id="trending-heading"
                                        class="text-base font-medium text-gray-900"
                                    >
                                        Latest
                                    </h2>
                                    <div class="flow-root mt-6">
                                        <ul
                                            role="list"
                                            class="-my-4 divide-y divide-gray-200"
                                        >
                                            <li
                                                v-for="post in trendingPosts"
                                                :key="post.id"
                                                class="flex py-4 space-x-3"
                                            >
                                                <div class="flex-shrink-0">
                                                    <img
                                                        class="w-8 h-8 rounded-full"
                                                        :src="
                                                            post.user.imageUrl
                                                        "
                                                        :alt="post.user.name"
                                                    />
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p
                                                        class="text-sm text-gray-800"
                                                    >
                                                        {{ post.body }}
                                                    </p>
                                                    <div class="flex mt-2">
                                                        <span
                                                            class="inline-flex items-center text-sm"
                                                        >
                                                            <button
                                                                type="button"
                                                                class="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                                            >
                                                                <ChatAltIcon
                                                                    class="w-5 h-5"
                                                                    aria-hidden="true"
                                                                />
                                                                <span
                                                                    class="font-medium text-gray-900"
                                                                    >{{
                                                                        post.comments
                                                                    }}</span
                                                                >
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mt-6">
                                        <router-link
                                            to="/article"
                                            class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                                        >
                                            View
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script>
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/vue'
import {
    ChatAltIcon,
    CodeIcon,
    DotsVerticalIcon,
    EyeIcon,
    FlagIcon,
    PlusSmIcon,
    SearchIcon,
    ShareIcon,
    StarIcon,
    ThumbUpIcon,
} from '@heroicons/vue/solid'
import {
    BellIcon,
    FireIcon,
    HomeIcon,
    MenuIcon,
    TrendingUpIcon,
    UserGroupIcon,
    XIcon,
} from '@heroicons/vue/outline'
import Header from '../components/Header.vue'

const communities = [
    { name: 'Movies', href: '#' },
    { name: 'Food', href: '#' },
    { name: 'Sports', href: '#' },
    { name: 'Animals', href: '#' },
    { name: 'Science', href: '#' },
    { name: 'Dinosaurs', href: '#' },
    { name: 'Talents', href: '#' },
    { name: 'Gaming', href: '#' },
]
const tabs = [
    { name: 'Recent', href: '#', current: true },
    { name: 'Most Liked', href: '#', current: false },
    { name: 'Most Answers', href: '#', current: false },
]
const questions = [
    {
        id: '81614',
        likes: '29',
        replies: '11',
        views: '2.7k',
        author: {
            name: 'Dries Vincent',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        date: 'December 9 at 11:43 AM',
        datetime: '2020-12-09T11:43:00',
        href: '#',
        title: 'What would you have done differently if you ran Jurassic Park?',
        body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
    },
    {
        id: '81614',
        likes: '29',
        replies: '11',
        views: '2.7k',
        author: {
            name: 'Dries Vincent',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        date: 'December 9 at 11:43 AM',
        datetime: '2020-12-09T11:43:00',
        href: '#',
        title: 'What would you have done differently if you ran Jurassic Park?',
        body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
    },
    {
        id: '81614',
        likes: '29',
        replies: '11',
        views: '2.7k',
        author: {
            name: 'Dries Vincent',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        date: 'December 9 at 11:43 AM',
        datetime: '2020-12-09T11:43:00',
        href: '#',
        title: 'What would you have done differently if you ran Jurassic Park?',
        body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
    },
]
const whoToFollow = [
    {
        name: 'Leonard Krasner',
        handle: 'leonardkrasner',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]
const trendingPosts = [
    {
        id: 1,
        user: {
            name: 'Floyd Miles',
            imageUrl:
                'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
        comments: 291,
    },
    // More posts...
]

export default {
    components: {
        ChatAltIcon,
        EyeIcon,
        ThumbUpIcon,
        Header,
    },
    setup() {
        return {
            communities,
            tabs,
            questions,
            whoToFollow,
            trendingPosts,
        }
    },
}
</script>
