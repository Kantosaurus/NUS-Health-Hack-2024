import React from 'react';
import { useAnnotation } from './AnnotationContext';

export default function AnnotationBox() {
  const { annotation } = useAnnotation();
  if (!annotation.isVisible) return null;

  const style = {
    position: 'absolute',
    top: `${annotation.position.y}px`,
    left: `${annotation.position.x}px`,
  };

  return(  
      <div style={style}>{annotation.content}</div>
    );
};

