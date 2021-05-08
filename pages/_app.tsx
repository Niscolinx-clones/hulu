import React from 'react'
import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

// "autoprefixer": "^10.0.4",
// "postcss": "^8.1.10",
// "tailwindcss": "^2.1.1",


function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
