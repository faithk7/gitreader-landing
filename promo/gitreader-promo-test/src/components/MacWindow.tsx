import type {ReactNode} from 'react';

export const MacWindow: React.FC<{children: ReactNode; title: string}> = ({children, title}) => {
  return (
    <div
      style={{
        width: 1120,
        height: 772,
        overflow: 'hidden',
        borderRadius: 28,
        border: '1px solid rgba(255,255,255,0.16)',
        backgroundColor: '#101318',
        boxShadow: '0 42px 110px rgba(0,0,0,0.56), 0 0 0 1px rgba(255,122,26,0.08)',
      }}
    >
      <div
        style={{
          height: 52,
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '0 20px',
          backgroundColor: 'rgba(21,24,29,0.96)',
        }}
      >
        <div style={{display: 'flex', gap: 10}}>
          <div style={{width: 13, height: 13, borderRadius: 99, backgroundColor: '#ff5f57'}} />
          <div style={{width: 13, height: 13, borderRadius: 99, backgroundColor: '#febc2e'}} />
          <div style={{width: 13, height: 13, borderRadius: 99, backgroundColor: '#28c840'}} />
        </div>
        <div
          style={{
            flex: 1,
            textAlign: 'center',
            color: 'rgba(245,242,237,0.52)',
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: '0.01em',
            marginRight: 66,
          }}
        >
          {title}
        </div>
      </div>
      <div style={{height: 720, backgroundColor: '#0b0d11'}}>{children}</div>
    </div>
  );
};
