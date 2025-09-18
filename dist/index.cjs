'use strict';

const VerticalCursorPlugin = {
    id: "verticalCursor",
    afterDatasetsDraw(chart) {
        var _a, _b, _c, _d, _e, _f;
        const opts = (_a = chart.options.plugins) === null || _a === void 0 ? void 0 : _a.verticalCursor;
        if (!opts || opts.enabled === false)
            return;
        const t = chart.tooltip;
        if (!((_b = t === null || t === void 0 ? void 0 : t.getActiveElements) === null || _b === void 0 ? void 0 : _b.call(t).length))
            return;
        const x = (_d = (_c = t.getActiveElements()[0]) === null || _c === void 0 ? void 0 : _c.element) === null || _d === void 0 ? void 0 : _d.x;
        if (typeof x !== "number")
            return;
        const { top, bottom } = chart.chartArea;
        const ctx = chart.ctx;
        ctx.save();
        if (opts.dash)
            ctx.setLineDash(opts.dash);
        ctx.beginPath();
        ctx.moveTo(x, top);
        ctx.lineTo(x, bottom);
        ctx.lineWidth = (_e = opts.width) !== null && _e !== void 0 ? _e : 1;
        ctx.strokeStyle = (_f = opts.color) !== null && _f !== void 0 ? _f : "rgba(0,0,0,.35)";
        ctx.stroke();
        ctx.restore();
    },
};

exports.VerticalCursorPlugin = VerticalCursorPlugin;
//# sourceMappingURL=index.cjs.map
