// lib/projects.ts
export const projects = [
  { slug: "stm32-logger", title: "STM32 Data Logger", summary: "DMA, SD card, IMU fusion.", body: "Details, diagrams, and code links…" },
  { slug: "vb6-to-csharp", title: "VB6 → C# COM Interop", summary: "Modernized legacy plugin.", body: "Interop, GUIDs, regasm, tests…" },
];

export function getProject(slug: string) {
  return projects.find(p => p.slug === slug);
}
