import { setupServer } from "msw/node";
import { handlers } from "./generated/mock";

const server = setupServer(...handlers);

try {
  server.listen();
} catch (error) {
  console.log(error);
}
