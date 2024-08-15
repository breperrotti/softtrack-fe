import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomNumber(min?: number, max?: number): number {
  if (max && min) return Math.floor(Math.random()* (max - min) + min) ;
  return Math.floor(Math.random() * 100);
}