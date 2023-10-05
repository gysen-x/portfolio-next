import { ButtonHTMLAttributes } from 'react'

export interface AlphaButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}
