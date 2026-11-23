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
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5f2ea',
          padding: '60px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '64px',
            background: '#ffffff',
            border: '8px solid #121212',
            boxShadow: '18px 18px 0 #121212',
            color: '#121212',
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ fontSize: 30, fontWeight: 700, background: '#ffe14d', border: '4px solid #121212', padding: '6px 18px' }}>
              {'</> T.OJEBIYI'}
            </div>
          </div>
          <div style={{ fontSize: 88, fontWeight: 700, marginTop: 36, lineHeight: 1 }}>Timothy Ojebiyi</div>
          <div style={{ fontSize: 44, marginTop: 24, color: '#2540ff', fontWeight: 700 }}>AI/ML + Full-Stack Engineer</div>
          <div style={{ fontSize: 28, marginTop: 20, color: '#55524a' }}>Computer Science graduate · 20 projects · 2 papers</div>
        </div>
      </div>
    ),
    size,
  );
}
