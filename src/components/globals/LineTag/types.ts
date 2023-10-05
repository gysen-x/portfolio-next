import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface LineTagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	text: string
}
