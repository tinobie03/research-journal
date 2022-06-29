<template>
    <main>
        <div
            class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8"
        >
            <div class="sm:mx-auto sm:w-full sm:max-w-xl">
                <h2
                    class="mt-6 text-3xl font-extrabold text-center text-gray-900"
                >
                    Sign in to your account
                </h2>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
                <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                for="email"
                                class="block text-lg font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div class="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    required=""
                                    class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none h-14 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                for="password"
                                class="block text-lg font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div class="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autocomplete="current-password"
                                    required=""
                                    class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none h-14 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                class="flex items-center justify-center w-full px-4 py-2 text-lg font-medium font-bold text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-14 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                SIGN IN
                            </button>
                        </div>
                    </form>

                    <div class="mt-6">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300" />
                            </div>
                            <div class="relative flex justify-center text-lg">
                                <router-link
                                    to="register"
                                    class="px-2 text-indigo-500 bg-white"
                                >
                                    Register
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {}
</script>

<style></style>
