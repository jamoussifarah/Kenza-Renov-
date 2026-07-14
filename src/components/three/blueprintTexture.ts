import * as THREE from "three";

/** Draws a stylised architectural blueprint sketch onto a canvas texture. */
export function createBlueprintTexture(seed = 0): THREE.CanvasTexture {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "rgba(13, 21, 38, 0)";
  ctx.fillRect(0, 0, size, size);

  ctx.strokeStyle = "rgba(214, 190, 150, 0.35)";
  ctx.lineWidth = 1;

  const grid = 32;
  const step = size / grid;
  for (let i = 0; i <= grid; i++) {
    ctx.beginPath();
    ctx.moveTo(i * step, 0);
    ctx.lineTo(i * step, size);
    ctx.globalAlpha = i % 4 === 0 ? 0.35 : 0.12;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i * step);
    ctx.lineTo(size, i * step);
    ctx.stroke();
  }

  ctx.globalAlpha = 1;
  ctx.strokeStyle = "rgba(230, 210, 175, 0.85)";
  ctx.lineWidth = 2;

  const rand = mulberry32(seed + 7);
  const plans: [number, number, number, number][][] = [
    [
      [140, 160, 620, 160],
      [620, 160, 620, 520],
      [620, 520, 140, 520],
      [140, 520, 140, 160],
      [380, 160, 380, 340],
      [140, 340, 380, 340],
      [620, 340, 460, 340],
    ],
    [
      [180, 220, 860, 220],
      [860, 220, 860, 460],
      [860, 460, 180, 460],
      [180, 460, 180, 220],
      [520, 220, 520, 460],
      [700, 220, 700, 340],
    ],
  ];

  const chosen = plans[Math.floor(rand() * plans.length)];
  chosen.forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  });

  // corner ticks + small annotation circles for a technical feel
  ctx.fillStyle = "rgba(230, 210, 175, 0.9)";
  for (let i = 0; i < 6; i++) {
    const x = 160 + rand() * 700;
    const y = 180 + rand() * 380;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(230, 210, 175, 0.5)";
  ctx.lineWidth = 1;
  ctx.setLineDash([6, 8]);
  ctx.strokeRect(80, 80, size - 160, size - 160);
  ctx.setLineDash([]);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
