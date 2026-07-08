export interface SectionProps {
  title: string
  items: SectionItemProps[]
}

export interface SectionItemProps {
  name: string
  imageUrl?: string
  link: string
  altText: string
}
