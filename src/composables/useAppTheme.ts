import { useTheme } from 'vuetify';
import { computed } from 'vue';

export function useAppTheme() {
    const theme = useTheme();

    const isDark = computed(() => theme.global.name.value === 'floraDark');

    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'floraDark' || savedTheme === 'flora') {
            theme.global.name.value = savedTheme;
            if (savedTheme === 'floraDark') {
                document.documentElement.classList.add('dark-theme');
            }
        } else {
            // Match system preference
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                theme.global.name.value = 'floraDark';
                document.documentElement.classList.add('dark-theme');
            }
        }
    };

    const toggleTheme = () => {
        const currentlyDark = theme.global.name.value === 'floraDark';
        const newTheme = currentlyDark ? 'flora' : 'floraDark';
        theme.global.name.value = newTheme;
        localStorage.setItem('theme', newTheme);
        
        if (newTheme === 'floraDark') {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
    };

    return {
        theme,
        isDark,
        initTheme,
        toggleTheme
    };
}
