import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        // Private config that is only available on the server
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        // Config within public will be also exposed to the client
        public: {
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
        }
    },
    buildModules: [
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // automatically imports `usePinia()`
                    'defineStore',
                    // automatically imports `usePinia()` as `usePiniaStore()`
                    ['defineStore', 'definePiniaStore'],
                ],
            },

        ],
    ],
    "types": [
        "@pinia/nuxt"
    ]

})
