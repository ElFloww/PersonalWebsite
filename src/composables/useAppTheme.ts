import { ref } from 'vue'

const isDark = ref(false)

const apply = (dark: boolean) => {
    isDark.value = dark
    document.documentElement.classList.toggle('dark', dark)
}

export function useAppTheme() {
    const initTheme = () => {
        const saved = localStorage.getItem('theme')
        // 'floraDark' / 'flora' are the values stored by the previous version
        if (saved === 'dark' || saved === 'floraDark') return apply(true)
        if (saved === 'light' || saved === 'flora') return apply(false)
        apply(window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false)
    }

    const toggleTheme = () => {
        apply(!isDark.value)
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }

    return { isDark, initTheme, toggleTheme }
}
