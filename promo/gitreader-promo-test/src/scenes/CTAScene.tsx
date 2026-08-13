import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{padding: '100px 120px', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
      <Img
        name="GitReader CTA icon"
        src={staticFile('images/gitreader-icon.jpg')}
        style={{
          width: 148,
          height: 148,
          borderRadius: 34,
          boxShadow: '0 24px 72px rgba(0,0,0,0.45)',
          opacity: interpolate(frame, [0, 0.45 * fps], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          scale: interpolate(frame, [0, 0.65 * fps], [0.75, 1], {
            easing: Easing.spring({damping: 200}),
            output: 'perceptual-scale',
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      />
      <Interactive.Div
        name="CTA headline"
        style={{
          marginTop: 38,
          maxWidth: 1520,
          fontSize: 122,
          lineHeight: 0.98,
          fontWeight: 790,
          letterSpacing: '-0.06em',
          opacity: interpolate(frame, [0.25 * fps, 0.9 * fps], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          translate: interpolate(frame, [0.25 * fps, 0.9 * fps], ['0px 42px', '0px 0px'], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Your repository library<br />deserves a <span style={{color: '#ff7a1a'}}>memory.</span>
      </Interactive.Div>
      <div
        style={{
          marginTop: 44,
          display: 'flex',
          alignItems: 'center',
          gap: 30,
          opacity: interpolate(frame, [0.8 * fps, 1.35 * fps], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        <div
          style={{
            padding: '22px 34px',
            borderRadius: 18,
            backgroundColor: '#ff7a1a',
            color: '#140b05',
            fontSize: 30,
            fontWeight: 850,
            boxShadow: '0 18px 54px rgba(255,122,26,0.25)',
          }}
        >
          Request beta access →
        </div>
        <div style={{color: 'rgba(245,242,237,0.58)', fontSize: 26, fontWeight: 600}}>
          macOS 14+ · Private beta · No card required
        </div>
      </div>
    </AbsoluteFill>
  );
};
