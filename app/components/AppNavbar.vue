<script setup lang="ts">
const isOpen = ref(false);

const isDark = ref(false);

function applyTheme(useDark: boolean) {
    if (!import.meta.client) {
        return;
    }

    document.documentElement.classList.toggle("dark", useDark);
}

function toggleTheme() {
    isDark.value = !isDark.value;

    if (import.meta.client) {
        localStorage.setItem("theme-mode", isDark.value ? "dark" : "light");
    }

    applyTheme(isDark.value);
}

const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#experiencias", label: "Experiencias" },
    { href: "#tour360", label: "Tour 360" },
];

function closeMenu() {
    isOpen.value = false;
}

onMounted(() => {
    if (!import.meta.client) {
        return;
    }

    const savedMode = localStorage.getItem("theme-mode");
    if (savedMode === "dark") {
        isDark.value = true;
    } else if (savedMode === "light") {
        isDark.value = false;
    } else if (window.matchMedia) {
        isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
        isDark.value = false;
    }

    applyTheme(isDark.value);
});
</script>

<template>
    <nav
    class="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80">
        <div class="mb-1 text-center bg-yellow-950 dark:bg-white">
            <p class="text-[11px] text-zinc-100 dark:text-zinc-950">
                Disclaimer: este sitio es una práctica educativa y no corresponde al sitio web oficial del Mercado Campesino de Acuarela.
            </p>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <a href="/" class="flex items-center gap-2">
                    <Icon name="lucide:map-pin" class="text-3xl text-orange-900 dark:text-zinc-100" />
                    <div class="flex flex-col leading-none">
                        <span class="font-serif text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                            Mercado
                        </span>
                        <span class="text-[10px] uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                            Campesino de Acuarela
                        </span>
                    </div>
                </a>

                <div class="hidden md:flex items-center gap-8">
                    <a
                        v-for="link in navLinks" :key="link.href" :href="link.href"
                        class="text-sm font-medium text-orange-950 transition-colors hover:text-orange-800 dark:text-white dark:hover:text-orange-100">
                        {{ link.label }}
                    </a>
                    <a
                        href="https://github.com/barbosa89/mercado-campesino-acuarela"
                        target="_blank"
                        class="inline-flex items-center justify-center rounded-lg bg-yellow-950 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-yellow-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-amber-50">
                        <Icon name="lucide:github" class="text-xl me-2" /> Código Fuente
                    </a>
                    <button
                        type="button"
                        role="switch"
                        :aria-checked="isDark ? 'true' : 'false'"
                        :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
                        class="inline-flex items-center gap-2 rounded-lg border border-yellow-950 bg-yellow-950 px-3 py-2 text-sm text-white transition-colors hover:bg-yellow-800 dark:border-white dark:bg-white dark:text-zinc-900 dark:hover:bg-amber-50"
                        @click="toggleTheme">
                        <Icon :name="isDark ? 'lucide:moon-star' : 'lucide:sun'" class="text-xl" />
                    </button>
                </div>

                <button
                    class="p-2 text-orange-900 dark:text-orange-800 md:hidden"
                    :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'" @click="isOpen = !isOpen">
                    <Icon v-if="isOpen" name="lucide:x" class="h-6 w-6" />
                    <Icon v-else name="lucide:menu" class="h-6 w-6" />
                </button>
            </div>
        </div>

        <div v-if="isOpen" class="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
            <div class="px-4 py-4 flex flex-col gap-3">
                <a
                    v-for="link in navLinks" :key="link.href" :href="link.href"
                    class="py-2 text-base font-medium text-orange-900 transition-colors hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-100"
                    @click="closeMenu">
                    {{ link.label }}
                </a>
                <a
                    href="https://github.com/barbosa89/mercado-campesino-acuarela"
                    class="mt-2 inline-flex items-center justify-center rounded-lg bg-yellow-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-yellow-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-amber-50"
                    @click="closeMenu">
                    <Icon name="lucide:github" class="text-xl me-2" /> Código Fuente
                </a>
                <button
                    type="button"
                    role="switch"
                    :aria-checked="isDark ? 'true' : 'false'"
                    :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
                    class="inline-flex items-center justify-center gap-2 rounded-lg border border-yellow-950 bg-yellow-950 px-3 py-2 text-sm text-white transition-colors hover:bg-yellow-800 dark:border-white dark:bg-white dark:text-zinc-900 dark:hover:bg-amber-50"
                    @click="toggleTheme">
                    <Icon :name="isDark ? 'lucide:moon-star' : 'lucide:sun'" class="h-4 w-4" />
                </button>
            </div>
        </div>
    </nav>
</template>
