import { useState } from "react";

const OnHoverDisplay = ({
  render,
}: {
  render: (isShowFull: boolean) => React.ReactNode;
}) => {
  const [isShowFull, setIsShowFull] = useState(false);
  return (
    <div
      style={{
        width: "175px",
        cursor: "pointer",
      }}
      onMouseOver={() => {
        setIsShowFull(true);
      }}
      onMouseOut={() => {
        setIsShowFull(false);
      }}
    >
      {render(isShowFull)}
    </div>
  );
};

export default OnHoverDisplay;
