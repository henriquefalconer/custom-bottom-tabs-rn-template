import React, { useMemo, useState } from "react";
import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Path } from "react-native-svg";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { MotiView } from "moti";
import Cart from "../Cart";
import * as S from "./styles";

type IconComponent = React.FC<{ color: string }>;

const SVG_WIDTH_SRC = 460;
const SVG_HEIGHT_SRC = 117;
const TARGET_PHONE_WIDTH = 375; // iPhone 7 (2016)

const CART_HEIGHT_SCALE = 0.875;

const springOptions = { damping: 15, mass: 0.48 };
const timingOptions = { duration: 300 };

const hitSlop = { top: 10, bottom: 10, left: 20, right: 20 };

const TabBar: React.FC<BottomTabBarProps> = ({
  state: { routes, index },
  descriptors,
  navigation: { emit, navigate },
}) => {
  const [left, right] = useMemo(() => {
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
    return [arr.slice(0, mid), arr.slice(mid)] as const;
  }, [routes, descriptors, index, emit, navigate]);

  const [cartFocused, setCartFocused] = useState(false);

  const dimensions = useWindowDimensions();
  const width = Math.ceil(dimensions.width);
  const height = Math.ceil(dimensions.height);

  const svgWidth = width;
  const svgHeight = (width / SVG_WIDTH_SRC) * SVG_HEIGHT_SRC;

  const TABS_OPEN_HEIGHT = height * CART_HEIGHT_SCALE;
  const TABS_CLOSED_HEIGHT = svgHeight;

  const tabsPositionY = useSharedValue(TABS_CLOSED_HEIGHT);
  const animatedStyle = useAnimatedStyle(() => ({
    height: tabsPositionY.value,
  }));

  const onPanHandlerStateChange = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      (ctx as any).startY = tabsPositionY.value;
    },
    onActive: (event, ctx) => {
      tabsPositionY.value = (ctx as any).startY - event.translationY;
    },
    onEnd: (_) => {
      if (tabsPositionY.value > TABS_OPEN_HEIGHT / 2) {
        runOnJS(setCartFocused)(true);
        tabsPositionY.value = withSpring(TABS_OPEN_HEIGHT, springOptions);
      } else {
        runOnJS(setCartFocused)(false);
        tabsPositionY.value = withSpring(TABS_CLOSED_HEIGHT, springOptions);
      }
    },
  });

  const open = () => {
    setCartFocused(true);
    tabsPositionY.value = withTiming(TABS_OPEN_HEIGHT, timingOptions);
  };
  const close = () => {
    setCartFocused(false);
    tabsPositionY.value = withTiming(TABS_CLOSED_HEIGHT, timingOptions);
  };

  return (
    <S.ExtWrapper>
      <PanGestureHandler onHandlerStateChange={onPanHandlerStateChange}>
        <Animated.View style={animatedStyle}>
          <S.Wrapper>
            <S.SVGWrapper
              height={svgHeight}
              width={svgWidth}
              preserveAspectRatio="xMinYMin slice"
              viewBox={`0 0 ${SVG_WIDTH_SRC} ${SVG_WIDTH_SRC}`}
            >
              <Path
                fill="#2F7853"
                // Importante: deve ser "all-relative path" (https://codepen.io/leaverou/pen/RmwzKv)
                d="M460,0v117h-460v-117c0,22.091,17.909,40,40,40h103c12.46,0,23.763,4.954,32.047,13h0.003l0.105,0.106c0.249,0.243,0.496,0.49,0.739,0.739l21.62,21.62c17.965,17.964,47.09,17.964,65.054,0l20.262,-20.262c8.42,-9.335,20.61,-15.203,34.17,-15.203h103c22.091,0,40,-17.909,40,-40z"
              />
            </S.SVGWrapper>
            <S.CircleButton
              color={cartFocused ? "#fcfcfc" : "#fdd231"}
              onPress={cartFocused ? close : open}
              size={(width / TARGET_PHONE_WIDTH) * 64}
              bottom={(width / TARGET_PHONE_WIDTH) * 10}
              hitSlop={hitSlop}
            >
              <FontAwesome5 name="shopping-bag" size={24} color="#2f7853" />
            </S.CircleButton>
            <MotiView
              animate={{ opacity: cartFocused ? 0.2 : 1 }}
              transition={{ type: "timing" }}
              pointerEvents={cartFocused ? "none" : "auto"}
            >
              <S.Background bottom={(width / TARGET_PHONE_WIDTH) * 20}>
                {left.map(({ Icon, focused, onPress, key }) => (
                  <TouchableOpacity
                    onPress={onPress}
                    key={key}
                    hitSlop={hitSlop}
                  >
                    <Icon color={focused ? "#fcfcfc" : "#94bcad"} />
                  </TouchableOpacity>
                ))}
                {left.map((_, i) => (
                  <View key={i} />
                ))}
                {right.map(({ Icon, focused, onPress, key }) => (
                  <TouchableOpacity
                    onPress={onPress}
                    key={key}
                    hitSlop={hitSlop}
                  >
                    <Icon color={focused ? "#fcfcfc" : "#94bcad"} />
                  </TouchableOpacity>
                ))}
              </S.Background>
            </MotiView>
          </S.Wrapper>
          <Cart visible={cartFocused} />
        </Animated.View>
      </PanGestureHandler>
    </S.ExtWrapper>
  );
};

export default TabBar;
