import type { NextConfig } from 'next'
import nextra from 'nextra'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    ppr: 'incremental',
  },
}

const withNextra = nextra({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withNextra(nextConfig)
