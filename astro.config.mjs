// @ts-check
import { defineConfig } from 'astro/config';

// Situs statis murni (CSR): semua data di-fetch di browser.
// Tidak ada adapter/SSR — output berupa HTML statis yang bisa di-deploy ke Vercel.
export default defineConfig({
	output: 'static',
});
