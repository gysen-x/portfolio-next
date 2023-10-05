import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { footerItemType } from '../../types'

export interface FooterItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	footerItem: footerItemType
}
