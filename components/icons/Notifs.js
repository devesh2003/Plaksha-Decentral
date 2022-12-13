import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const Notifs = (props) => (
  <Svg
    width={42}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={17} cy={18} r={17} fill="#F37E7E" fillOpacity={0.91} />
    <Circle
      cx={17}
      cy={18}
      r={16.685}
      stroke="#F37E7E"
      strokeOpacity={0.4}
      strokeWidth={0.63}
    />
    <Path
      d="M10.104 22.352v-2.064L18.168 8.72h3.312v11.256h2.232v2.376H21.48V26h-2.688v-3.648h-8.688Zm8.808-10.848-5.664 8.472h5.664v-8.472Z"
      fill="#fff"
    />
  </Svg>
)

export default Notifs
