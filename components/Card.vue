<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: "Movie Title",
    },
    release: {
        type: String,
        default: "date",
    },
    duration: {
        type: String,
        default: "duartion",
    },
    revenue: {
        type: String,
        default: "revenue",
    },
    overview: {
        type: String,
        default: `Lorem ipsum dolor sit,d ametd consectetur adipisicing elit.
                    Quia illum laudantium eius esse? Deserunt, ratione officiis
                    ea dolorconsequatur.`,
    },
    rating: {
        type: Number,
        default: 5.5,
    },
    path: {
        type: String,
        default: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    },
});
</script>
<template>
    <div class="wrapper d-grid w-100 h-100">
        <div class="infoCard w-100 h-100">
            <h5 class="text-center">{{ title }}</h5>
            <div class="stats d-grid">
                <span>Release:</span>
                <span>{{ release }}</span>
                <span>Duration:</span>
                <span>{{ duration }}</span>
                <span>Revenue: </span>
                <span>{{ revenue }}</span>
            </div>
            <div class="overview">
                <div class="d-grid gap-5">
                    <span class="title fw-bold">Overview</span>
                    <span class="fw-bold"><i class="bi bi-star-fill text-warning"></i> {{ rating }}</span>
                </div>
                <p>
                    {{ overview }}
                </p>
            </div>
        </div>
        <div class="poster w-100 h-100">
            <img
                class="w-100 h-100"
                :src="`https://image.tmdb.org/t/p/original${path}`"
                loading="lazy"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/sass/colors" as *;

.wrapper {
    color: white;
    overflow: hidden;
    transition: 0.7s;

    //hovering animation
    &:hover
        *:not( h5, span, p,.infoCard, .stats, .overview, .overview
            > div) {
        transition: 0.7s;
        transform: translateY(400px);
        border-radius: 0 5px 5px 0;
    }
    .infoCard {
        grid-area: 1 / 1;
        align-self: start;
        z-index: -1;
        display: grid;
        grid-template-rows: 20% 40% 40%;
        padding: 1rem;
        background-color: #252d6f;
        border-radius: 5px;
        // overflow: hidden;

        .stats {
            grid-template-columns: 40% 60%;
            grid-template-rows: repeat(3, 1fr);
            // column-gap:.5rem ;
            :nth-child(odd) {
                color: $movInfo;
                font-weight: bold;
                text-decoration: underline;
            }
            :nth-child(even) {
                font-weight: bold;
                justify-self: start;
            }
        }

        .overview {
            overflow: hidden;
            //title and rating
            div {
                grid-template-columns: repeat(2, 50%);
                .title{
                    color:$movInfo;
                    text-decoration: underline;
                }
            }
        }
    }
    .poster {
        grid-area: 1 / 1;
        align-self: start;
        z-index: 1000;
        transition: 0.7s;
        cursor: pointer;
        // display: none;

        img {
            border-radius: 5px;
            transition: 0.7s;
            &:hover {
                border-radius: 5px 0 0 5px;
                transition: 0.7s;
            }
        }
    }
}
</style>
