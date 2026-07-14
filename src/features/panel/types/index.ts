export interface BadgeProps {
  label: string
  type?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
}
export interface LinkProps {
  label: string
  icon?: string
  route?: object
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
