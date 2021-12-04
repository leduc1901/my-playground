import { useSpring } from "@react-spring/core";

type FadeProps = {
  open: boolean;
  delay: number;
};

export const useFade = ({ open, delay }: FadeProps) => {
  const { fade } = useSpring({
    from: { fade: 0 },
    to: {
      fade: open ? 1 : 0,
    },
    delay: open ? delay : 0,
  });

  return fade;
};
