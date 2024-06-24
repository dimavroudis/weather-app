import { Card, CardProps } from "@mantine/core";

const Widget = ({ className, ...props }: CardProps) => {
  return (
    <Card
      className={`bg-white bg-opacity-30 border border-white border-opacity-20 text-white font-medium ${className}`}
      {...props}
    />
  );
};

export default Widget;
