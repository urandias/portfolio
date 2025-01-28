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
      // backgroundColor: 0xffffff,
      // skyColor: 0x68b8d7,
      // cloudColor: 0xadc1de,
      // cloudShadowColor: 0x183550,
      // sunColor: 0xff9919,
      // sunGlareColor: 0xff6633,
      // sunlightColor: 0xff9933, 
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
