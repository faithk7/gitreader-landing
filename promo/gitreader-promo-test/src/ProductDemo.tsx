import {AbsoluteFill} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {AmbientBackground} from './components/AmbientBackground';
import {CTAScene} from './scenes/CTAScene';
import {ProblemScene} from './scenes/ProblemScene';
import {ProductScene} from './scenes/ProductScene';
import {TitleScene} from './scenes/TitleScene';
import {WorkflowScene} from './scenes/WorkflowScene';

export const ProductDemo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#07090d',
        color: '#f5f2ed',
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      <AmbientBackground />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={120} name="Title">
          <TitleScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: 15})}
        />
        <TransitionSeries.Sequence durationInFrames={120} name="Problem">
          <ProblemScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({direction: 'from-right'})}
          timing={linearTiming({durationInFrames: 15})}
        />
        <TransitionSeries.Sequence durationInFrames={120} name="Product">
          <ProductScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: 15})}
        />
        <TransitionSeries.Sequence durationInFrames={120} name="Workflow">
          <WorkflowScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({direction: 'from-bottom'})}
          timing={linearTiming({durationInFrames: 15})}
        />
        <TransitionSeries.Sequence durationInFrames={120} name="Call to action">
          <CTAScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
