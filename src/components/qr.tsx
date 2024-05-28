'use client'

import QRCode from 'qrcode.react';
import React from 'react';

const QR = () => {
  const url = "https://psycode.vercel.app/test/0";

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-zinc-200'>What does your personality look like?</h1>
      <QRCode value={url} size={200} className='mt-5'/>
    </div>
  );
};

export default QR;
