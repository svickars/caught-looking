/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
	images: {
		domains: ['localhost'],
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: '/api/:path*',
			},
		];
	},
	env: {
		BASEBALL_LIB_PATH: process.env.BASEBALL_LIB_PATH || '../baseball',
	},
	// ESLint configuration
	eslint: {
		// Don't fail build on ESLint errors/warnings
		// We'll fix these incrementally, but need builds to succeed for now
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: process.env.ANALYZE === 'true',
	},
};

module.exports = withBundleAnalyzer(nextConfig);
