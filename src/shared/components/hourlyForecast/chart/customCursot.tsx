interface CustomCursorProps {
  points?: { x: number; y: number }[];
  viewBox?: { x: number; y: number; width: number; height: number };
}

const CustomCursor: React.FC<CustomCursorProps> = ({ points }) => {
  if (!points || points.length === 0) return null;

  const { x, y } = points[0];
  return (
    <line
      x1={x}
      y1={y}
      x2={x}
      y2={y + 100}
      stroke="#EACA8F"
      strokeDasharray="2"
      strokeWidth={1}
    />
  );
};

export default CustomCursor;
