import React, { useMemo } from "react";
import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Path } from "react-native-svg";
import * as S from "./styles";

type IconComponent = React.FC<{ color: string }>;

const SVG_WIDTH = 460;
const SVG_HEIGHT = 117;
const TARGET_PHONE_WIDTH = 375; // iPhone 7 (2016)

const TabBar: React.FC<BottomTabBarProps> = ({
  state: { routes, index },
  descriptors,
  navigation: { emit, navigate },
}) => {
  const [left, middle, right] = useMemo(() => {
    const arr = routes.map((route, i) => ({
      key: route.key,
      Icon: descriptors[route.key].options.tabBarIcon as IconComponent,
      focused: index === i,
      onPress() {
        const event = emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });
        if (index !== i && !event.defaultPrevented) navigate(route.name);
      },
    }));
    const mid = arr.length / 2;
    return [arr.slice(0, mid), arr[mid - 0.5], arr.slice(mid + 0.5)] as const;
  }, [routes, descriptors, index, emit, navigate]);

  const width = Math.ceil(useWindowDimensions().width);

  return (
    <S.Wrapper>
      <S.SVGWrapper
        height={(width / SVG_WIDTH) * SVG_HEIGHT}
        width={width}
        preserveAspectRatio="xMinYMin slice"
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_WIDTH}`}
      >
        <Path
          fill="#2F7853"
          // Importante: deve ser "all-relative path" (https://codepen.io/leaverou/pen/RmwzKv)
          d="M460,0v117h-460v-117c0,22.091,17.909,40,40,40h103c12.46,0,23.763,4.954,32.047,13h0.003l0.105,0.106c0.249,0.243,0.496,0.49,0.739,0.739l21.62,21.62c17.965,17.964,47.09,17.964,65.054,0l20.262,-20.262c8.42,-9.335,20.61,-15.203,34.17,-15.203h103c22.091,0,40,-17.909,40,-40z"
        />
      </S.SVGWrapper>
      <S.CircleButton
        color={middle?.focused ? "#fcfcfc" : "#fdd231"}
        onPress={middle?.onPress}
        size={(width / TARGET_PHONE_WIDTH) * 64}
        bottom={(width / TARGET_PHONE_WIDTH) * 10}
      >
        {middle && <middle.Icon color="#2f7853" />}
      </S.CircleButton>
      <S.Background bottom={(width / TARGET_PHONE_WIDTH) * 20}>
        {left.map(({ Icon, focused, onPress, key }) => (
          <TouchableOpacity onPress={onPress} key={key}>
            <Icon color={focused ? "#fcfcfc" : "#94bcad"} />
          </TouchableOpacity>
        ))}
        {left.map((_, i) => (
          <View key={i} />
        ))}
        {right.map(({ Icon, focused, onPress, key }) => (
          <TouchableOpacity onPress={onPress} key={key}>
            <Icon color={focused ? "#fcfcfc" : "#94bcad"} />
          </TouchableOpacity>
        ))}
      </S.Background>
    </S.Wrapper>
  );
};

export default TabBar;
