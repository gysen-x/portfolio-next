import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface HeaderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export type sidebarLinksType = {
	name: string
	link: string
	icon: JSX.Element
}
