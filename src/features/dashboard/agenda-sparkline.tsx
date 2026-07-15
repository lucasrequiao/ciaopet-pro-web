// features/dashboard/agenda-sparkline.tsx

/**
 * Sparkline decorativa do card Agenda di oggi.
 * PLACEHOLDER CONSCIENTE: coordenadas desenhadas a olho a partir do print.
 * Semântica do gráfico e dos marcadores é pendência da designer (DECISIONS §5).
 * Será substituída quando houver dados reais (decisão registrada no §2).
 */
export function AgendaSparkline() {
  // Forma da onda, compartilhada pela área e pela linha
  const wave =
    "M 0 24 Q 6 10 12 12 Q 18 14 24 20 Q 30 26 36 16 Q 42 6 48 14 Q 54 22 60 18 Q 66 14 72 8 Q 78 4 84 12 Q 90 20 100 16";

  return (
    <svg
      viewBox="0 0 100 32"
      className="w-full text-primary"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* Área preenchida: mesma onda, fechada até a base, sem contorno */}
      <path d={`${wave} L 100 32 L 0 32 Z`} fill="currentColor" opacity="0.1" />

      {/* A linha em si: só contorno, sem preenchimento */}
      <path
        d={wave}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Marcadores nos picos (cores hardcoded conscientes até a semântica chegar) */}
      <circle cx="12" cy="12" r="2.5" className="fill-destructive" />
      <circle cx="76" cy="7" r="2.5" className="fill-success" />
    </svg>
  );
}