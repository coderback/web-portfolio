import { ImageResponse } from 'next/og';

export const alt = 'Timothy Ojebiyi, AI/ML and Full-Stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#171717',
          color: '#ffffff',
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 700, color: '#2eaf2e' }}>Timothy Ojebiyi</div>
        <div style={{ fontSize: 42, marginTop: 24 }}>AI/ML &amp; Full-Stack Engineer</div>
        <div style={{ fontSize: 30, marginTop: 24, color: '#d4d4d4' }}>
          Founder of RootLayer. Computer Science graduate.
        </div>
      </div>
    ),
    size,
  );
}
