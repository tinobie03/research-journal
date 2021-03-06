<template>
    <div class="flex flex-col min-h-full mb-8">
        <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->
        <Popover as="template" class="" v-slot="{ open }">
            <header
                :class="[
                    open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                    'bg-white shadow-sm lg:static lg:overflow-y-visible',
                ]"
            >
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                        class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8"
                    >
                        <div
                            class="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2"
                        >
                            <div class="flex items-center flex-shrink-0">
                                <router-link to="/">
                                    <img
                                        class="block w-auto h-16"
                                        src="/HIT.png"
                                        alt="Workflow"
                                    />
                                </router-link>
                            </div>
                        </div>
                        <div
                            class="flex-1 min-w-0 md:px-8 lg:px-0 xl:col-span-6"
                        >
                            <div
                                class="flex items-center px-6 py-4 md:max-w-xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"
                            >
                                <div class="w-full">
                                    <label for="search" class="sr-only"
                                        >Search</label
                                    >
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
                                            id="search"
                                            name="search"
                                            class="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden"
                        >
                            <!-- Mobile menu button -->
                            <PopoverButton
                                class="inline-flex items-center justify-center p-2 -mx-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                                <span class="sr-only">Open menu</span>
                                <MenuIcon
                                    v-if="!open"
                                    class="block w-6 h-6"
                                    aria-hidden="true"
                                />
                                <XIcon
                                    v-else
                                    class="block w-6 h-6"
                                    aria-hidden="true"
                                />
                            </PopoverButton>
                        </div>
                        <div
                            class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4"
                        >
                            <router-link
                                to="/write"
                                class="inline-flex items-center px-4 py-2 ml-6 text-sm font-medium text-white bg-indigo-600 border border-transparent shadow-sm rounded-[30px] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Write An Article
                            </router-link>
                            <!-- Profile dropdown -->
                            <Menu as="div" class="relative flex-shrink-0 ml-5">
                                <div>
                                    <MenuButton
                                        class="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span class="sr-only"
                                            >Open user menu</span
                                        >
                                        <img
                                            class="w-8 h-8 rounded-full"
                                            :src="user.imageUrl"
                                            alt=""
                                        />
                                    </MenuButton>
                                </div>
                                <transition
                                    enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0"
                                >
                                    <MenuItems
                                        class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <MenuItem
                                            v-for="item in userNavigation"
                                            :key="item.name"
                                            v-slot="{ active }"
                                        >
                                            <router-link
                                                :to="item.href"
                                                :class="[
                                                    active ? 'bg-gray-100' : '',
                                                    'block py-2 px-4 text-sm text-gray-700',
                                                ]"
                                                >{{ item.name }}</router-link
                                            >
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                </div>

                <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
                    <div class="pt-4 border-t border-gray-200">
                        <div
                            class="flex items-center max-w-3xl px-4 mx-auto sm:px-6"
                        >
                            <div class="flex-shrink-0">
                                <img
                                    class="w-10 h-10 rounded-full"
                                    :src="user.imageUrl"
                                    alt=""
                                />
                            </div>
                            <div class="ml-3">
                                <div
                                    class="text-base font-medium text-gray-800"
                                >
                                    {{ user.name }}
                                </div>
                                <div class="text-sm font-medium text-gray-500">
                                    {{ user.email }}
                                </div>
                            </div>
                            <button
                                type="button"
                                class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span class="sr-only">View notifications</span>
                                <BellIcon class="w-6 h-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div
                            class="max-w-3xl px-2 mx-auto mt-3 space-y-1 sm:px-4"
                        >
                            <router-link
                                v-for="item in userNavigation"
                                :key="item.name"
                                :to="item.href"
                                class="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900"
                                >{{ item.name }}</router-link
                            >
                        </div>
                    </div>

                    <div class="max-w-3xl px-4 mx-auto mt-6 sm:px-6">
                        <router-link
                            to="/write"
                            class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-[30px] shadow-sm hover:bg-indigo-700"
                        >
                            Write Article
                        </router-link>
                    </div>
                </PopoverPanel>
            </header>
        </Popover>
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

const user = {
    name: 'Chelsea Hagon',
    email: 'chelseahagon@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Popular', href: '#', icon: FireIcon, current: false },
    { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Trending', href: '#', icon: TrendingUpIcon, current: false },
]
const userNavigation = [
    { name: 'My Articles', href: '/my_articles' },
    { name: 'Your Profile', href: '/profile' },
    { name: 'Sign out', href: '/login' },
]

export default {
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        Popover,
        PopoverButton,
        PopoverPanel,
        BellIcon,
        MenuIcon,
        SearchIcon,
        XIcon,
    },
    setup() {
        return {
            user,
            navigation,
            userNavigation,
        }
    },
}
</script>
