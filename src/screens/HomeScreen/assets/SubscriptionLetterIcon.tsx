import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

import { Colors } from "@/constants/theme";

export function SubscriptionLetterIcon() {
  return (
    <Svg fill="none" height={24} viewBox="0 0 32 24" width={32}>
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id="subscriptionLetterBody"
          x1={16}
          x2={31.8085}
          y1={6.69605}
          y2={29.7859}
        >
          <Stop offset={0} stopColor={Colors.light.subscriptionIconStart} />
          <Stop offset={1} stopColor={Colors.light.subscriptionIconEnd} />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id="subscriptionLetterFlap"
          x1={16}
          x2={28.3343}
          y1={0.000000566739}
          y2={21.4203}
        >
          <Stop offset={0} stopColor={Colors.light.subscriptionIconStart} />
          <Stop offset={1} stopColor={Colors.light.subscriptionIconEnd} />
        </LinearGradient>
      </Defs>

      <Path
        d="M18.6743 15.5892C17.8782 16.12 16.9534 16.4005 16 16.4005C15.0466 16.4005 14.1219 16.12 13.3258 15.5892L0.213062 6.84717C0.140312 6.79867 0.0694375 6.74811 0 6.69611V21.0209C0 22.6633 1.33281 23.9667 2.94581 23.9667H29.0541C30.6965 23.9667 31.9999 22.6339 31.9999 21.0209V6.69604C31.9304 6.74817 31.8594 6.79886 31.7864 6.84742L18.6743 15.5892Z"
        fill="url(#subscriptionLetterBody)"
      />
      <Path
        d="M1.25312 5.287L14.3658 14.0291C14.8622 14.3601 15.4311 14.5255 15.9999 14.5255C16.5689 14.5255 17.1378 14.36 17.6342 14.0291L30.7469 5.287C31.5316 4.76419 32 3.88919 32 2.94481C32 1.321 30.6789 0 29.0552 0H2.94481C1.32106 0.0000625 0 1.32106 0 2.94637C0 3.88919 0.4685 4.76419 1.25312 5.287Z"
        fill="url(#subscriptionLetterFlap)"
      />
    </Svg>
  );
}
