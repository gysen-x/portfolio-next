import stls from './Header.module.scss'
import cn from 'classnames'
import { HeaderProps } from './types'

import Link from 'next/link'
import { AlphaButton } from '@/components/globals'

export const Header = ({ className, ...rest }: HeaderProps) => {
	return (
		<div className={cn(className, stls.header)} {...rest}>
			<nav>
				<ul className={stls.navList}>
					<li>
						<AlphaButton text={'contacts'} />
					</li>
				</ul>
			</nav>
		</div>
	)
}
