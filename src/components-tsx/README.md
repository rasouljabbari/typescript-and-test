# Why Typescript + React

With static type checking, you get to learn about potential bugs as you're typing the code, then heading to the browser
and figuring out at runtime

Provides a way to describe the shape of an object hence providing better documentation and autocomplete.

Makes maintenance and refactoring of large code bases much easier.

--------------------------------------------------------------------------------------------------------------

## Install TypeScript :

npx create-react-app my-app --template typescript

--------------------------------------------------------------------------------------------------------------

### types

#### Basic types

* name: `string`,
* messageCount: `number`,
* isLoggedIn: `boolean`
* Object
  `name: {
  first: string,
  last: string
  }`
* Array
  `names: {
  first: string,
  last: string
  }[]`
* `type Name = {
  name: {
  first: string,
  last: string
  }
  }`
* `names: Name[]`

#### Advance type

* `type StatusProps = {
  status: "loading" | "success" | "error"
  }
  `
*
`type HeadingProps = {
children: string
}`
*
`type OscarProps = {
children: ReactNode
}`
* `type ButtonProps = {
  handleClick : (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
  }`

##### I can use Props Types and Tips :

* first create a file *.types.ts

* then `export type Name = {
  first: string,
  last: string
  }`
  *`export type PersonProps = {
  name: Name
  }`
* then import {Name} from *
* `type PersonListProps = {
  names: Name[]
  }`

### Hooks

#### useState

`type AuthUser = {
name: string,
email: string
}`

`const [user, setUser] = useState<AuthUser | null>(null)`

`const [user, setUser] = useState<AuthUser>({} as AuthUser)`

#### useReducer

`type UpdateAction = {
type : 'increment' | 'decrement'
payload: number
}`

`type ResetAction = {
type: 'reset'
}`

`type CounterAction = UpdateAction | ResetAction`

#### useRef

`const interValRef = useRef<number | null>(null)`

`const inputRef = useRef<HTMLInputElement>(null!)`

### Class

`export class Counter extends Component<CounterProps, CounterState>`

### Component Prop

`type PrivateProps = {
isLoggedIn: boolean,
component: React.ComponentType<ProfileProps>
}`

`export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {}`

`<Private isLoggedIn={true} component={Profile}/>`

### Generic Props

[https://www.carlrippon.com/React-generic-props/](https://www.carlrippon.com/React-generic-props/)

`type ListProps<T> = {
items: T[]
onClick: (value: T) => void
}`

`export const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {}`

### Restricting Props

* go to `RandomNumber.tsx` file
* App.tsx =>
* ###### `<RandomNumber value={10} isPositive isZero={false} isNegative={false}/>` get error
* ###### `<RandomNumber value={10} isPositive isZero/>` get error
* ###### `<RandomNumber value={10} isPositive/>` **its ok**

### Template Literals

`type HorizontalPosition = 'left' | 'center' | 'right'`

`type VerticalPosition = 'top' | 'center' | 'bottom'`

`type ToastType = {
position:
| Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
| 'center'
}`
 
`<Toast position={'left-top'}/>`

`<Toast position={'center'}/>`

#### html
`type ButtonProps = {
variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>`

`export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {}`

`<CustomButton variant={'primary'} onClick={() => console.log('clicked')}><span>Click Me</span></CustomButton>`

### (use from another component with types)

`export const CustomComponent = (props: React.ComponentProps<type of Greet>) => {}`

**********************************************************