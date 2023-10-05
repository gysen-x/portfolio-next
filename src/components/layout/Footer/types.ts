import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface FooterProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export type footerItemType = {
	name: string
	link: string
}
