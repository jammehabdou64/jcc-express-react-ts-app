import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import "../css/app.css";

// createInertiaApp({
//   title: (title: any) => `${title}`,
//   resolve: (name: any) => {
//     return resolvePageComponent(
//       `./Pages/${name}.tsx`,
//       import.meta.glob("./Pages/**/*.tsx", { eager: true }),
//     );
//   },
//   setup({ el, App, props }) {
//     const root = createRoot(el);
//     root.render(<App {...props} />);
//   },

//
// });

const appName = import.meta.env.VITE_APP_NAME || "JCC";

createInertiaApp({
  title: (title) => (title ? `${title} / ${appName}` : appName),
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob("./Pages/**/*.tsx"),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
  progress: {
    color: "#172554",
    delay: 1,
  },
});
