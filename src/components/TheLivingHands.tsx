import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TheLivingHands = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / (window.innerHeight * 0.8), 0.1, 1000);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- ARTISTIC HANDS (Stylized Primitives) ---
    const handGroup = new THREE.Group();
    scene.add(handGroup);

    const handMat = new THREE.MeshStandardMaterial({ 
      color: 0xF5EDE3, // Linen
      roughness: 0.8,
      metalness: 0.1
    });

    const createHand = (isLeft: boolean) => {
      const g = new THREE.Group();
      
      // Palm
      const palm = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 0.6, 4, 16), handMat);
      palm.rotation.z = Math.PI / 2;
      g.add(palm);

      // Simple fingers
      for(let i=0; i<3; i++) {
        const finger = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.4, 4, 8), handMat);
        finger.position.set(isLeft ? 0.3 : -0.3, 0.2 + i*0.2, 0);
        finger.rotation.z = isLeft ? -0.5 : 0.5;
        g.add(finger);
      }

      return g;
    };

    const leftHand = createHand(true);
    const rightHand = createHand(false);
    leftHand.position.set(-2.5, 0, 0);
    rightHand.position.set(2.5, 0, 0);
    handGroup.add(leftHand, rightHand);

    // --- THE HOOK ---
    const hookGeo = new THREE.CylinderGeometry(0.05, 0.05, 3, 16);
    const hookMat = new THREE.MeshStandardMaterial({ color: 0xF0D9A0, metalness: 0.9, roughness: 0.1 }); // goldAccent
    const hook = new THREE.Mesh(hookGeo, hookMat);
    hook.rotation.z = Math.PI / 3;
    rightHand.add(hook);
    hook.position.set(-0.5, 0.5, 0.5);

    // --- PROCEDURAL YARN ---
    const curvePoints = [
      new THREE.Vector3(-3, -2, 0),
      new THREE.Vector3(-1, 0, 0.5),
      new THREE.Vector3(0, 0.5, 0),
      new THREE.Vector3(1, 0, 0.5),
      new THREE.Vector3(3, -2, 0)
    ];
    const yarnCurve = new THREE.CatmullRomCurve3(curvePoints);
    const yarnGeo = new THREE.TubeGeometry(yarnCurve, 64, 0.08, 8, false);
    const yarnMat = new THREE.MeshStandardMaterial({ color: 0xC45C74, roughness: 1 }); // deepRose
    const yarn = new THREE.Mesh(yarnGeo, yarnMat);
    scene.add(yarn);

    // --- LIGHTING ---
    const ambient = new THREE.AmbientLight(0xFFF8F2, 0.8); // cream
    scene.add(ambient);
    const point = new THREE.PointLight(0xFAF0DC, 2, 20); // champagne
    point.position.set(5, 5, 5);
    scene.add(point);
    const topLight = new THREE.SpotLight(0xFFFFFF, 1);
    topLight.position.set(0, 10, 0);
    scene.add(topLight);

    // --- ANIMATION LOOP ---
    let time = 0;
    const animate = () => {
      const id = requestAnimationFrame(animate);
      time += 0.015;

      // Rhythmic motion - Crochet sequence
      leftHand.position.y = Math.sin(time) * 0.2;
      leftHand.rotation.z = Math.sin(time * 0.5) * 0.1;

      rightHand.position.y = Math.cos(time) * 0.3;
      rightHand.position.x = 2.5 + Math.sin(time * 0.8) * 0.5;
      rightHand.rotation.z = Math.sin(time) * 0.2;

      // Update yarn points based on "stitching"
      curvePoints[1].y = leftHand.position.y + 0.5;
      curvePoints[2].x = Math.sin(time * 2) * 0.5;
      curvePoints[2].y = 0.5 + Math.cos(time * 2) * 0.3;
      curvePoints[3].y = rightHand.position.y + 0.2;
      curvePoints[3].x = rightHand.position.x - 1;

      const newCurve = new THREE.CatmullRomCurve3(curvePoints);
      yarn.geometry.dispose();
      yarn.geometry = new THREE.TubeGeometry(newCurve, 64, 0.08, 8, false);

      renderer.render(scene, camera);
      return id;
    };

    const animId = animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / (window.innerHeight * 0.8);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hands" className="relative h-[80vh] bg-linen overflow-hidden py-20">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10 w-full px-6">
        <h2 className="font-display text-5xl md:text-7xl text-warmBrown italic mb-4">The Rhythm of Creation</h2>
        <p className="font-body text-[10px] uppercase tracking-[0.5em] text-deepRose">Watch the hands that weave your story</p>
      </div>
      
      <div ref={mountRef} className="w-full h-full cursor-pointer" />
      
      {/* Decorative shadows */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-linen/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default TheLivingHands;
