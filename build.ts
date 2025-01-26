const isProduction = process.env.NODE_ENV === "production";

Bun.build({
  entrypoints: ["./src/main.ts"],
  outdir: "./dist",
  format: "esm",
  target: "browser",
  sourcemap: isProduction ? "external" : "inline",
  loader: {
    ".png": "file",
    ".jpg": "file",
    ".jpeg": "file",
    ".gif": "file",
    ".svg": "file",
    ".css": "css",
    ".ts": "ts",
    ".tsx": "tsx",
    ".jsx": "jsx",
    ".js": "js",
  },
  minify: isProduction,
  splitting: true,
}).catch((error) => {
  console.error("Erro no build:", error);
  process.exit(1);
});
