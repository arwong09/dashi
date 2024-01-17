var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var customConfig = {
    textButtonColor: 'text-sky-500 hover:text-sky-400',
    ctaBgColor: 'bg-gradient-to-b to-purple-700 from-fuchsia-600 hover:to-purple-700/90 hover:from-fuchsia-600/90 disabled:from-purple-700/30 disabled:to-fuchsia-600/30',
};
var safelist = __spreadArray(__spreadArray([], customConfig.ctaBgColor.split(' '), true), customConfig.textButtonColor.split(' '), true);
var config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: safelist,
    theme: {
        extend: {
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(1px)' },
                    '50%': { transform: 'translateY(-1px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;
