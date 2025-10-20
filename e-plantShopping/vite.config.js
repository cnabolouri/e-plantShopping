import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
<<<<<<< HEAD
  base: '/e-plantShopping/'
=======
  base: '/e-plantShopping/e-plantShopping/'
>>>>>>> eeea45dcda75258e29025c50060506d417654fc9
})
