'use client';
import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  fill = false,
  sizes = '100vw',
  objectFit = 'cover',
  objectPosition = 'center',
}: OptimizedImageProps) {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  // If fill is true, we use position relative + fill
  if (fill) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill={true}
          sizes={sizes}
          style={{ 
            objectFit, 
            objectPosition 
          }}
        />
      </div>
    );
  }

  // Otherwise, use explicit width/height
  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      className={className}
      sizes={sizes}
      style={{ 
        objectFit, 
        objectPosition,
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  );
}