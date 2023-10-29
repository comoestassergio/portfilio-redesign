<template>
  <section
    class="relative w-full h-screen flex items-center justify-center md:overflow-hidden"
  >
    <template class="hidden md:block">
      <BackgroundImage />
    </template>
    <div
      class="h-full mx-auto pl-3 bg-white z-10 flex flex-col md:items-center md:justify-center md:pl-0 md:w-[85%] md:h-[85%]"
    >
      <article
        class="mt-[30%] flex flex-col items-start md:items-center md:justify-center md:mt-0"
      >
        <h1 class="uppercase text-4xl font-medium">Sergey Chernyavskiy</h1>
        <span class="opacity-60 text-xl font-normal mb-12">web developer</span>
        <p class="md:text-center max-w-[25rem] text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          labore! Magnam, ratione iusto. Atque repellat quis mollitia provident
          modi exercitationem laboriosam voluptatum, obcaecati animi distinctio
          ducimus a qui minus? Dolorum.
        </p>
      </article>
      <nav class="w-full mt-14 max-w-sm md:max-w-xl md:mt-8 lg:max-w-2xl">
        <ul class="flex flex-col gap-3 w-full md:flex-row">
          <li
            v-for="(item, index) of nav"
            :key="index"
            class="li-item group overflow-hidden relative border-[1px] border-neutral-400 aspect-square w-full p-5 md:p-3 lg:p-5"
          >
            <NuxtLink :href="item.link" class="w-full h-full block">
              <h2
                class="relative text-xl text-neutral-500 font-light leading-6 z-10 group-hover:text-white transition-colors duration-300"
              >
                <span class="block font-normal">#{{ index + 1 }}</span>
                <span class="uppercase block">{{ item.title }}</span>
              </h2>
              <img
                src="/images/card-bg.jpg"
                class="w-full h-full absolute bottom-0 opacity-0 left-0 object-cover brightness-75 z-5 group-hover:opacity-100 transition-opacity duration-300"
                width="100"
                height="100"
              />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>
<script setup lang="ts">
import { nav } from "@/data/nav";

function handleIntersection(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio === 1) {
      // The li element is fully in the viewport
      const liElement = entry.target;
      // Add your desired action here
      liElement.classList.add("li-visible");
    } else {
      // The li element is not fully in the viewport
      const liElement = entry.target;
      // Remove the class if needed
      liElement.classList.remove("li-visible");
    }
  });
}

function handleObserve() {
  const liItems = document.querySelectorAll(".li-item");
  if (window.innerWidth < 769) {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: "10px",
      threshold: 1.0, // 1.0 means fully in the viewport
    });

    liItems.forEach((liItem) => {
      observer.observe(liItem);
    });
  } else if (window.innerWidth > 768) {
    liItems.forEach((liItem) => {
      liItem.classList.remove("li-visible");
    });
  }
}

onMounted(() => {
  window.addEventListener("resize", handleObserve);
  window.addEventListener("mousemove", function () {
    if (this.window.innerWidth > 768) {
      const liItems = document.querySelectorAll(".li-item");
      liItems.forEach((item) => {
        if (item.classList.contains("li-visible")) {
          item.classList.remove("li-visible");
        }
      });
    }
  });
  handleObserve();
});
</script>

<style scoped>
.li-visible > a > h2 {
  color: #fff;
}
.li-visible > a > img {
  opacity: 1;
}
</style>
