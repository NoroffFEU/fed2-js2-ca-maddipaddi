import { API_KEY } from "./constants";

export function headers(hasBody = false) {
  const headers = new Headers();

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (hasBody) {
    headers.append("Content-Type", "application/json")
  }
  
  return headers;
}
