/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['c.dns-shop.ru'],
		formats: ['image/avif', 'image/webp'],
	},
}
module.exports = nextConfig
