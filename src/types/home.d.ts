import type { GoodsItem } from './global'

export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}

export type CategoryItem = {
  id: string
  name: string
  icon: string
}

export type HotItem = {
  id: string
  pictures: string[]
  target: string
  title: string
  type: string
  alt: string
}

export type GuessItem = GoodsItem
