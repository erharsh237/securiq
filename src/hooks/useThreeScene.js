import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function useThreeScene(canvasRef, theme = 'dark') {
  const sceneState = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let canceled = false;
    const s = sceneState.current;
    s.startTime = performance.now();

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(theme === 'light' ? 0xffffff : 0x000000);
    s.scene = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.NoToneMapping;
    
    // Group for mouse tilt
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);
    s.sceneGroup = sceneGroup;

    // ── 1. Central Icosahedron ──
    const icoGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const edgesGeo = new THREE.EdgesGeometry(icoGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: theme === 'light' ? 0x1e40af : 0x3b82f6,
      transparent: true,
      opacity: theme === 'light' ? 0.5 : 0.3,
    });
    const icosahedron = new THREE.LineSegments(edgesGeo, edgesMat);
    sceneGroup.add(icosahedron);
    s.icosahedron = icosahedron;

    // ── 2. Particles ──
    const particleCount = 500;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    s.particleData = [];

    const colorPalette = theme === 'light' ? [
      new THREE.Color(0x1e40af), // Darker Blue
      new THREE.Color(0x0e7490), // Darker Cyan
      new THREE.Color(0x15803d), // Darker Green
    ] : [
      new THREE.Color(0x3b82f6), // Blue
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x22c55e), // Green
    ];

    for (let i = 0; i < particleCount; i++) {
      // Torus math
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const R = 4.5;
      const r = Math.random() * 1.2; // thickness

      const x = (R + r * Math.cos(v)) * Math.cos(u);
      const y = r * Math.sin(v) + (Math.random() - 0.5) * 2;
      const z = (R + r * Math.cos(v)) * Math.sin(u);

      pPos[i * 3] = x;
      pPos[i * 3 + 1] = y;
      pPos[i * 3 + 2] = z;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;

      s.particleData.push({
        angle: u,
        radius: R + r * Math.cos(v),
        y: y,
        speed: (Math.random() * 0.05 + 0.02) * (Math.random() > 0.5 ? 1 : -1)
      });
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
    
    const pMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });
    const particles = new THREE.Points(pGeo, pMat);
    particles.rotation.x = Math.PI / 6; // tilt the ring slightly
    sceneGroup.add(particles);
    s.particles = particles;

    // ── 3. Connection Lines ──
    const lineCount = 80;
    const lGeo = new THREE.BufferGeometry();
    const lPos = new Float32Array(lineCount * 2 * 3);
    lGeo.setAttribute('position', new THREE.BufferAttribute(lPos, 3));
    const lMat = new THREE.LineBasicMaterial({
      color: theme === 'light' ? 0x1e40af : 0x3b82f6,
      transparent: true,
      opacity: theme === 'light' ? 0.15 : 0.08
    });
    const lines = new THREE.LineSegments(lGeo, lMat);
    lines.rotation.x = Math.PI / 6;
    sceneGroup.add(lines);
    s.lines = lines;

    // ── 4. Scanning Pulse Ring ──
    const pulseGeo = new THREE.RingGeometry(0.9, 1.0, 64);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: theme === 'light' ? 0x1e40af : 0x3b82f6,
      transparent: true,
      opacity: theme === 'light' ? 0.6 : 0.5,
      side: THREE.DoubleSide,
      blending: theme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false
    });
    const pulseRing = new THREE.Mesh(pulseGeo, pulseMat);
    pulseRing.rotation.x = -Math.PI / 2 + Math.PI / 6;
    sceneGroup.add(pulseRing);
    s.pulseRing = pulseRing;

    // ── 5. Floating Data Fragments ──
    const fragCount = 40;
    const fragGeo = new THREE.PlaneGeometry(0.08, 0.03);
    const fragMat = new THREE.MeshBasicMaterial({
      color: theme === 'light' ? 0x0e7490 : 0x06b6d4,
      transparent: true,
      opacity: theme === 'light' ? 0.6 : 0.4,
      side: THREE.DoubleSide
    });
    const fragments = new THREE.InstancedMesh(fragGeo, fragMat, fragCount);
    s.fragData = [];
    const dummy = new THREE.Object3D();
    for (let i = 0; i < fragCount; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 8 - 2;
      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      fragments.setMatrixAt(i, dummy.matrix);
      s.fragData.push({ x, y, z, speed: Math.random() * 0.02 + 0.005 });
    }
    sceneGroup.add(fragments);
    s.fragments = fragments;

    // ── Mouse & Scroll Tracking ──
    s.mouseX = 0;
    s.mouseY = 0;
    s.targetX = 0;
    s.targetY = 0;
    s.scrollY = window.scrollY || 0;
    s.targetScrollY = window.scrollY || 0;

    function onMouseMove(event) {
      s.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      s.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', onMouseMove);

    function onScroll() {
      s.targetScrollY = window.scrollY;
    }
    window.addEventListener('scroll', onScroll);

    // ── Resize ──
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onResize);

    // ── Animation Loop ──
    function animate() {
      if (canceled) return;
      requestAnimationFrame(animate);

      const elapsed = (performance.now() - s.startTime) / 1000;

      // Icosahedron rotation
      if (s.icosahedron) {
        s.icosahedron.rotation.y += 0.002;
        s.icosahedron.rotation.x += 0.001;
      }

      // Particles orbiting
      if (s.particles && s.particleData) {
        const pos = s.particles.geometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          const d = s.particleData[i];
          const currAngle = d.angle + elapsed * d.speed;
          pos[i * 3] = Math.cos(currAngle) * d.radius;
          pos[i * 3 + 2] = Math.sin(currAngle) * d.radius;
          // slight bob
          pos[i * 3 + 1] = d.y + Math.sin(elapsed * 2 + i) * 0.1;
        }
        s.particles.geometry.attributes.position.needsUpdate = true;

        // Update lines between random particles
        if (s.lines) {
          const lpos = s.lines.geometry.attributes.position.array;
          for (let i = 0; i < lineCount; i++) {
            // grab two random particles
            const idx1 = Math.floor(Math.random() * particleCount);
            const idx2 = Math.floor(Math.random() * particleCount);
            lpos[i * 6] = pos[idx1 * 3];
            lpos[i * 6 + 1] = pos[idx1 * 3 + 1];
            lpos[i * 6 + 2] = pos[idx1 * 3 + 2];
            lpos[i * 6 + 3] = pos[idx2 * 3];
            lpos[i * 6 + 4] = pos[idx2 * 3 + 1];
            lpos[i * 6 + 5] = pos[idx2 * 3 + 2];
          }
          s.lines.geometry.attributes.position.needsUpdate = true;
        }
      }

      // Pulse Ring
      if (s.pulseRing) {
        const cycle = (elapsed % 4) / 4; // 0 to 1 over 4 seconds
        const scale = 0.1 + cycle * 10;
        s.pulseRing.scale.set(scale, scale, 1);
        s.pulseRing.material.opacity = 0.5 * (1 - cycle);
      }

      // Fragments
      if (s.fragments && s.fragData) {
        for (let i = 0; i < fragCount; i++) {
          const fd = s.fragData[i];
          fd.y += fd.speed;
          if (fd.y > 6) fd.y = -6;
          dummy.position.set(fd.x, fd.y, fd.z);
          dummy.rotation.x = elapsed * 0.5 + i;
          dummy.rotation.y = elapsed * 0.3 + i;
          dummy.updateMatrix();
          s.fragments.setMatrixAt(i, dummy.matrix);
        }
        s.fragments.instanceMatrix.needsUpdate = true;
      }

      // Mouse tilt (lerp)
      s.targetX = s.mouseX * 0.05;
      s.targetY = s.mouseY * 0.05;
      
      // Scroll positioning (lerp)
      s.scrollY += (s.targetScrollY - s.scrollY) * 0.05;
      const scrollProgress = s.scrollY / window.innerHeight;

      // Base rotations from mouse
      let rotX = s.targetY;
      let rotY = s.targetX;

      // Add scroll-based rotation and translation
      sceneGroup.position.x = scrollProgress * 3;
      sceneGroup.position.y = scrollProgress * 1.5;
      sceneGroup.position.z = scrollProgress * 2;
      rotY -= scrollProgress * 0.5;

      sceneGroup.rotation.y += (rotY - sceneGroup.rotation.y) * 0.05;
      sceneGroup.rotation.x += (rotX - sceneGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      canceled = true;
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      renderer.dispose();
      // clean up geometries/materials
      icoGeo.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      lGeo.dispose();
      lMat.dispose();
      pulseGeo.dispose();
      pulseMat.dispose();
      fragGeo.dispose();
      fragMat.dispose();
    };
  }, [canvasRef, theme]);
}
