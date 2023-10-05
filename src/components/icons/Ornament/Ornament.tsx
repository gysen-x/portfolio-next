import { OrnamentProps } from './types'

export const Ornament = ({ className, ...rest }: OrnamentProps) => {
	return (
		<svg
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			width='477'
			height='201'
			viewBox='0 0 477 201'
			fill='#33C7A3'
			{...rest}
		>
			<path
				d='M527.561 146.201C529.342 152.212 529.404 154.851 525.969 157.142C508.978 168.474 491.663 179.309 475.418 191.913C465.327 199.742 457.981 198.721 448.214 191.192C431.957 178.663 414.52 168.111 396.471 155.98C375.069 170.408 353.121 185.207 330.784 200.265C318.886 192.388 307.504 185.001 296.258 177.355C287.243 171.23 278.342 164.883 269.503 158.435C266.319 156.112 263.622 156.11 260.401 158.391C244.805 169.438 229.148 180.375 213.429 191.194C209.209 194.098 204.694 196.447 199.738 199.395C176.43 187.979 156.436 169.159 133.054 156.12C121.824 163.742 110.602 171.368 99.369 178.978C90.3443 185.091 81.2527 191.084 72.3 197.333C68.7178 199.832 65.5131 199.387 62.1574 197.056C43.9499 184.402 25.7127 171.801 7.5299 159.1C5.08675 157.393 2.89641 155.214 0.748169 153.39C2.22245 147.628 4.53035 146.819 8.28276 149.434C19.4715 157.234 30.7463 164.876 41.9737 172.609C50.6544 178.589 59.3123 184.614 68.0755 190.685C85.3193 178.543 101.666 166.007 118.863 155.224C134.71 145.287 131.6 143.632 147.978 155.246C164.69 167.097 181.701 178.409 199.424 190.534C220.931 175.701 242.747 160.656 264.935 145.352C286.647 160.229 308.512 175.214 330.768 190.464C352.723 175.441 374.639 160.445 396.697 145.352C418.374 160.337 439.674 175.06 461.627 190.234C483.838 177.335 504.305 159.79 527.561 146.201Z'
				fillOpacity='0.26'
			/>
			<path
				d='M462.137 127.506C456.881 124.129 451.133 120.638 445.564 116.814C431.239 106.975 417.005 96.966 402.712 87.0667C398.51 84.1568 394.9 83.6899 390.064 87.2045C373.198 99.4627 355.863 110.885 338.665 122.548C336.137 124.261 333.391 125.556 330.365 127.258C320.499 120.808 310.495 114.427 300.631 107.775C290.189 100.732 279.809 93.5591 269.547 86.1805C265.889 83.5501 263.176 84.3066 259.648 86.7494C240.864 99.7481 221.893 112.404 202.976 125.153C201.863 125.901 200.64 126.438 199.004 127.326C187.747 119.916 176.367 112.513 165.066 104.955C156.585 99.2811 148.108 93.5831 139.82 87.5578C135.089 84.117 131.022 84.1708 126.208 87.5976C108.689 100.075 90.9883 112.224 73.3075 124.406C71.3909 125.728 69.1604 126.46 66.9982 127.504C46.7934 113.755 26.8046 100.191 6.87017 86.5238C4.93602 85.1968 2.9212 83.5262 1.75056 81.4326C0.965999 80.0255 1.60123 77.5906 1.60123 73.7705C25.8707 86.5618 45.5771 104.935 68.3074 117.996C90.1163 102.927 111.927 87.8572 133.786 72.7528C155.781 87.9649 177.338 102.875 199.613 118.281C221.161 103.247 242.912 88.0687 265.058 72.615C286.784 87.7154 308.314 102.68 330.756 118.279C352.135 103.44 373.916 88.324 396.502 72.647C417.779 87.4719 439.293 102.46 461.618 118.016C483.622 104.909 504.46 88.1265 526.975 73.9462C528.781 81.4685 528.359 82.8735 523.882 86.1107C518.622 89.9146 513.385 93.7647 508.006 97.3372C492.999 107.302 477.926 117.134 462.137 127.506Z'
				fillOpacity='0.26'
			/>
			<path
				d='M199.411 45.6576C221.266 30.5473 242.843 15.6305 264.982 0.324771C286.84 15.4729 308.644 30.5833 330.73 45.8911C352.384 30.8447 373.926 15.874 396.312 0.318665C417.967 15.2173 439.842 30.2658 462.057 45.5498C473.188 38.0436 484.055 30.4554 495.141 23.3124C505.824 16.427 515.279 6.90287 527.391 2.32654C530.599 9.09639 526.739 11.6608 523.608 13.9622C517.825 18.2132 511.754 21.9573 505.813 25.929C493.071 34.4511 480.345 43.0052 467.585 51.4913C465.623 52.7967 463.519 53.8265 461.653 54.8842C441.55 41.2328 421.833 27.8329 402.106 14.455C398.138 11.7646 394.759 11.625 390.31 14.7464C370.753 28.4716 350.829 41.5242 330.593 55.1177C311.255 41.8835 291.853 28.6652 272.517 15.3272C267.58 11.9224 263.681 11.5731 258.161 15.5647C240.161 28.5875 221.54 40.5044 203.143 52.8186C202.025 53.5671 200.784 54.0779 199.331 54.8404C189.436 48.4119 179.409 42.0691 169.534 35.4331C159.081 28.4057 148.666 21.2887 138.457 13.8165C134.275 10.7548 130.87 12.4093 127.428 14.6806C121.468 18.6163 115.707 22.9392 109.78 26.9449C96.2237 36.1076 82.6184 45.1725 68.3634 54.7265C65.7238 53.2836 62.3697 51.7827 59.3071 49.723C42.0615 38.1153 24.8545 26.4339 7.72125 14.6127C5.27114 12.9224 3.12806 10.5133 1.20798 8.06644C0.711301 7.43179 1.32907 5.21843 1.93813 4.07691C2.29966 3.39621 3.82146 2.8674 4.51121 3.17473C7.5633 4.53186 10.6785 5.89303 13.4551 7.835C28.284 18.1992 43.0041 28.767 57.7943 39.1991C60.8657 41.3646 64.0828 43.2605 67.665 45.5598C77.483 38.8879 87.3622 32.2378 97.1855 25.4819C107.298 18.5285 117.461 11.6569 127.395 4.38412C132.196 0.869518 135.968 1.44436 140.731 4.89512C159.002 18.1353 177.564 30.8566 196.031 43.7456C197.124 44.508 198.334 45.0529 199.411 45.6576Z'
				fillOpacity='0.26'
			/>
		</svg>
	)
}