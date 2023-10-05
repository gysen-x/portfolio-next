import stls from './page.module.scss'
import cn from 'classnames'

import { Footer, Header, Sidebar } from '@/components/layout'
import './globals.scss'
import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'

const inter = Fira_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: 'Fullstack Developer',
	description: 'This is a portfolio page of Dmitry Borisenko'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={cn(inter.className, stls.body)}>
				<Header className={stls.header} />
				<Sidebar className={stls.sidebar} />
				<main className={stls.main}>{children}</main>
				<Footer className={stls.footer} />
			</body>
		</html>
	)
}
