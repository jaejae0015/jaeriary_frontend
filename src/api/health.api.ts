import http from "./http";

export const healthCheck = () => http.get("/health");
