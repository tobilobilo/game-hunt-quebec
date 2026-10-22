export function basename(): string {
  //return "/carnet-gaming-quebec";
  return import.meta.env.MODE === "production" ? "/game-hunt-quebec" : "";
}

export function routerPath(path: string): string {
  return basename().concat(path);
}
