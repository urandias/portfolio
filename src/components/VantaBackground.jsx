import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

function VantaBackground({ children, isDarkMode}) {
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
      backgroundColor: isDarkMode ? 0x060608 : 0x90b4e8,
      skyColor: isDarkMode ? 0x060608 : 0x90b4e8,
      cloudColor: isDarkMode ? 0xaba5ac : 0xd7e1eb,
      cloudShadowColor: isDarkMode ? 0x2c2f34 : 0x7299d4,
      sunColor: isDarkMode ? 0x444444 : 0xf1f1f1,
      sunGlareColor: isDarkMode ? 0x333333 : 0xe5e3d7,
      sunlightColor: isDarkMode ? 0xfffbff : 0xf1f1f1,
      speed: 0.8
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isDarkMode]);

  return (
    <div ref={vantaRef} className="vantaBackground">
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default VantaBackground;