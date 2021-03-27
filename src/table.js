import React from "react";
import "./styles.css";
import { Text } from "./text";

export const Table = ({
  headerList,
  contentList,
  abNormalList = [],
  size,
  ...props
}) => (
  <div>
    <table className="table">
      <tbody>
        <tr>
          {headerList.map((item, idx) => (
            <td key={idx}>
              <Text size={size} fontWeight="bold" {...props}>
                {item}
              </Text>
            </td>
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr>
          {contentList.map((item, idx) => (
            <td key={idx}>
              <Text
                size={size}
                fontWeight="bold"
                textDecoration={abNormalList[idx] ? "underline" : "none"}
                {...props}
              >
                {item}
              </Text>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

Table.defaultProps = {
  size: "16px",
  contentList: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  headerList: ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
};
