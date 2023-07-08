import React from "react";
import PropTypes from "prop-types";

import Range from "./Range";
import { NextPage } from "next";

// import styles from '../styles.css';

interface Props {
  value: string | number;
  maxValue: number;
  width: number;
  stepsColors: string[];
  textStyle?: object;
}

const Score: NextPage<Props> = (props) => {
  const { value, maxValue, stepsColors, width, textStyle = {} } = props;
  const stepRange = maxValue / stepsColors.length;
  const numberHighlight = Math.ceil(+value / stepRange);

  const valueSize = (36 * width) / 200;
  const maxValueSize = (20 * width) / 200;
  const scoreValuePosition = (25 * width) / 200;

  const getCurrentColor = (num: number) => {
    if (num <= 0) return stepsColors[0];
    if (num > stepsColors.length) return stepsColors[stepsColors.length - 1];

    return stepsColors[num - 1];
  };

  return (
    <div className={"scoreWrapper"}>
      <Range scoreNumber={Number(numberHighlight)} {...props} />
      <div
        className={"scoreValue"}
        style={{
          bottom: scoreValuePosition,
          color: getCurrentColor(numberHighlight),
          ...textStyle,
        }}
      >
        <span className={"value"} style={{ fontSize: valueSize }}>
          {value}
        </span>
        <span className={"separator"} style={{ fontSize: maxValueSize }}>
          /
        </span>
        <span className={"maxValue"} style={{ fontSize: maxValueSize }}>
          {maxValue}
        </span>
      </div>
    </div>
  );
};

export default Score;
