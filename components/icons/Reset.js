import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const Reset = (props) => (
  <Svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h35v35H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.01111)" />
      </Pattern>
      <Image
        id="b"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default Reset
