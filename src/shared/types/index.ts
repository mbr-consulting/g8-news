/** Panel Components */

/** Input */
export interface InputCheckboxProps {
  name: string
  label: string
}

export interface InputDateProps {
  label: string
  name: string
  value?: string
}

export interface InputFileProps {
  label?: string
  name: string
  title: string
  subtitle?: string
}

export interface InputSelectProps {
  label: string
  name: string
  value?: string
  options?: Array<{ value: string; label: string }>
}

export interface InputTextProps {
  type: 'text' | 'email' | 'password'
  name: string
  label: string
  placeholder?: string
}

export interface InputTextareaProps {
  name: string
  label: string
  placeholder?: string
  value?: string
  cols?: number
  rows?: number
}

/** Input */
export interface ButtonTagProps {
  title: string
}

export interface PanelBreadcrumbProps {
  crumbs: {
    name: string
    to?: { name: string }
  }[]
}

export interface PanelButtonProps {
  type: 'button' | 'submit' | 'reset'
  variant: 'outline' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  label: string
  icon?: string
}

export interface PanelTitleProps {
  title: string
  icon?: string
}

export interface PanelCardProps {
  footer?: boolean
}

export interface PanelBadgeProps {
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
