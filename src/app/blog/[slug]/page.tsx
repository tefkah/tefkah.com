import fs from 'node:fs/promises'
import path from 'node:path'
import { cwd } from 'node:process'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`../../content/${slug}.mdx`)

  return <Post />
}

export async function generateStaticParams() {
  const location = path.resolve(cwd(), 'src/app/content')

  const dir = await fs.readdir(location)
  return dir.map((file) => ({ slug: file.replace('.mdx', '') }))
}

export const dynamicParams = false
