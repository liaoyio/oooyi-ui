import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 * Copyright (c) 2026 Swami Malode.
 * Rare UI: https://rareui.com
 * License and visible attribution requirements: see oooyi-ui-LICENSE.txt.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
