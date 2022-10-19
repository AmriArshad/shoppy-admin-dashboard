import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

class SparkLine extends React.PureComponent {
  render() {
    const { id, type, data, color, currentColor, height, width } = this.props;

    return (
      <SparklineComponent
        id={id}
        type={type}
        dataSource={data}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        xName="x"
        yName="yval"
        tooltipSettings={{
          visible: true,
          format: '${x}: data ${yval}',
          trackLineSettings: {
            visible: true
          }
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
};

export default SparkLine;