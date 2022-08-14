import { handlers } from "./handlers";
import { setupServer } from "msw/lib/node";

export const mswServer = setupServer(...handlers);
