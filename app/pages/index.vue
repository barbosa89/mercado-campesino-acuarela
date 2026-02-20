<template>
    <div>
        <HeroSection />

        <ExperienciesSection />

        <TourSection />
    </div>
</template>

<script setup lang="ts">
const tourTitle = 'Mercado Campesino de Acuarela'
const tourDescription = 'Tour virtual 360° del Mercado Campesino de Acuarela.'

useHead({
    title: tourTitle,
    meta: [
        { name: 'description', content: tourDescription },
        { property: 'og:title', content: tourTitle },
        { property: 'og:description', content: tourDescription },
    ],
})
</script>
