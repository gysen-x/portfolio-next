import { PixelManHeightIconProps } from './types'

export const PixelManHeightIcon = ({
	className,
	...rest
}: PixelManHeightIconProps) => {
	return (
		<svg
			className={className}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...rest}>
			<rect x='6' y='2' width='1' height='4' fill='currentColor'></rect>
			<rect x='9' y='2' width='1' height='4' fill='currentColor'></rect>
			<rect x='7' y='2' width='2' height='1' fill='currentColor'></rect>
			<rect x='7' y='5' width='2' height='1' fill='currentColor'></rect>
			<rect x='4' y='7' width='8' height='1' fill='currentColor'></rect>
			<rect x='5' y='8' width='1' height='14' fill='currentColor'></rect>
			<rect x='10' y='8' width='1' height='14' fill='currentColor'></rect>
			<rect x='6' y='15' width='4' height='1' fill='currentColor'></rect>
			<rect x='3' y='8' width='1' height='6' fill='currentColor'></rect>
			<rect x='12' y='8' width='1' height='6' fill='currentColor'></rect>
			<rect x='15' y='3' width='6' height='1' fill='currentColor'></rect>
			<rect x='18' y='6' width='3' height='1' fill='currentColor'></rect>
			<rect x='15' y='9' width='6' height='1' fill='currentColor'></rect>
			<rect x='18' y='12' width='3' height='1' fill='currentColor'></rect>
			<rect x='15' y='15' width='6' height='1' fill='currentColor'></rect>
			<rect x='18' y='18' width='3' height='1' fill='currentColor'></rect>
			<rect x='15' y='21' width='6' height='1' fill='currentColor'></rect>
		</svg>
	)
}
