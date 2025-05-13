import { API } from "@/core/utils";

const basePath = process.env.API_BASE_PATH;
const api = API.single(basePath);

export default api;
export * from "./server.service";
