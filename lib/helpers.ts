export function cn(...args: Array<string>) {
  return args.filter(Boolean).join(" ");
}
