import React from 'react';
import Image from 'next/image';

interface SimpleImageProps {
  src: string;
  className?: string;
  width: number;
  height: number;
}

export const SimpleImage = ({
  src,
  className,
  width,
  height,
}: SimpleImageProps) => {
  return (
    <div className={className}>
      <Image src={src} alt={src} width={width} height={height} />
    </div>
  );
};
