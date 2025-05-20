import { API } from "@/core/utils";
import { ResError } from "../types";

const mainServerBasePath = process.env.API_BASE_PATH;
export const mainServer = API.single<{}, ResError>(mainServerBasePath);
