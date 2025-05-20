import { API } from "@/core/utils";
import { ResError } from "../types";

const mainServerBasePath = process.env.API_BASE_PATH;
export const mainServer = API.single<{}, ResError>(mainServerBasePath);

const assetsServerBasePath = process.env.APP_URL + "/api/assets";
export const assetsServer = API.single<{}, ResError>(assetsServerBasePath);
