import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  PanResponder,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as types from "../../../redux/types";
import { useDispatch, useSelector } from "react-redux";

import { height } from "../../../constants";

const BottomSheet = ({ children, dispatchToClose, isOpen }, ref) => {
  const dispatch = useDispatch();
  /* const postId = useSelector((state) => state.modal.profileData); */

  let [cardHeight, setCardHeight] = useState(0);
  const backDropVisible = new Animated.Value(0);

  const bottom = new Animated.Value((height / 1.5) * 3);

  const pandResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => true,
    onPanResponderMove: (_, { dy }) => bottom.setValue(dy),
    onPanResponderRelease: (_, { dy }) => {
      bottom.flattenOffset();
      const percentageToClose = 0.4 * cardHeight;

      if (dy > percentageToClose) {
        return close();
      }
      animatedIn();
    },
  });

  function animatedIn() {
    backDropVisible.setValue(1);
    Animated.timing(bottom, { toValue: 0, useNativeDriver: false }).start();
  }

  const animateOut = () => {
    return new Promise((resolve) => {
      Animated.timing(bottom, {
        toValue: cardHeight,
        useNativeDriver: false,
      }).start(() => {
        resolve();
      });
    });
  };

  function open() {
    animatedIn();
  }

  function close() {
    isOpen &&
      animateOut().then(() => {
        backDropVisible.setValue(0);
        dispatchToClose();
      });

    /*  dispatch({ type: types.CLOSE_MODAL_IN_FRIENDS }); */
  }

  /* useImperativeHandle(ref, () => ({ open, close })); */

  useEffect(() => {
    if (isOpen) {
      open();
    } else {
      close();
    }
  }, [isOpen]);

  return (
    <>
      
      <TouchableWithoutFeedback onPress={close} style={styles.backButton}>
        <Animated.View
          style={[
            styles.backdrop,
            {
              opacity: bottom.interpolate({
                inputRange: [0, height / 1.5],
                outputRange: [1, 0],
                extrapolate: "clamp",
              }),
            },
            {
              transform: [
                {
                  translateX: backDropVisible.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1000, 0],
                  }),
                },
              ],
            },
          ]}
        ></Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View
        {...pandResponder.panHandlers}
        onLayout={(event) => setCardHeight(event.nativeEvent.layout.height)}
        style={[
          styles.container,
          {
            transform: [
              {
                translateY: bottom.interpolate({
                  inputRange: [0, height / 1.5],
                  outputRange: [0, height / 1.5],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    height: height / 1.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default forwardRef(BottomSheet);