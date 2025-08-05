import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Useful to merge classes with CVA variants
 */
export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
