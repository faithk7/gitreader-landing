import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const problems = [
  {index: '01', title: 'You saved it', detail: 'A promising repository disappears into your stars.'},
  {index: '02', title: 'You forgot why', detail: 'The context that made it useful fades away.'},
  {index: '03', title: 'You start over', detail: 'README, architecture, source—again from zero.'},
];

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{padding: '100px 120px'}}>
      <Interactive.Div
        name="Problem headline"
        style={{
          fontSize: 126,
          lineHeight: 0.98,
          letterSpacing: '-0.058em',
          fontWeight: 780,
          opacity: interpolate(frame, [0, 0.65 * fps], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          translate: interpolate(frame, [0, 0.65 * fps], ['0px 38px', '0px 0px'], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Saved isn’t <span style={{color: '#ff7a1a'}}>remembered.</span>
      </Interactive.Div>
      <div style={{display: 'flex', gap: 26, marginTop: 92}}>
        {problems.map((problem, index) => (
          <div
            key={problem.index}
            style={{
              flex: 1,
              minHeight: 440,
              padding: '42px 40px',
              borderRadius: 26,
              border: '1px solid rgba(255,255,255,0.11)',
              backgroundColor: 'rgba(18,21,27,0.82)',
              boxShadow: index === 1 ? '0 30px 80px rgba(255,122,26,0.09)' : '0 30px 80px rgba(0,0,0,0.20)',
              opacity: interpolate(frame, [(0.45 + index * 0.22) * fps, (0.95 + index * 0.22) * fps], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
              translate: interpolate(frame, [(0.45 + index * 0.22) * fps, (0.95 + index * 0.22) * fps], ['0px 60px', '0px 0px'], {
                easing: Easing.bezier(0.16, 1, 0.3, 1),
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
            }}
          >
            <div style={{color: '#ff8a33', fontSize: 22, fontWeight: 800, letterSpacing: '0.13em'}}>{problem.index}</div>
            <div style={{marginTop: 80, fontSize: 54, fontWeight: 740, letterSpacing: '-0.035em'}}>{problem.title}</div>
            <div style={{marginTop: 26, color: 'rgba(245,242,237,0.62)', fontSize: 32, lineHeight: 1.35}}>{problem.detail}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
