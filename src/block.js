import React from "react";
import "./styles.css";
import { Text } from "./text";

export const Block = ({ header, content, size, ...props }) => (
  <div className="block">
    <Text size={size} fontWeight="bold" {...props}>
      {header}
    </Text>
    {""}
    <span className="content"> {content} </span>
  </div>
);

Block.defaultProps = {
  size: "18px"
};
