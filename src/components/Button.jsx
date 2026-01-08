import { splitProps } from 'solid-js'
import { css, cx } from '@emotion/css'

// Base button styles
const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
  border: none;
  outline: none;
  user-select: none;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid;
    outline-offset: 2px;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`

// Variant styles
const variantStyles = {
	solid: css`
    background-color: #09090b;
    color: #fafafa;

    &:hover:not(:disabled) {
      background-color: #18181b;
    }

    &:active:not(:disabled) {
      background-color: #27272a;
    }

    &:focus-visible {
      outline-color: #09090b;
    }
  `,
	outline: css`
    border: 1px solid #e4e4e7;
    background-color: transparent;
    color: #09090b;

    &:hover:not(:disabled) {
      background-color: #f4f4f5;
    }

    &:active:not(:disabled) {
      background-color: #e4e4e7;
    }

    &:focus-visible {
      outline-color: #09090b;
    }
  `,
	ghost: css`
    background-color: transparent;
    color: #09090b;

    &:hover:not(:disabled) {
      background-color: #f4f4f5;
    }

    &:active:not(:disabled) {
      background-color: #e4e4e7;
    }

    &:focus-visible {
      outline-color: #09090b;
    }
  `,
	link: css`
    background-color: transparent;
    color: #09090b;
    text-decoration: underline;
    text-underline-offset: 4px;

    &:hover:not(:disabled) {
      text-decoration: none;
    }

    &:focus-visible {
      outline-color: #09090b;
    }
  `,
	destructive: css`
    background-color: #ef4444;
    color: #fafafa;

    &:hover:not(:disabled) {
      background-color: #dc2626;
    }

    &:active:not(:disabled) {
      background-color: #b91c1c;
    }

    &:focus-visible {
      outline-color: #ef4444;
    }
  `,
}

// Size styles
const sizeStyles = {
	xs: css`
    height: 1.75rem;
    padding: 0 0.75rem;
    font-size: 0.75rem;
    line-height: 1rem;
  `,
	sm: css`
    height: 2rem;
    padding: 0 0.875rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
	md: css`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
	lg: css`
    height: 2.75rem;
    padding: 0 1.125rem;
    font-size: 1rem;
    line-height: 1.5rem;
  `,
	xl: css`
    height: 3rem;
    padding: 0 1.25rem;
    font-size: 1rem;
    line-height: 1.5rem;
  `,
	'2xl': css`
    height: 3.75rem;
    padding: 0 1.75rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  `,
}

const Button = (props)=> {
	const [local, others] = splitProps(props, [
		'children',
		'variant',
		'size',
		'class',
		'className',
	])

	const variant = ()=> local.variant || 'solid'
	const size = ()=> local.size || 'md'

	const buttonClass = ()=> {
		return cx(baseButtonStyles, variantStyles[variant()], sizeStyles[size()], local.class || local.className)
	}

	return (
		<button class={buttonClass()} {...others}>
			{local.children}
		</button>
	)
}

export default Button
