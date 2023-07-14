/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard'],
        NanumNeo: ['NanumNeo'],
        NanumNeoLt: ['NanumNeoLt'],
        NanumNeoEB: ['NanumNeoEB'],
        PreB: ['Pretendard-Bold'],
        PreR: ['Pretendard-Regular'],
        PreS: ['Pretendard-SemiBold'],
    },
    },
  },
  plugins: [],
}
