const nowDate = () => new Date();
const hms = nowDate => [
  { day: nowDate.getDate() },
  { month: nowDate.getMonth() + 1 }
];

const hhmm = arr =>
  arr.map((x, i) => {
    x = Object.values(arr[i]);
    return x < 10 ? "0" + x : x;
  });
const hhmmyyyy = arr => {
  const year = nowDate().getFullYear();
  return `${arr[0]}.${arr[1]}.${year}`;
};

const compose = fns => val => fns.reduce((fn1, fn2) => fn2(fn1), val);
const composed = compose([nowDate, hms, hhmm, hhmmyyyy]);
export const Hhmmyyyy = () => composed();
