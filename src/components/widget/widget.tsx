import { Card, CardProps } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Widget = ({ className, ...props }: CardProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <Card
      radius={isDesktop ? "lg" : "md"}
      className={`bg-white bg-opacity-30 backdrop-blur-sm	 border border-white border-opacity-20 text-white font-medium ${className}`}
      {...props}
    />
  );
};

export default Widget;
