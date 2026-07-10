export interface BadgeProps {
  label: string
  type?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
}
export interface ButtonProps {
  label: string
  icon?: string
}

export interface PageTitleProps {
  title: string
  subtitle?: string
  button?: ButtonProps
}

export interface RowsProps {
  rows: string[]
  actions: boolean
}

export interface Row {
  title: string
  date: string
  type: string
  author: string
}

export interface MenuItemProps {
  icon: string
  label: string
  href: string
}
