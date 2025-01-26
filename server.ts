import { html as HTMLElysia } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";

const PORT = 3000;
const HOST = "localhost";
const app = new Elysia();

// Serve arquivos estáticos do diretório dist/assets
app.use(staticPlugin({ assets: "dist/assets", prefix: "/assets" }));
app.use(HTMLElysia());

// Rota para a página inicial
app.get("/", () => {
	return Bun.file("dist/index.html");
});

// Rota para o arquivo main.js
app.get("/main.js", () => {
	const file = Bun.file("dist/main.js");
	return new Response(file, {
		headers: {
			"Content-Type": "application/javascript", // Define o tipo MIME correto
		},
	});
});

// Rota para o arquivo main.css
app.get("/main.css", () => {
	return Bun.file("dist/assets/styles/main.css");
});

app.listen({
	port: PORT,
	hostname: HOST,
});
