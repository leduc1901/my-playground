import { useSpring } from "@react-spring/core";

type SlideFromBottomProps = {
  open: boolean;
  delay: number;
  distance: number;
};

export const useSlideFromBottom = ({
  open,
  delay,
  distance,
}: SlideFromBottomProps) => {
  const { slideFromBottom } = useSpring({
    from: { slideFromBottom: "0px" },
    to: {
      slideFromBottom: open ? "0px" : `${distance}px`,
    },
    delay: open ? delay : 0,
  });

  return slideFromBottom;
};
