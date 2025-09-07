import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};


// clsx is a utility for constructing className strings conditionally
// twMerge is a utility for merging Tailwind CSS class names and removing duplicates