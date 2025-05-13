import axios, { AxiosInstance, RawAxiosRequestHeaders } from "axios";

import { StartsWith } from "../../types/general";

type Headers = RawAxiosRequestHeaders;
type HeaderTypes = "default" | "general" | "get" | "post";
type AllHeaders = {
  [key in HeaderTypes]?: Headers;
};

export default class API {
  private static API_INSTANCES: Map<string, API> = new Map();

  /**
   * Ensures a single instance of API only is ever created with the passed baseURL when calling this method
   * @param baseURL The base URL for the api. (The starting point of which every call will occur)
   * @returns Single API instance
   */
  public static single(baseURL: string) {
    if (this.API_INSTANCES.has(baseURL))
      return this.API_INSTANCES.get(baseURL) as API;

    const api = new API(baseURL);
    this.API_INSTANCES.set(baseURL, api);

    return api;
  }

  #axiosInstance: AxiosInstance | null = null;
  #headers: AllHeaders = {
    default: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  #baseURL: string;
  constructor(baseURL: string) {
    this.#baseURL = baseURL;
  }

  /**
   * To create a new instance of API dedicated to one sub-path only.
   * @param path The new path branches from the baseURL. (It should start with '/')
   * @returns New API instance
   */
  subPath(path: StartsWith<"/">) {
    const api = API.single(this.baseURL + path);
    api.headers = this.headers;

    return api;
  }

  get baseURL() {
    return this.#baseURL;
  }

  get axiosInstance(): AxiosInstance {
    if (!this.#axiosInstance)
      this.#axiosInstance = axios.create({
        baseURL: this.baseURL,
        headers: this.#headers,
      });

    return this.#axiosInstance;
  }

  private dirtyHeaders() {
    this.#axiosInstance = null;
  }

  set headers(headers: AllHeaders) {
    this.dirtyHeaders();
    this.#headers = headers;
  }

  set generalHeaders(headers: Headers) {
    this.dirtyHeaders();
    this.#headers.general = { ...this.#headers.default, ...headers };
  }

  set getHeaders(headers: Headers) {
    this.dirtyHeaders();
    this.#headers.get = headers;
  }

  set postHeaders(headers: Headers) {
    this.dirtyHeaders();
    this.#headers.post = headers;
  }

  get headers() {
    return this.#headers;
  }

  get generalHeaders() {
    return { ...this.headers.default, ...this.headers.general };
  }

  get getHeaders() {
    return { ...this.generalHeaders, ...this.headers.get };
  }

  get postHeaders() {
    return { ...this.generalHeaders, ...this.headers.post };
  }

  //? Request Helper Methods

  private queryValueValidate = (val: any): string | null => {
    if (typeof val === "string") return val.trim().replaceAll(" ", "_");

    if (Array.isArray(val))
      return val
        .map((v) =>
          Array.isArray(v)
            ? `[${this.queryValueValidate(v)}]`
            : this.queryValueValidate(v)
        )
        .join(",");

    if (val == null) return null;

    return `${val}`;
  };

  private pathWithQueries = (
    path: string,
    queries: Record<string, any> | null = null
  ) => {
    if (queries && Object.values(queries).some((val) => val != null)) {
      path += "?";

      const queryStr: string[] = [];
      for (const key in queries) {
        if (!Object.prototype.hasOwnProperty.call(queries, key)) continue;

        const value = this.queryValueValidate(queries[key]);
        if (value == null) continue;

        queryStr.push(`${key}=${value}`);
      }

      path += queryStr.join("&");
    }

    return path;
  };

  //? CRUD Methods

  get = async <T>(path: string, queries: Record<string, any> | null = null) => {
    path = this.pathWithQueries(path, queries);
    return this.axiosInstance.get<T>(path, {
      headers: this.getHeaders,
    });
  };

  post = async <T>(
    path: string,
    body: any,
    queries: Record<string, any> | null = null
  ) => {
    path = this.pathWithQueries(path, queries);
    return this.axiosInstance.post<T>(path, body, {
      headers: this.postHeaders,
    });
  };
}
