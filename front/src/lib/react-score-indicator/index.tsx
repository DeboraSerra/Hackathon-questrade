import React from "react";
import PropTypes from "prop-types";

// components
import Score from "./components/Score";
import { NextPage } from "next";

// import styles from './styles.css';

const DEFAULT_STEP_COLORS = [
  "#d12000",
  "#d83114",
  "#e06500",
  "#ed8d00",
  "#eea231",
  "#f1bc00",
  "#abcf0c",
  "#53b83a",
  "#27852a",
];

interface Props {
  value: number | string;
  maxValue: number;
  width?: number;
  lineWidth?: number;
  lineSpacing?: number;
  style?: object;
  textStyle?: object;
  maxAngle?: number;
  rotation?: number;
  stepsColors?: string[];
  fadedOpacity?: number;
}

const ReactScoreIndicator: NextPage<Props> = (props) => {
  const {
    width = 200,
    style = {},
    stepsColors = DEFAULT_STEP_COLORS,
    textStyle = {},
  } = props;

  return (
    <div className="wrapper" style={{ width: `${width}px`, ...style }}>
      <Score
        {...props}
        stepsColors={stepsColors}
        textStyle={textStyle}
        width={width}
      />
    </div>
  );
};

export default ReactScoreIndicator
