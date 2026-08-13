import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const steps = [
  {number: '01', title: 'Recover', detail: 'Find the repository—and why it mattered.'},
  {number: '02', title: 'Understand', detail: 'Move from README to architecture to source.'},
  {number: '03', title: 'Reuse', detail: 'Carry notes and grounded context into your agent.'},
];

export const WorkflowScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{padding: '100px 120px'}}>
      <Interactive.Div
        name="Workflow eyebrow"
        style={{
          color: '#ff8a33',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          opacity: interpolate(frame, [0, 0.4 * fps], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        One continuous workflow
      </Interactive.Div>
      <Interactive.Div
        name="Workflow headline"
        style={{
          marginTop: 24,
          fontSize: 116,
          lineHeight: 0.98,
          fontWeight: 780,
          letterSpacing: '-0.057em',
          opacity: interpolate(frame, [0.1 * fps, 0.65 * fps], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          translate: interpolate(frame, [0.1 * fps, 0.65 * fps], ['0px 34px', '0px 0px'], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Keep the thread.
      </Interactive.Div>
      <div style={{position: 'relative', display: 'flex', gap: 28, marginTop: 92}}>
        <div
          style={{
            position: 'absolute',
            left: 42,
            right: 42,
            top: 37,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.12)',
          }}
        >
          <div
            style={{
              height: 2,
              backgroundColor: '#ff7a1a',
              width: `${interpolate(frame, [0.55 * fps, 2.2 * fps], [0, 100], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              })}%`,
              boxShadow: '0 0 18px rgba(255,122,26,0.75)',
            }}
          />
        </div>
        {steps.map((step, index) => (
          <div
            key={step.number}
            style={{
              position: 'relative',
              flex: 1,
              minHeight: 360,
              padding: '0 32px 34px',
              opacity: interpolate(frame, [(0.5 + index * 0.42) * fps, (0.95 + index * 0.42) * fps], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
              translate: interpolate(frame, [(0.5 + index * 0.42) * fps, (0.95 + index * 0.42) * fps], ['0px 42px', '0px 0px'], {
                easing: Easing.bezier(0.16, 1, 0.3, 1),
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
            }}
          >
            <div
              style={{
                width: 76,
                height: 76,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 999,
                border: '2px solid #ff7a1a',
                backgroundColor: '#111318',
                color: '#ff9a51',
                fontSize: 21,
                fontWeight: 850,
                letterSpacing: '0.08em',
                boxShadow: '0 0 30px rgba(255,122,26,0.18)',
              }}
            >
              {step.number}
            </div>
            <div style={{marginTop: 54, fontSize: 62, fontWeight: 760, letterSpacing: '-0.04em'}}>{step.title}</div>
            <div style={{marginTop: 22, maxWidth: 430, color: 'rgba(245,242,237,0.62)', fontSize: 32, lineHeight: 1.35}}>{step.detail}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
