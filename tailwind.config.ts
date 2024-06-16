// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         accept:'#0989ff',
//         topHeadingPrimary:'#010f1c',
//         topHeadingSecondary:'#021d35',
//         pink:'#FD4B6B',
//       },
//       container:{
//         center:true,
//         padding:'15px',
//       }
//     },
//   },
//   plugins: [],
// };
// export default config;


import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        accept:'#0989ff',
        topHeadingPrimary:'#010f1c',
        topHeadingSecondary:'#021d35',
        pink:'#FD4B6B',
      },
      container:{
        center:true,
        padding:'15px',
      }
    },
  },
  plugins: [],
});