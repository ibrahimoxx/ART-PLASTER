import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F0F0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '2px solid #B66E2E',
        }}
      >
        <div
          style={{
            color: '#B66E2E',
            fontSize: '20px',
            fontWeight: 800,
            fontFamily: 'sans-serif',
            letterSpacing: '-1px',
            marginTop: '2px',
          }}
        >
          A
        </div>
      </div>
    ),
    { ...size }
  );
}
