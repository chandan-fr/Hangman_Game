import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createAnimatableComponent } from 'react-native-animatable';
import Svg, { Ellipse, G, Line, Rect, SvgProps } from 'react-native-svg'
import { shapeColor, frameColor } from '../../config/StaticColors'

type ManFigureProps = {
  wrongWord: any;
};

type CustomSvgProps = SvgProps & {
  version?: string;
  preserveAspectRatio?: string;
  className?: string;
};

const AnimatableLine: any = createAnimatableComponent(Line);
const AnimatableRect: any = createAnimatableComponent(Rect);
const AnimatableEllipse: any = createAnimatableComponent(Ellipse);


const ManFigure = ({ wrongWord }: ManFigureProps) => {

  const Rope = <AnimatableLine
    animation={'fadeIn'}
    x1="200" y1="0" x2="200" y2="140" stroke="brown" strokeWidth="5"
  />
  const Head = <AnimatableEllipse
    animation={'fadeIn'}
    cx="200" cy="150" rx="40" ry="25" fill={shapeColor}
  />
  const Nack = <AnimatableRect
    animation={'fadeIn'} 
    width="10" height="50" x="195" y="150" fill={shapeColor}
  />
  const Hands = <AnimatableLine
    animation={'fadeIn'}
    x1="260" y1="200" x2="140" y2="200" stroke={shapeColor} stroke-Linecap="round" strokeWidth="10"
  />
  const Body = <AnimatableRect
    animation={'fadeIn'}
    width="10" height="50" x="195" y="200" fill={shapeColor}
  />
  const Legs = <G>
    <AnimatableLine
      animation={'fadeIn'}
      x1="200" y1="250" x2="150" y2="300" stroke={shapeColor} stroke-Linecap="round" strokeWidth="10"
    />
    <AnimatableLine
      animation={'fadeIn'}
      x1="200" y1="250" x2="250" y2="300" stroke={shapeColor} stroke-Linecap="round" strokeWidth="10"
    />
  </G>

  return (
    <View>
      <Svg
        version="1.1" viewBox="0 0 300 400"
        preserveAspectRatio="xMinYMin meet" className="svg-content" width="140" height="200"
      >
        <Rect fill={frameColor} width="250" height="10" x="5" y="15" />
        <Rect fill={frameColor} width="10" height="350" x="20" y="0" />
        <Rect fill={frameColor} width="250" height="40" x="0" y="350" />
        {wrongWord > 0 ? Rope : null}
        {wrongWord > 1 ? Head : null}
        {wrongWord > 2 ? Nack : null}
        {wrongWord > 3 ? Hands : null}
        {wrongWord > 4 ? Body : null}
        {wrongWord > 5 ? Legs : null}
      </Svg>
    </View>
  )
}

export default ManFigure;

const styles = StyleSheet.create({});