import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{padding: '100px 120px', justifyContent: 'center'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 92}}>
        <Img
          name="GitReader icon"
          src={staticFile('images/gitreader-icon.jpg')}
          style={{
            width: 254,
            height: 254,
            borderRadius: 58,
            boxShadow: '0 30px 90px rgba(0,0,0,0.48), 0 0 80px rgba(255,122,26,0.13)',
            scale: interpolate(frame, [0, 0.75 * fps], [0.72, 1], {
              easing: Easing.spring({damping: 200}),
              output: 'perceptual-scale',
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            opacity: interpolate(frame, [0, 0.45 * fps], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        />
        <div style={{maxWidth: 1180}}>
          <Interactive.Div
            name="Category"
            style={{
              color: '#ff8a33',
              fontSize: 24,
              fontWeight: 750,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              opacity: interpolate(frame, [0.25 * fps, 0.8 * fps], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
              translate: interpolate(frame, [0.25 * fps, 0.8 * fps], ['0px 24px', '0px 0px'], {
                easing: Easing.bezier(0.16, 1, 0.3, 1),
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
            }}
          >
            Native repository research
          </Interactive.Div>
          <Interactive.Div
            name="Headline"
            style={{
              marginTop: 26,
              fontSize: 154,
              lineHeight: 0.92,
              letterSpacing: '-0.065em',
              fontWeight: 790,
              opacity: interpolate(frame, [0.45 * fps, 1.1 * fps], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
              translate: interpolate(frame, [0.45 * fps, 1.1 * fps], ['0px 45px', '0px 0px'], {
                easing: Easing.bezier(0.16, 1, 0.3, 1),
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
            }}
          >
            Read less <span style={{color: '#ff7a1a'}}>twice.</span>
          </Interactive.Div>
          <Interactive.Div
            name="Subheadline"
            style={{
              marginTop: 38,
              maxWidth: 1060,
              color: 'rgba(245,242,237,0.68)',
              fontSize: 44,
              lineHeight: 1.28,
              letterSpacing: '-0.02em',
              opacity: interpolate(frame, [0.9 * fps, 1.45 * fps], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
            }}
          >
            Turn saved GitHub repositories into durable working knowledge.
          </Interactive.Div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
