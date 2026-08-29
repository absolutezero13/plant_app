import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

const BASE_URL = "https://dummy-api-jtg6bessta-ey.a.run.app";
type ApiErrorResponse = {
  error?: string;
  message?: string;
};

const getErrorMessage = (error: AxiosError<ApiErrorResponse>): string => {
  if (error.response?.data.message) {
    return error.response.data.message;
  }

  if (error.response?.data.error) {
    return error.response.data.error;
  }

  if (error.code === "ECONNABORTED") {
    return "The request timed out.";
  }

  if (error.response) {
    return `Request failed with status ${error.response.status}.`;
  }

  return "Unable to connect to the server.";
};

export class ApiService {
  private static instance: ApiService | null = null;

  private readonly client: AxiosInstance;

  private constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: "application/json",
      },
      timeout: 15_000,
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error: unknown) => Promise.reject(this.createError(error)),
    );
  }

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }

    return ApiService.instance;
  }

  async get<Response>(
    path: string,
    config?: AxiosRequestConfig,
  ): Promise<Response> {
    const response = await this.client.get<Response>(path, config);
    return response.data;
  }

  private createError(error: unknown): Error {
    if (!axios.isAxiosError<ApiErrorResponse>(error)) {
      return new Error("Unexpected API error.", { cause: error });
    }

    return new Error(getErrorMessage(error), { cause: error });
  }
}

export default ApiService.getInstance();
