/// <reference types="astro/client" />

// External libraries
declare module 'croppie'

declare global {
	interface Window {
		toast: function
	}
}