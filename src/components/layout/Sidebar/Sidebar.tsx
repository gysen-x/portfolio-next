import stls from './Sidebar.module.scss'
import cn from 'classnames'
import { HeaderProps } from './types'

import Link from 'next/link'
import { navList, socialsList } from './constants'

export const Sidebar = ({ className, ...rest }: HeaderProps) => {
	return (
		<div className={cn(className, stls.sidebar)} {...rest}>
			<div className={stls.logo}>
				<p>{'<DVLPR/>'}</p>
			</div>
			<nav className={stls.nav}>
				<ul className={stls.navList}>
					{navList.map(item => (
						<li key={item.name}>
							{item.icon}
							<Link href={item.link}>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className={stls.socials}>
				{socialsList.map(item => (
					<li key={item.name}>
						<Link href={item.link}>{item.icon}</Link>
					</li>
				))}
			</div>
		</div>
	)
}
