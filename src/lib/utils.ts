import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function calculateBMI(weight: number, height: number): number {
  const heightInMeters = height / 100;
  return parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));
}

export function getBMICategory(bmi: number): { category: string; color: string; recommendation: string } {
  if (bmi < 18.5) {
    return {
      category: 'Underweight',
      color: 'text-blue-500',
      recommendation: 'Focus on nutrient-dense foods and strength training to build healthy mass.'
    };
  } else if (bmi >= 18.5 && bmi < 25) {
    return {
      category: 'Normal Weight',
      color: 'text-green-500',
      recommendation: 'Great job! Maintain your healthy lifestyle with balanced diet and regular exercise.'
    };
  } else if (bmi >= 25 && bmi < 30) {
    return {
      category: 'Overweight',
      color: 'text-yellow-500',
      recommendation: 'Consider cardio exercises and a balanced diet to reach your optimal weight.'
    };
  } else {
    return {
      category: 'Obese',
      color: 'text-red-500',
      recommendation: 'Consult with our trainers for a personalized weight loss program.'
    };
  }
}
