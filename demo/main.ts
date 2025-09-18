import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from "chart.js";
import { VerticalCursorPlugin } from "../src";

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, VerticalCursorPlugin);

const ctx = (document.getElementById("c") as HTMLCanvasElement).getContext("2d")!;
new Chart(ctx, {
  type: "line",
  data: { labels: Array.from({ length: 50 }, (_, i) => `t${i}`),
    datasets: [{ label: "A", data: Array.from({ length: 50 }, () => Math.random()*10), borderColor: "#2563eb"}] },
  options: { plugins: { verticalCursor: { enabled: true, dash: [6,4] } } }
});
