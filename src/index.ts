import { bootstrap } from "#bootstrap";

async function init() {
  const app = bootstrap();
  app.listen(8080, () => {
    console.log("Server listening on port 8080.");
  });
}

init();
