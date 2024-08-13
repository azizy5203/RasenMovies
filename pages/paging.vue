<script setup>
  import axios from "axios";
  import VPagination from "@hennge/vue3-pagination";
  import "@hennge/vue3-pagination/dist/vue3-pagination.css";
  const moviesList = ref([]);
  const errs = ref();
  const page = ref(1);
  const totalPages = ref(15); // init total pages number to view default number of pages
  onMounted(() => {
    axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=37ed43a4f8eaa2abd75f9283692947bc&with_genres=16&language=en-US&page=${page.value}`
    ).then(
      ({ data }) => {
        moviesList.value = data.results;
        totalPages.value = data.total_pages;
      },
      (err) => {
        errs.value = err;
      }
    );
  });

  const handleChange = () => {
    axios(
      `https://api.themoviedb.org/3/discover/movie?api_key=37ed43a4f8eaa2abd75f9283692947bc&with_genres=16&language=en-US&page=${page.value}`
    ).then(
      ({ data }) => {
        moviesList.value = data.results;
      },
      (err) => {
        errs.value.push(...err);
      }
    );
    console.log("page", page.value);
  };
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="background h-100"></div>
      <div class="content d-flex flex-column gap-5">
        <div class="header container d-flex justify-content-between p-4">
          <h4 class="logo"><span>Rasen</span>Movies</h4>
          <div class="d-flex gap-4">
            <nuxt-link
              to="/"
              class="d-none d-md-inline-block fs-6 mt-2 link-light fw-bold text-decoration-none"
              >login</nuxt-link
            >
            <button class="btn-sm rounded-pill fw-bold fs-6 px-3 mt-2">
              <nuxt-link
                to="/signup"
                class="text-white text-decoration-none"
                >sign up</nuxt-link
              >
            </button>
          </div>
        </div>
        <section class="typo text-center">
          <h1>Everything You <span>need</span> to know</h1>
          <h1>Is <span>here</span></h1>
        </section>
      </div>
    </section>

    <!-- Main Section -->
    <main class="container mt-5 mb-5">
      <h1 class="text-light mb-5">In Cenimas:</h1>
      <div class="mb-5 paginationContainer p-3 rounded-pill">
        <VPagination
          v-model="page"
          :pages="totalPages"
          :range-size="1"
          active-color="#F2008C"
          @update:modelValue="handleChange" />
      </div>
      <div class="cards">
        <card
          v-for="(movie, index) in moviesList"
          :key="index"
          :title="movie.original_title"
          :release="movie.release_date"
          duration="180 mins"
          revenue="$40 M"
          :overview="movie.overview"
          :rating="movie.vote_average"
          :path="movie.poster_path" />
      </div>

      <div class="mt-5 paginationContainer p-3 rounded-pill">
        <VPagination
          v-model="page"
          :pages="totalPages"
          :range-size="1"
          active-color="#F2008C"
          @update:modelValue="handleChange" />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @use "@/assets/sass/colors" as *;
  * {
    box-sizing: border-box;
  }

  .hero {
    height: 630px;
    display: grid;
    .background {
      z-index: -1;
      grid-area: 1/1;
      background-image: url("@/assets/hero.jpg");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(5px);
    }
    .content {
      grid-area: 1/1;
      z-index: 100;
      .header {
        .logo {
          color: white;
          span {
            color: $accent;
          }
        }
        button {
          background-color: $accent;
          color: white;
          border: 1px solid transparent;
          &:hover {
            border-color: $accent;
            color: $accent;
            background: none;
            border: 1px solid $accent;
          }
        }
      }
      .typo {
        :first-child {
          margin-top: 4rem;
        }
        h1 {
          font-size: 4.5rem;
          font-weight: 700;
        }
        color: whitesmoke;
        span {
          color: $accent;
        }
      }
    }
  }
  main {
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      column-gap: 1rem;
      row-gap: 2rem;
      transition: 0.3s all;
    }

    .paginationContainer {
      display: grid;
      border: 1px solid $accent;
      width: fit-content;
      margin: auto;
      .Pagination {
        justify-self: center;
        align-self: center;
      }
    }
  }
</style>
