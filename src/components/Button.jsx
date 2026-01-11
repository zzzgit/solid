import { createMemo, splitProps } from 'solid-js'
import { css } from '@emotion/css'

const defaults = {
	variant: 'yang',
	size: 'md',
	color: null,
	expression: 'primary',
	borderRadius: 'sm',
}

const expressionColorMap = {
	primary: 'blue',
	secondary: 'mauve',
	success: 'green',
	warning: 'orange',
	danger: 'red',
	info: 'cyan',
}

const warmColors = new Set([
	'yellow',
	'orange',
	'amber',
	'gold',
	'bronze',
	'brown',
	'tomato',
	'red',
	'crimson',
	'rose',
	'pink',
	'salmon',
])

const Button = (props)=> {
	const [local, others] = splitProps(props, [
		'children',
		'variant',
		'size',
		'color',
		'expression',
		'class',
		'disabled',
		'loading',
		'borderRadius',
	])

	const validSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
	const validExpressions = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
	const validRadius = ['none', 'sm', 'md', 'lg', 'full']
	const validVariants = ['yang', 'perfect', 'yin', 'outline', 'void']

	const sizeName = createMemo(()=> {
		return validSizes.includes(local.size) ? local.size : defaults.size
	})

	const expressionName = createMemo(()=> {
		return validExpressions.includes(local.expression) ? local.expression : defaults.expression
	})

	const borderRadiusName = createMemo(()=> {
		const keyword = validRadius.includes(local.borderRadius) ? local.borderRadius : defaults.borderRadius
		return `radius-${keyword}`
	})

	const colorName = createMemo(()=> {
		if (local.color){ return local.color }
		return expressionColorMap[expressionName()]
	})

	const solidForeground = createMemo(()=> {
		return warmColors.has(colorName()) ? 'black' : 'white'
	})

	const variantName = createMemo(()=> {
		return validVariants.includes(local.variant) ? local.variant : defaults.variant
	})

	return (
		<button
			class={[
				containerStyle({
					sizeName: sizeName(),
					colorName: colorName(),
					solidForeground: solidForeground(),
					borderRadiusName: borderRadiusName(),
				}),
				sizeName(),
				variantName(),
				expressionName(),
				local.loading && 'loading',
				local.class,
			].filter(Boolean).join(' ')}
			disabled={local.disabled || local.loading}
			aria-busy={local.loading}
			aria-disabled={local.disabled || local.loading}
			{...others}
		>
			{local.children}
		</button>
	)
}

export default Button

const containerStyle = ({
	sizeName, colorName, solidForeground, borderRadiusName,
})=> css`
--yang-foreground: ${solidForeground};
--yang-background: var(--${colorName}-9);
--yang-background-hover: var(--${colorName}-10);
--yang-background-focus: var(--${colorName}-11);
--yin-foreground: var(--${colorName}-11);
--yin-background: var(--${colorName}-3);
--yin-background-hover: var(--${colorName}-4);
--yin-background-focus: var(--${colorName}-5);
--outline-foreground: var(--${colorName}-a11);
--outline-background-hover: var(--${colorName}-a2);
--outline-background-focus: var(--${colorName}-a3);
--outline-border: var(--${colorName}-a7);
--perfect-foreground: var(--${colorName}-11);
--perfect-background: var(--${colorName}-2);
--perfect-background-hover: var(--${colorName}-3);
--perfect-background-focus: var(--${colorName}-4);
--perfect-border-color: var(--${colorName}-6);
--perfect-hover-border-color: var(--${colorName}-7);

height: var(--component-height-${sizeName});
min-height: var(--component-height-${sizeName});
padding: var(--component-padding-${sizeName});
border: none;
border-radius: calc(var(--component-height-${sizeName}) * var(--border-${borderRadiusName}) );
font-size: var(--component-font-size-${sizeName});
cursor: pointer;
user-select: none;

&.yang {
	color: var(--yang-foreground);
	background-color: var(--yang-background);
	&:not(:disabled):hover {
		background-color: var(--yang-background-hover);
	}
	&:not(:disabled):active {
		background-color: var(--yang-background-focus);
	}
	&:not(:disabled):focus-visible {
		outline: 2px solid var(--yang-background);
		outline-offset: 2px;
	}
}
&.yin {
	color: var(--yin-foreground);
	background-color: var(--yin-background);
	&:not(:disabled):hover {
		background-color: var(--yin-background-hover);
	}
	&:not(:disabled):active {
		background-color: var(--yin-background-focus);
	}
	&:not(:disabled):focus-visible {
		outline: 2px solid var(--yin-foreground);
		outline-offset: 2px;
	}
}
&.outline {
	color: var(--outline-foreground);
	border: 1px solid var(--outline-border);
	background-color: transparent;
	&:not(:disabled):hover {
		background-color: var(--outline-background-hover);
	}
	&:not(:disabled):active {
		background-color: var(--outline-background-focus);
	}
	&:not(:disabled):focus-visible {
		outline: 2px solid var(--outline-foreground);
		outline-offset: 2px;
	}
}
&.perfect {
	color: var(--perfect-foreground);
	border: 1px solid var(--perfect-border-color);
	background-color: var(--perfect-background);
	&:not(:disabled):hover {
		background-color: var(--perfect-background-hover);
		border-color: var(--perfect-hover-border-color);
	}
	&:not(:disabled):active {
		background-color: var(--perfect-background-focus);
	}
	&:not(:disabled):focus-visible {
		outline: 2px solid var(--perfect-foreground);
		outline-offset: 2px;
	}
}


&:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

&.loading {
	position: relative;
	opacity: 0.7;
	cursor: progress;
	
	&::after {
		content: '';
		position: absolute;
		width: 16px;
		height: 16px;
		top: 50%;
		left: 50%;
		margin-left: -8px;
		margin-top: -8px;
		border: 2px solid transparent;
		border-top-color: currentColor;
		border-radius: 50%;
		animation: button-loading-spinner 0.6s linear infinite;
	}
}

@keyframes button-loading-spinner {
	from {
		transform: rotate(0turn);
	}
	to {
		transform: rotate(1turn);
	}
}

`
