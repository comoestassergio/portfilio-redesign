<template>
  <div
    ref="image"
    class="absolute -top-[50px] -left-[50px] -right-[50px] -bottom-[50px]"
  >
    <img
      src="/images/bckgr-image.jpg"
      width="1920"
      height="1080"
      alt="background"
      class="absolute top-0 left-0 w-full h-full object-cover"
    />
  </div>
</template>
<script setup lang="ts">
const x = ref(0);
const y = ref(0);
const image = ref<HTMLImageElement>();

onMounted(() => {
  window.addEventListener("mousemove", function (e: MouseEvent) {
    x.value = (this.window.innerWidth - e.pageX) / 85;
    y.value = (this.window.innerHeight - e.pageY) / 85;

    if (image.value) {
      image.value.style.transform = `translate3d(${x.value}px, ${y.value}px, 0px)`;
    }
  });
});
</script>
