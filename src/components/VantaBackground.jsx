import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

function VantaBackground({ children }) {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = CLOUDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      backgroundColor: 0x90b4e8,
      skyColor: 0x90b4e8,
      cloudColor: 0xd7e1eb,
      cloudShadowColor: 0x7299d4,
      sunColor: 0xf1f1f1,
      sunGlareColor: 0xe5e3d7,
      sunlightColor: 0xf1f1f1, 
      speed: 0.8
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} style={{ height: '40vh', width: '100%' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default VantaBackground;
