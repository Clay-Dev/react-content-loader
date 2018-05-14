//@flow
import * as React from 'react'

type Props = {
  x: number,
  y: number,
  radius: number,
  style: object
}

const Circle = (props: Props): React.Element<*> => {
  const { x = 0, y = 0, radius = 50, style = {} } = props
  return <circle cx={x} cy={y} r={radius} style={style} />
}

export default Circle
