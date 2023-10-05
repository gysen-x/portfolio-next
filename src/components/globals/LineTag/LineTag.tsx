import stls from './LineTag.module.scss'
import cn from 'classnames'
import { LineTagProps } from './types'

export const LineTag = ({ text, className, ...rest }: LineTagProps) => {
	return (
		<span className={cn(className, stls.lineTag)} {...rest}>
			{text}
		</span>
	)
}
