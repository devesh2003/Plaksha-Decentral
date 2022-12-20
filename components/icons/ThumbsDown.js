import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const ThumbsDown = (props) => (
  <Svg
    width={85}
    height={85}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={39.628} cy={39.5} r={30.5} fill="url(#b)" />
    </G>
    <Path
      fill="url(#c)"
      fillOpacity={0.9}
      d="M20.859 19.949h36.756v39.103H20.859z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={-47.877}
        y1={-22.589}
        x2={39.508}
        y2={102.638}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#474C72" />
      </LinearGradient>
      <Pattern
        id="c"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#d" transform="matrix(.01111 0 0 .01044 0 .03)" />
      </Pattern>
      <Image
        id="d"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAD2ElEQVR4nO2cz4tXVRjGP68yYKigRosSV6EFbiqxkRpBhMBEoUX+GqVF0aJF+AeEgou2/QEVbSoVBFu4cRNBi1RmJl2ISGoFUaYotZhsJtLHxXUhMuR9zz3n/vj2fvbPc895ON/3e+459xwIgiAIgiAIgiAIgiAIgiD4X2NtPUjSamArMAE8D6wDlgLL22rDAvwFXAS+BD42s/lSDyoatKQxYC/wDrAZWFTyeQ25AOwws19LmBcJWtIi4G3gMLCmxDMKcQHYVGJkZx9hkp4DvgM+YVghA7wAvFvCOGvQkvYB08B4Tt+W2V/CNFvpkHQQ+Ih+1+E6zJpZ9j9od9CSlLsRfcPMsv93DX30DYYIuiUi6AWQdErSpKTFuTyjRv8354E9ZnalqVEE/XhuAJubhh1B12OG6o3x31SDqNH12AC82cQggq7PvibiCLo+LzcRR9D1WdVEHEHX53YTcQRdn3NNxBF0fY42Ecc8uh5TVPPoe6kGMaLr8RUNs4oRXZ8ZYK+ZXU0RR9A+bgCvmtk1rzCC9jMDjJvZXY8oarSfDcAuryiCTsO9Ux5Bp7HRK4ig01jpFUTQaVz3CiLoNM57BRF0Gl94BTGP9nMGmPCue8SI9vELcCBlcSmC9vGWmf2YIoygfXwu6dkUYdRoP2epanSsdRRmE/CGVxRBp3HAK4ig03jRK4ganca8mS3xCGJEp3HLK4ig05jyCiLoNI57BVGj/UxT7Rm6XsOTj3lJWgo8BbwEvEa1j/Zkqt9AuEkV8s9eYc4DnU8A7wGHgBW5fHvENLDbzH5KEWc/uChpDdV3ahO5vVvmLtV3HFPAMeBEk0/CiiBpyYMjZDlZ23W/mlBk1mFmc8Aeqp9bLrZn9GqdYtM7M7sDTAJzmSxfz+Qzmkg6kql0zKma6QQLIWmZpN8zhb2z6/6kUvzN0MxmgQ8z2W3L5DOaSBqTdDXDiL7UdV96j6T9GYKWpGe67ksKbS4qHQW+z+CzJYNH67QWtJkJ+CCD1SsZPFqn1WVSMzsNfN3QZn2Otow8kjZKutegRt/sug+DQdKJBkEn35nRJa1dAvswktZRXb46liC/Y2aDe0PsZCvLzH4APkuUF7sRdySR9LSk2YTS4f7avg90tjlrZteBTxOkgxzRXe+CzyRo/szeihboOuiUc9VJ3yd3TddBp9wl5z6H3Qc6DdrMbgF/OGXflmhLaboe0eArH/8A35RqSEn6ELSnfJx8sJEwOIYU9DxwpGRDStKHoOuUDgHvm9nl0o0ZWSSNP+ZN8Lakya7bOXgkrXok2L8l/SbptKSDktw3CfSR+1rDTMo/RnAjAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
)

export default ThumbsDown
