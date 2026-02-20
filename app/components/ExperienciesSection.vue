<script setup lang="ts">

const experiences = [
    {
        icon: "lucide:utensils-crossed",
        title: "Comida típica",
        description:
            "Saborea los platos más auténticos de Santander: cabrito, mute, pepitoria y mucho más, preparados con recetas tradicionales.",
    },
    {
        icon: "lucide:coffee",
        title: "Cafeterías",
        description:
            "Disfruta del mejor café colombiano en un ambiente acogedor, acompañado de arepas santandereanas y hormigas culonas.",
    },
    {
        icon: "lucide:gem",
        title: "Artesanías y joyerías",
        description:
            "Descubre piezas únicas hechas a mano: artesanías locales, accesorios y joyas con identidad santandereana.",
    },
    {
        icon: "lucide:gamepad-2",
        title: "Juegos",
        description:
            "Diversión para toda la familia con actividades al aire libre y juegos tradicionales colombianos.",
    },
    {
        icon: "lucide:cake-slice",
        title: "Postres",
        description:
            "Dulces típicos, obleas, chicha y una variedad de postres artesanales que endulzarán tu visita.",
    },
    {
        icon: "lucide:tree-pine",
        title: "Naturaleza",
        description:
            "Rodeado de paisajes espectaculares, cerca al Cañón de Chicamocha, cascadas y cuevas por explorar.",
    },
];
</script>

<template>
    <section id="experiencias" class="bg-amber-50/90 py-24 dark:bg-zinc-900/40">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <p class="mb-3 text-sm font-medium uppercase tracking-widest text-orange-900 dark:text-zinc-100">
                    Qué encontrarás
                </p>
                <h2
                    class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 text-balance dark:text-zinc-100">
                    Una experiencia para cada sentido
                </h2>
                <p class="mt-4 text-zinc-600 text-lg leading-relaxed text-pretty dark:text-zinc-400">
                    El Mercado Campesino de Acuarela es mucho más que un mercado. Es un
                    destino donde la gastronomía, la cultura y la naturaleza se unen.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="exp in experiences" :key="exp.title"
                    class="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                    <div
                        class="mb-5 flex h-12 w-12 text-2xl items-center justify-center rounded-xl bg-orange-900/10 text-orange-900 transition-colors group-hover:bg-orange-900 group-hover:text-white dark:bg-zinc-100/10 dark:text-zinc-100 dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900">
                        <Icon :name="exp.icon" class="h-6 w-6" />
                    </div>
                    <h3 class="mb-2 font-serif text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        {{ exp.title }}
                    </h3>
                    <p class="text-zinc-600 leading-relaxed text-sm dark:text-zinc-400">
                        {{ exp.description }}
                    </p>
                </div>
            </div>

            <div class="mt-16 rounded-2xl overflow-hidden shadow-xl">
                <NuxtImg
                    src="/images/monumento.jpg"
                    alt="Entrada principal del Mercado Campesino de Acuarela con su arquitectura tradicional"
                    class="w-full h-auto object-cover" loading="lazy" />
            </div>
        </div>
    </section>
</template>
