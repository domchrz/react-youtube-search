export interface VideoDate {
  time: number;
  unit: string;
}

const getSeconds = (milliseconds: number): number => +(milliseconds / 1000).toFixed(0);

const getMinutes = (milliseconds: number): number => +(milliseconds / 60 / 1000).toFixed(0);

const getHours = (milliseconds: number): number => +(milliseconds / 60 / 60 / 1000).toFixed(0);

const getDays = (milliseconds: number): number => +(milliseconds / 24 / 60 / 60 / 1000).toFixed(0);

const getMonths = (milliseconds: number): number =>
  +(milliseconds / 30 / 24 / 60 / 60 / 1000).toFixed(0);

const getYears = (milliseconds: number): number =>
  +(milliseconds / 12 / 30 / 24 / 60 / 60 / 1000).toFixed(0);

export const getDateDiff = (date: string): number => +new Date() - +new Date(date);

export const getVideoDate = (milliseconds: number): VideoDate => {
  switch (true) {
    case !!getYears(milliseconds):
      return { time: getYears(milliseconds), unit: 'years' };
    case !!getMonths(milliseconds):
      return { time: getMonths(milliseconds), unit: 'months' };
    case !!getDays(milliseconds):
      return { time: getDays(milliseconds), unit: 'days' };
    case !!getHours(milliseconds):
      return { time: getHours(milliseconds), unit: 'hours' };
    case !!getMinutes(milliseconds):
      return { time: getMinutes(milliseconds), unit: 'minutes' };
    default:
      return { time: getSeconds(milliseconds), unit: 'seconds' };
  }
};
