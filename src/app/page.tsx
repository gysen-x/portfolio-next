import stls from './page.module.scss'

import Image from 'next/image'
import { Ornament, PixelManIcon } from '@/components/icons'
import { LineTag } from '@/components/globals'

export default function Home() {
	return (
		<div className={stls.homepage}>
			<div className={stls.wrapper}>
				<LineTag text='name' />
				<h1 className={stls.name}>Dmitry Borisenko</h1>
				<LineTag text='profession' />
				<h2 className={stls.profession}>Fullstack Developer</h2>
			</div>
			<Image
				className={stls.portrait}
				src='/portrait-grainy.png'
				alt='portrait'
				width={500}
				height={555}
			/>
			<span className={stls.backgroundName}>Dmitry Borisenko</span>
			<Ornament className={stls.ornament} />
		</div>
	)
}
