import type { Chart, Plugin, ChartType } from "chart.js";

export type VerticalCursorOptions = {
  dash?: number[];
  color?: string;
  width?: number;
  enabled?: boolean;
};

declare module "chart.js" {
  interface PluginOptionsByType<TType extends ChartType> {
    verticalCursor?: VerticalCursorOptions;
  }
}

export const VerticalCursorPlugin: Plugin<"line"> = {
  id: "verticalCursor",
  afterDatasetsDraw(chart) {
    const opts = (chart.options.plugins as any)?.verticalCursor as VerticalCursorOptions;
    if (!opts || opts.enabled === false) return;

    const t: any = chart.tooltip;
    if (!t?.getActiveElements?.().length) return;

    const x = t.getActiveElements()[0]?.element?.x;
    if (typeof x !== "number") return;

    const { top, bottom } = chart.chartArea;
    const ctx = chart.ctx;

    ctx.save();
    if (opts.dash) ctx.setLineDash(opts.dash);
    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
    ctx.lineWidth = opts.width ?? 1;
    ctx.strokeStyle = opts.color ?? "rgba(0,0,0,.35)";
    ctx.stroke();
    ctx.restore();
  },
};
