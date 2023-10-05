import { PixelProjectIconProps } from './types'

export const PixelProjectIcon = ({
	className,
	...rest
}: PixelProjectIconProps) => {
	return (
		<svg
			className={className}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...rest}>
			<rect x='3' y='3' width='18' height='1' fill='currentColor'></rect>
			<rect x='3' y='20' width='18' height='1' fill='currentColor'></rect>
			<rect x='3' y='4' width='1' height='16' fill='currentColor'></rect>
			<rect x='20' y='4' width='1' height='16' fill='currentColor'></rect>
			<rect x='5' y='5' width='4' height='1' fill='currentColor'></rect>
			<rect x='5' y='12' width='4' height='1' fill='currentColor'></rect>
			<rect x='10' y='9' width='4' height='1' fill='currentColor'></rect>
			<rect x='5' y='18' width='4' height='1' fill='currentColor'></rect>
			<rect x='15' y='14' width='4' height='1' fill='currentColor'></rect>
			<rect x='10' y='5' width='4' height='1' fill='currentColor'></rect>
			<rect x='5' y='14' width='4' height='1' fill='currentColor'></rect>
			<rect x='15' y='5' width='4' height='1' fill='currentColor'></rect>
			<rect x='5' y='6' width='1' height='6' fill='currentColor'></rect>
			<rect x='8' y='6' width='1' height='6' fill='currentColor'></rect>
			<rect x='10' y='6' width='1' height='3' fill='currentColor'></rect>
			<rect x='5' y='15' width='1' height='3' fill='currentColor'></rect>
			<rect x='15' y='6' width='1' height='8' fill='currentColor'></rect>
			<rect x='13' y='6' width='1' height='3' fill='currentColor'></rect>
			<rect x='8' y='15' width='1' height='3' fill='currentColor'></rect>
			<rect x='18' y='6' width='1' height='8' fill='currentColor'></rect>
		</svg>
	)
}
