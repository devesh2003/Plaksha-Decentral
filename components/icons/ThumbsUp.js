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

const ThumbsUp = (props) => (
  <Svg
    width={85}
    height={85}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={39.5} cy={39.5} r={30.5} fill="url(#b)" />
    </G>
    <Path
      fill="url(#c)"
      fillOpacity={0.9}
      d="M20.731 19.949h36.756v39.103H20.731z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={-48.006}
        y1={-22.589}
        x2={39.38}
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAD0klEQVR4nO3cT6hVVRTH8e8WtUwtMylsIvRHaqimT80iCGpSEFJS+ghsIjjSSRBEOVHHNWxaGU5qEiQOaiTZ00qoHPVnEOXjQQ5MKgX9NThduIH5zlpn77PvO63P+K519/m9/da775x7DoQQQggh/C9IWq1/+0vSBUknJR2UdFftNQ6CpCnd3EVJ07XXueBJmp4n6JF9tdfaxaLaCwAeaPm6tyU9XHQlBU1C0A+2fN1S4FDJhQyapJmWo0OSrkhaWXvNHpOwo9uODmh29ROlFlJS1aAlrQHuNJY9XmItpdXe0W3n87j7s6+iB7WDtoyNkfuyr6IHtYPe5KhZlX0VQyZpraTLhk8cIxdqr92j5o5+E1juqLsl90L6kGq8qaT1wLfAEkf5Hyklzw+oqlo7+jC+kGGB7ujeSdos6bpjNo/M1T4Gjxo7+ijdRtZ3uRbSp16DlvQ08GTHNhH0zUhaBBzJ0OpUhh7DJWlPh7k87t7axzKxJC2V9H2GkM/XPhavvkbHPvKcDPosQ49hkrRC0myG3SxJz9Y+Hq8+dvSrwD0Z+lwBPs3QZ3gkrZf0Z6bdfKL28XRRbEdLug34ALg1U8tPMvUZDknLJH2caSePeK7GTIzsZ+8krQOOAdtz9+7ZNWAOOEvzm3k8pXTd2yxb0P+Miv3A68AdufpOkK+AF1JKP3qK3UFLWgHcDWwEngKex35Fe6GZA7amlH6yFpqDliRrzcB8CWyxjpHaF2cXok3ALmtRBO3zkrUggvZ5xFoQQfuY70KIoH1mrQURtM/X1oII2uc9a0F8jrb7HNgRn6PL+hmY9pzziKBtXvae64igbd6V5Lr2GTPa7jTNjL5mKYodbbcVeM5aFEH7mG+ZjqB9NlgLYkb7XE0pmb6nHTva56K1IIL2OWMtiKB93rcWxIy2OwtMxbmOsmaBXXGuo6wzwKOerxpABN3Wa8A27wkliKDb2gl0+tsUQbezmeabWG4RdHvm73KMi6Dbm+pSHEG31+mJkhF0e791KY6g2/uiS3EE3d6xLsVxrqOdGWC79TrhuNjR8/sV2N0lZIig5zMDPJZS+qFro8UZFjNEH9HM5A+73Ik1Lmb0DaSUst8WGKOjJxF0T8xBp/8AHACyzLPKLpVomm1Hp5TeAnYDv+fqWUmRp9xkHR0ppeM0dyydztm3Z+Yr3G0UeWSmpATsBd4A1pV4j0LO0Vzhvpq7cdFnk0paArwIvELzJPNJ/uN7DngmpfRLiea9PQRW0lqahwvuAB6ieUj3SuD2vtZwA5eBb2j+OXmnxE4OIYQQQgghhIn3N0cYQjVKzyK1AAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
)

export default ThumbsUp
