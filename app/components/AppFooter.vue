<script setup lang="ts">

const exploreLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#experiencias", label: "Experiencias" },
    { href: "#tour360", label: "Tour 360" },
];

const attractions = [
    "Cañón de Chicamocha",
    "Cascadas",
    "Cuevas naturales",
    "Mesa de los Santos",
];
</script>

<template>
    <footer id="contacto" class="bg-yellow-950 text-zinc-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div class="lg:col-span-1">
                    <div class="flex items-center gap-2 mb-4">
                        <Icon name="lucide:map-pin" class="text-2xl text-zinc-300" />
                        <div class="flex flex-col leading-none">
                            <span class="font-serif text-lg font-bold text-zinc-100 tracking-tight">
                                Mercado
                            </span>
                            <span class="text-[10px] uppercase tracking-widest text-zinc-400">
                                Campesino de Acuarela
                            </span>
                        </div>
                    </div>
                    <p class="text-zinc-300 text-sm leading-relaxed">
                        Sitio web con carácter educativo del Mercado Campesino de Acuarela, no es un sitio oficial ni comercial.
                    </p>
                </div>

                <div>
                    <h3 class="font-semibold text-zinc-100 mb-4 text-sm uppercase tracking-wider">
                        Explorar
                    </h3>
                    <ul class="flex flex-col gap-3">
                        <li v-for="link in exploreLinks" :key="link.href">
                            <a :href="link.href" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="font-semibold text-zinc-100 mb-4 text-sm uppercase tracking-wider">
                        Atracciones cercanas
                    </h3>
                    <ul class="flex flex-col gap-3">
                        <li v-for="place in attractions" :key="place">
                            <span class="text-sm text-zinc-400">
                                {{ place }}
                            </span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="font-semibold text-zinc-100 mb-4 text-sm uppercase tracking-wider">
                        Contacto
                    </h3>
                    <ul class="flex flex-col gap-3">
                        <li class="flex items-start gap-2">
                            <Icon name="lucide:user" class="h-4 w-4 text-zinc-300 mt-0.5 shrink-0" />
                            <span class="text-sm text-zinc-400">
                                Omar Barbosa
                            </span>
                        </li>
                        <li class="flex items-start gap-2">
                            <Icon name="lucide:globe" class="h-4 w-4 text-zinc-300 mt-0.5 shrink-0" />
                            <span class="text-sm text-zinc-400">
                                www.omarbarbosa.com
                            </span>
                        </li>
                        <li class="flex items-center gap-2">
                            <Icon name="lucide:mail" class="h-4 w-4 text-zinc-300 shrink-0" />
                            <span class="text-sm text-zinc-400">
                                contacto@omarbarbosa.com
                            </span>
                        </li>
                    </ul>

                    <div class="flex items-center gap-3 mt-5">
                        <a
                            href="https://x.com/Omar_Andres_Bar"
                            aria-label="X/Twitter"
                            target="_blank"
                            class="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-400 transition-colors hover:text-zinc-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="hover:scale-110" viewBox="0 0 30 30"><path fill="#432004" d="M22.804 3.247h4.135l-9.034 10.325 10.628 14.05H20.21L13.694 19.1l-7.458 8.52H2.1l9.662-11.043L1.566 3.247H10.1l5.891 7.789 6.814-7.79Zm-1.451 21.9h2.29L8.854 5.592H6.396z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-12 pt-8 border-t border-zinc-100">
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p class="text-xs text-zinc-200">
                        {{ new Date().getFullYear() }} Omar Barbosa.
                    </p>
                    <p class="text-xs text-zinc-200">
                        Santander, Colombia
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
