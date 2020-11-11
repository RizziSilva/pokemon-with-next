import React from 'react'

export function LinkButton(props) {
  const { onCLick, href } = props
  return React.forwardRef((propsRef, ref) => {
    return (
      <a onClick={onCLick} href={href}>
        Click Me
      </a>
    )
  })
}
