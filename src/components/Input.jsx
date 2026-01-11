import { createMemo, splitProps } from 'solid-js'
import { css } from '@emotion/css'

const defaults = {
	variant: 'outline',
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

const Input = (props)=> {
	const [local, others] = splitProps(props, [
		'variant',
		'size',
		'color',
		'expression',
		'class',
		'disabled',
		'borderRadius',
		'error',
	])

	const validSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
	const validExpressions = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
	const validRadius = ['none', 'sm', 'md', 'lg', 'full']
	const validVariants = ['outline', 'yang', 'flushed']

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
		if (local.error){ return 'red' }
		if (local.color){ return local.color }
		return expressionColorMap[expressionName()]
	})

	const variantName = createMemo(()=> {
		return validVariants.includes(local.variant) ? local.variant : defaults.variant
	})

	return (
		<input
			class={[
				containerStyle({
					sizeName: sizeName(),
					colorName: colorName(),
					borderRadiusName: borderRadiusName(),
				}),
				sizeName(),
				variantName(),
				expressionName(),
				local.error && 'error',
				local.class,
			].filter(Boolean).join(' ')}
			disabled={local.disabled}
			aria-invalid={local.error}
			aria-disabled={local.disabled}
			{...others}
		/>
	)
}

export default Input

const containerStyle = ({
	sizeName, colorName, borderRadiusName,
})=> css`
--outline-foreground: var(--${colorName}-a11);
--outline-background: var(--color-bg-default);
--outline-border: var(--${colorName}-a7);
--outline-border-hover: var(--${colorName}-a8);
--outline-border-focus: var(--${colorName}-9);
--outline-focus-shadow: 0 0 0 3px var(--${colorName}-a3);

--yang-foreground: var(--color-fg-default);
--yang-background: var(--${colorName}-3);
--yang-background-hover: var(--${colorName}-4);
--yang-background-focus: var(--${colorName}-5);

--flushed-foreground: var(--color-fg-default);
--flushed-background: var(--color-bg-default);
--flushed-border: var(--${colorName}-a7);
--flushed-border-hover: var(--${colorName}-a8);
--flushed-border-focus: var(--${colorName}-a9);
--flushed-focus-shadow: var(--${colorName}-a3);

height: var(--component-height-${sizeName});
min-height: var(--component-height-${sizeName});
padding: var(--component-padding-${sizeName});
border-radius: calc(var(--component-height-${sizeName}) * var(--border-${borderRadiusName}) );
font-size: var(--component-font-size-${sizeName});
width: 100%;
outline: none;
transition: all 0.15s ease;

&::placeholder {
	color: var(--color-gray-default);
}

&.outline {
	color: var(--color-fg-default);
	background-color: var(--outline-background);
	border: 1px solid var(--outline-border);
	
	&:not(:disabled):hover {
		border-color: var(--outline-border-hover);
	}
	
	&:not(:disabled):focus {
		border-color: var(--outline-border-focus);
		box-shadow: var(--outline-focus-shadow);
	}

}

&.yang {
	color: var(--yang-foreground);
	background-color: var(--yang-background);
	border: none;
	
	&:not(:disabled):hover {
		background-color: var(--yang-background-hover);
	}
	
	&:not(:disabled):focus {
		background-color: var(--yang-background-focus);
		box-shadow: none;
	}
	
}

&.flushed {
	color: var(--flushed-foreground);
	background-color: var(--flushed-background);
	border: none;
	border-bottom: 1px solid var(--flushed-border);
	border-radius: 0;
	
	&:not(:disabled):hover {
		border-bottom-color: var(--flushed-border-hover);
	}
	
	&:not(:disabled):focus {
		border-bottom-color: var(--flushed-border-focus);
		box-shadow: 0 2px 0 0 var(--flushed-focus-shadow);
	}
	
}


&:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
`
