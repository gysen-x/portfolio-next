import {
	DiscordIcon,
	GitHubIcon,
	PixelManDescIcon,
	PixelManHeightIcon,
	PixelManIcon,
	PixelProjectIcon,
	TelegramIcon,
	XIcon
} from '@/components/icons'
import { sidebarLinksType } from './types'

export const navList: sidebarLinksType[] = [
	{
		name: 'Home',
		link: '/',
		icon: <PixelManIcon />
	},
	{
		name: 'My projects',
		link: '/',
		icon: <PixelManDescIcon />
	}
	// {
	// 	name: 'Technology stack',
	// 	link: '/',
	// 	icon: <PixelProjectIcon />
	// }
	// {
	// 	name: 'Experience',
	// 	link: '/',
	// 	icon: <PixelManHeightIcon />
	// }
]

export const socialsList: sidebarLinksType[] = [
	{
		name: 'GitHub',
		link: 'https://github.com/gysen-x',
		icon: <GitHubIcon />
	},
	{
		name: 'Discord',
		link: '/',
		icon: <DiscordIcon />
	},
	{
		name: 'X',
		link: '/',
		icon: <XIcon />
	},
	{
		name: 'Home',
		link: '/',
		icon: <TelegramIcon />
	}
]
