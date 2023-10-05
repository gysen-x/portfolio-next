import Link from 'next/link'
import stls from './FooterItem.module.scss'
import { FooterItemProps } from './types'

export const FooterItem = ({ footerItem }: FooterItemProps) => {
	return (
		<li className={stls.item}>
			<Link href={footerItem.link}>
				<span className={stls.itemSpan}>{footerItem.name}</span>
			</Link>
		</li>
	)
}
