// Position props can be one of
// "left-center" | "left-up" | "left-bottom" | "center" | "center-top" |
// "center-bottom" | "right-center" | "right-top" | "right-bottom"

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastType = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}

export const Toast = ({ position }: ToastType) => {
  return <div>Toast Notification Position - {position}</div>
}
