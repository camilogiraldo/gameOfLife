export default function arrayClone(arr) {
  return arr.map(o => [...o]);
};