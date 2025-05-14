import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind';
// Combines multiple class names or class name objects into a single string
// Uses tailwind-merge to handle conflicting tailwind classes
export function cn(…inputs: ClassValue[]): string {
return twMerge(clsx(inputs));
}
