// A biblioteca react-score-indicator não é mantida desde 2020 e não foi possível instalar,
// sendo assim, pegamos o código e passamos para typescript com atualizações pertinentes, para
// podermos utilizá-la e pretendemos abrir um pull requeste no repositório original para sugerir
// a atualização no código fonte

import { NextPage } from "next";
import Score from "./components/Score";

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

export default ReactScoreIndicator;
