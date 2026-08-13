import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const AmbientBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  return (
    <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#07090d'}}>
      <AbsoluteFill
        style={{
          opacity: 0.24,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '76px 76px',
          translate: interpolate(frame, [0, durationInFrames], ['0px 0px', '-76px -38px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 900,
          height: 900,
          borderRadius: 999,
          background: 'rgba(255, 122, 26, 0.15)',
          filter: 'blur(130px)',
          left: -330,
          top: -360,
          translate: interpolate(frame, [0, durationInFrames], ['0px 0px', '180px 110px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 1000,
          height: 1000,
          borderRadius: 999,
          background: 'rgba(68, 126, 255, 0.10)',
          filter: 'blur(150px)',
          right: -420,
          bottom: -500,
          translate: interpolate(frame, [0, durationInFrames], ['0px 0px', '-120px -80px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      />
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at center, transparent 38%, rgba(0,0,0,0.62) 100%)',
        }}
      />
    </AbsoluteFill>
  );
};
