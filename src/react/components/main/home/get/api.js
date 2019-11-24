import { port, endpoint } from "../../../../../shared/index";

export function api() {
  const { client, server } = port;
  const origin = window.location.origin;
  return origin.includes(`:${client}`)
    ? `${origin.replace(client, server)}${endpoint}`
    : endpoint;
}
