import stls from './AlphaButton.module.scss'
import cn from 'classnames'
import { AlphaButtonProps } from './types'
import { GitHubIcon } from '@/components/icons'

export const AlphaButton = ({ text, className, ...rest }: AlphaButtonProps) => {
	const firstPart = 'Contact'
	const secondPart = 'Me'

	return (
		<button
			data-text='Awesome'
			className={cn(className, stls.button)}
			{...rest}
		>
			<span className={cn(stls.span, stls.leftSpan)}>{firstPart}</span>
			<span className={cn(stls.span, stls.rightSpan)}>
				{secondPart}
				<svg viewBox='0 0 46 16' height='10' width='30' id='arrow-horizontal'>
					<path
						transform='translate(30)'
						d='M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z'
						data-name='Path 10'
						id='Path_10'
					></path>
				</svg>
			</span>
		</button>
	)
}
