import { API } from "@/core/utils";
import { ResError } from "services/types";

const basePath = process.env.API_BASE_PATH;
const api = API.single<{}, ResError>(basePath);

export default api;
export * from "./server.service";
export * from "./auth.service";
