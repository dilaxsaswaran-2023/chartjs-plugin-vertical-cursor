import { ChartType, Plugin } from 'chart.js';

type VerticalCursorOptions = {
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
declare const VerticalCursorPlugin: Plugin<"line">;

export { VerticalCursorPlugin };
