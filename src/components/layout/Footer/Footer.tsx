import stls from './Footer.module.scss'
import cn from 'classnames'
import { FooterProps } from './types'

import { footerItems } from './constants'
import { FooterItem } from './components/FooterItem/FooterItem'

export const Footer = ({ className, ...rest }: FooterProps) => {
	return (
		<div className={cn(className, stls.footer)} {...rest}>
			<ul className={stls.list}>
				{footerItems.map((item, idx) => (
					<FooterItem key={idx} className={stls.item} footerItem={item} />
				))}
			</ul>
		</div>
	)
}
