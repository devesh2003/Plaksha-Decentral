import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const Background = (props) => (
  <Svg
    width={428}
    height={738}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={214}
      cy={347}
      r={233.929}
      stroke="#4F5178"
      strokeOpacity={0.48}
      strokeWidth={56.143}
    />
    <Circle
      cx={214}
      cy={332}
      r={362.5}
      stroke="#4F5178"
      strokeOpacity={0.48}
      strokeWidth={87}
    />
  </Svg>
)

export default Background
