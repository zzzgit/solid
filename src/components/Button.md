# Button Component

A customizable button component for SolidJS applications with multiple variants, sizes, expressions, and border radius options.

## Import

```jsx
import Button from './components/Button'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `JSX.Element` | - | The content to display inside the button |
| `variant` | `'yang' \| 'yin' \| 'perfect' \| 'outline' \| 'void'` | `'yang'` | The visual style variant of the button |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `'md'` | The size of the button |
| `color` | `string` | - | The color theme (overrides expression color). Uses CSS custom properties |
| `expression` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | Semantic expression that maps to a default color |
| `borderRadius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'sm'` | The border radius style |
| `class` | `string` | - | Additional CSS classes to apply |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether to show a loading spinner |
| ...others | - | - | All other props are spread to the native `<button>` element |

## Expressions

The `expression` prop provides semantic meaning and maps to default colors:

- `'primary'` → blue
- `'secondary'` → mauve
- `'success'` → green
- `'warning'` → orange
- `'danger'` → red
- `'info'` → cyan

```jsx
<Button expression="primary">Primary</Button>
<Button expression="success">Success</Button>
<Button expression="danger">Danger</Button>
```

## Variants

### Yang (default)
A filled button with solid background color. Best for primary actions.

```jsx
<Button variant="yang">Click me</Button>
```

### Yin
A button with a subtle background. Good for secondary actions.

```jsx
<Button variant="yin">Click me</Button>
```

### Perfect
A button with a border and subtle background. Useful for balanced tertiary actions.

```jsx
<Button variant="perfect">Click me</Button>
```

### Outline
A button with a transparent background and colored border.

```jsx
<Button variant="outline">Click me</Button>
```

### Void
A minimal button variant with no background or border.

```jsx
<Button variant="void">Click me</Button>
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

Use the `color` prop to override the expression's default color:

```jsx
<Button color="blue">Blue Button</Button>
<Button color="red">Red Button</Button>
<Button expression="success" color="red">Override to Red</Button>
```

### Required CSS Variables

For each color, the following CSS custom properties must be defined based on the variant:

**Yang variant:**
- `--{color}-9`, `--{color}-10`, `--{color}-11`

**Yin variant:**
- `--{color}-3`, `--{color}-4`, `--{color}-5`, `--{color}-11`

**Perfect variant:**
- `--{color}-2`, `--{color}-3`, `--{color}-4`, `--{color}-6`, `--{color}-7`, `--{color}-11`

**Outline variant:**
- `--{color}-a7`, `--{color}-a11`, `--{color}-a2`, `--{color}-a3`

Size-related variables:
- `--component-height-{size}`
- `--component-padding-{size}`
- `--component-font-size-{size}`

## Border Radius

Control the button's border radius with the `borderRadius` prop:

```jsx
<Button borderRadius="none">Sharp Edges</Button>
<Button borderRadius="sm">Slightly Rounded (default)</Button>
<Button borderRadius="md">Rounded</Button>
<Button borderRadius="lg">Very Rounded</Button>
<Button borderRadius="full">Pill Shape</Button>
```

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
- Outline color varies by variant:
  - Yang: matches the button background
  - Yin: matches the button text color
  - Perfect: matches the button text color
  - Outline: matches the button text color

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
  variant="yang" 
  size="lg" 
  expression="primary"
  onClick={handleSubmit}
>
  Submit
</Button>
```

### Success action button

```jsx
<Button 
  expression="success"
  variant="perfect"
  onClick={handleApprove}
>
  Approve
</Button>
```

### Danger action button

```jsx
<Button 
  variant="outline" 
  expression="danger"
  onClick={handleDelete}
>
  Delete
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

### With custom classes and styling

```jsx
<Button 
  class="my-custom-class"
  color="green"
  borderRadius="full"
>
  Custom Styled Button
</Button>
```

## Styling

The component uses Emotion CSS for styling with dynamic CSS custom properties based on the color, size, and variant props. All styling is scoped to the component.

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
- If an invalid variant is provided, the component defaults to `'yang'`
- If an invalid expression is provided, the component defaults to `'primary'`
- When `loading` is `true`, the button is automatically disabled
- All native button attributes (like `type`, `form`, etc.) can be passed through
- Focus styles are automatically applied and improve keyboard accessibility
- Warm colors (yellow, orange, red, pink, etc.) use black text, while cool colors use white text in the yang variant
