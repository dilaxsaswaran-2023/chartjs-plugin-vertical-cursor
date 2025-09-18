import type { Plugin, ChartType } from "chart.js";
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
export declare const VerticalCursorPlugin: Plugin<"line">;
