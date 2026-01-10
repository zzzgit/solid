# Button Component

A customizable button component for SolidJS applications with multiple variants, sizes, and color options.

## Import

```jsx
import Button from './components/Button'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `JSX.Element` | - | The content to display inside the button |
| `variant` | `'solid' \| 'outline' \| 'surface'` | `'solid'` | The visual style variant of the button |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `'md'` | The size of the button |
| `color` | `string` | `'blue'` | The color theme (uses CSS custom properties) |
| `class` | `string` | - | Additional CSS classes to apply |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether to show a loading spinner |
| ...others | - | - | All other props are spread to the native `<button>` element |

## Variants

### Solid (default)
A filled button with solid background color. Best for primary actions.

```jsx
<Button variant="solid">Click me</Button>
```

### Outline
A button with a transparent background and colored border. Good for secondary actions.

```jsx
<Button variant="outline">Click me</Button>
```

### Surface
A button with a subtle background and border. Useful for tertiary actions.

```jsx
<Button variant="surface">Click me</Button>
```

## Sizes

Available sizes: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

```jsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="xxl">2X Large</Button>
```

## Colors

The component accepts any color name that has corresponding CSS custom properties defined in your color system:

```jsx
<Button color="blue">Blue Button</Button>
<Button color="red">Red Button</Button>
<Button color="green">Green Button</Button>
```

### Required CSS Variables

For each color, the following CSS custom properties must be defined:

- `--{color}-9`, `--{color}-10`, `--{color}-11` (for solid variant)
- `--{color}-a7`, `--{color}-a11`, `--{color}-a2`, `--{color}-a3` (for outline variant)
- `--{color}-2`, `--{color}-3`, `--{color}-4`, `--{color}-6`, `--{color}-7`, `--{color}-11` (for surface variant)

Size-related variables:
- `--component-height-{size}`
- `--component-padding-{size}`
- `--component-font-size-{size}`

## States

### Disabled

```jsx
<Button disabled>Disabled Button</Button>
```

When disabled:
- Opacity is reduced to 0.5
- Cursor changes to `not-allowed`
- Button is not clickable
- `aria-disabled="true"` is set for accessibility

### Loading

```jsx
<Button loading>Loading...</Button>
```

When loading:
- A spinning animation appears
- Opacity is reduced to 0.7
- Cursor changes to `progress`
- Button is automatically disabled
- `aria-busy="true"` is set for accessibility

### Focus

When the button receives focus (via keyboard or click):
- A 2px outline appears with 2px offset
- Solid variant: outline color matches the button background
- Outline variant: outline color matches the button text color
- Surface variant: outline color matches the button text color

```jsx
<Button>Tab to focus</Button>
```

## Usage Examples

### Basic button

```jsx
<Button onClick={() => console.log('Clicked!')}>
  Click me
</Button>
```

### Primary action button

```jsx
<Button 
  variant="solid" 
  size="lg" 
  color="blue"
  onClick={handleSubmit}
>
  Submit
</Button>
```

### Secondary action button

```jsx
<Button 
  variant="outline" 
  onClick={handleCancel}
>
  Cancel
</Button>
```

### Loading state

```jsx
<Button 
  loading={isSubmitting()} 
  disabled={isSubmitting()}
>
  {isSubmitting() ? 'Saving...' : 'Save'}
</Button>
```

### With custom classes

```jsx
<Button 
  class="my-custom-class"
  color="green"
>
  Custom Styled Button
</Button>
```

## Styling

The component uses Emotion CSS for styling with dynamic CSS custom properties based on the color and size props. All styling is scoped to the component.

### Animation

The loading state includes a spinning animation defined as:

```css
@keyframes button-loading-spinner {
  from { transform: rotate(0turn); }
  to { transform: rotate(1turn); }
}
```

## Notes

- If an invalid size is provided, the component defaults to `'md'`
- When `loading` is `true`, the button is automatically disabled
- All native button attributes (like `type`, `form`, etc.) can be passed through
- Focus styles are automatically applied and improve keyboard accessibility
