import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {MacWindow} from '../components/MacWindow';

export const ProductScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{padding: '100px 100px 88px 120px', flexDirection: 'row', alignItems: 'center', gap: 74}}>
      <div style={{width: 520}}>
        <Interactive.Div
          name="Product category"
          style={{
            color: '#ff8a33',
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: interpolate(frame, [0, 0.45 * fps], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        >
          One calm workspace
        </Interactive.Div>
        <Interactive.Div
          name="Product headline"
          style={{
            marginTop: 24,
            fontSize: 96,
            lineHeight: 1.01,
            fontWeight: 780,
            letterSpacing: '-0.055em',
            opacity: interpolate(frame, [0.15 * fps, 0.7 * fps], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [0.15 * fps, 0.7 * fps], ['0px 38px', '0px 0px'], {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        >
          Find it.<br />Read it.<br /><span style={{color: '#ff7a1a'}}>Keep the thread.</span>
        </Interactive.Div>
        <Interactive.Div
          name="Product detail"
          style={{
            marginTop: 38,
            color: 'rgba(245,242,237,0.64)',
            fontSize: 34,
            lineHeight: 1.38,
            opacity: interpolate(frame, [0.65 * fps, 1.15 * fps], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        >
          Search, collections, local code reading, source-linked notes, and guided exploration.
        </Interactive.Div>
      </div>
      <div
        style={{
          opacity: interpolate(frame, [0.3 * fps, 0.95 * fps], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          scale: interpolate(frame, [0.3 * fps, 0.95 * fps], [0.92, 1], {
            easing: Easing.spring({damping: 200}),
            output: 'perceptual-scale',
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        <MacWindow title="GitReader · Repository Library">
          <Img
            name="GitReader library screenshot"
            src={staticFile('images/gitreader-library.jpg')}
            style={{width: 1120, height: 720, objectFit: 'cover'}}
          />
        </MacWindow>
      </div>
    </AbsoluteFill>
  );
};
