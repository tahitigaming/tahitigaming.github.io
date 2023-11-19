const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: ``,
	poweredByHeader: false,
	output: 'export',
	pageExtensions: ['mdx', 'ts', 'tsx'],
	experimental: {
		mdxRs: true
	}
};

module.exports = withMDX(nextConfig);
