import React, { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Path } from "react-native-svg";
import * as S from "./styles";

type IconComponent = React.FC<{ color: string }>;

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
  }, [routes, descriptors]);

  return (
    <S.Wrapper>
      <S.SVGWrapper
        height="100"
        width="100%"
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 100 100" // viewBox="0 0 [largura do SVG] [largura do SVG]"
      >
        <Path
          fill="#2F7853"
          d="M0 26.2175V0.782715C0 5.58519 3.89318 9.47837 8.69565 9.47837H31.1016C33.8045 9.48224 36.2561 10.5585 38.0537 12.3044H38.0543L38.0795 12.3297C38.1321 12.3811 38.1842 12.4332 38.2356 12.4858L42.9379 17.188C46.8432 21.0933 53.1748 21.0933 57.08 17.188L61.4855 12.7826C63.3126 10.757 65.9566 9.48258 68.8984 9.47837H91.3044C96.1068 9.47837 100 5.58519 100 0.782715V26.2175H0Z"
        />
      </S.SVGWrapper>
      <S.CircleButton
        color={middle?.focused ? "#fcfcfc" : "#fdd231"}
        onPress={middle?.onPress}
      >
        {middle && <middle.Icon color="#2f7853" />}
      </S.CircleButton>
      <S.Background>
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
