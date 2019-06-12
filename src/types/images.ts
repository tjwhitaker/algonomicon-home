export type FixedObject = {
  width: number
  height: number
  src: string
  srcSet: string
  base64?: string
  tracedSVG?: string
  srcWebp?: string
  srcSetWebp?: string
}

export type FluidObject = {
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
  base64?: string
  tracedSVG?: string
  srcWebp?: string
  srcSetWebp?: string
}

export type ImageProps = {
  resolutions?: FixedObject
  sizes?: FluidObject
  fixed?: FixedObject
  fluid?: FluidObject
  fadeIn?: boolean
  title?: string
  alt?: string
  className?: string | object
  critical?: boolean
  crossOrigin?: string | boolean
  style?: object
  imgStyle?: object
  placeholderStyle?: object
  backgroundColor?: string | boolean
  onLoad?: () => void
  onStartLoad?: (param: { wasCached: boolean }) => void
  onError?: (event: any) => void
  Tag?: string
  itemProp?: string
  loading?: `auto` | `lazy` | `eager`
}
