export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
}

const STORAGE_KEY = "chronos_target_date";

export const getTargetDate = (): Date => {
  if (typeof window === "undefined") return new Date();
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const date = new Date(stored);
    // If stored date is in the past, reset it for the demo
    if (date.getTime() < Date.now()) {
      return createNewTargetDate();
    }
    return date;
  }
  return createNewTargetDate();
};

const createNewTargetDate = (): Date => {
  const target = new Date();
  target.setDate(target.getDate() + 14); // 2 weeks from now
  localStorage.setItem(STORAGE_KEY, target.toISOString());
  return target;
};

export const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    total: difference,
  };
};
