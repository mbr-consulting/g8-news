export interface BadgeProps {
  label: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
}
export interface LinkToProps {
  label: string
  icon?: string
  route?: object
}

export interface PageTitleProps {
  title: string
  subtitle?: string
  button?: LinkToProps
}

export interface MenuItemProps {
  icon: string
  label: string
  href: string
}

/** Table intefaces */
export interface TableProps<T extends Record<string, unknown>> {
  headers: TableHeadProps
  data: T[]
  actions?: boolean
  remove?: boolean
  edit?: boolean
  view?: boolean
  onRemove?: (row: T) => void
  onEdit?: (row: T) => void
  onView?: (row: T) => void
}

export interface TableHeadColumnProps {
  id: string
  text: string
}

export interface TableHeadProps {
  columns: TableHeadColumnProps[]
  action?: boolean
}

export interface TableBodyProps<T extends Record<string, unknown>> {
  columns: TableHeadColumnProps[]
  data: T[]
}
