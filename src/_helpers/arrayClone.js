export default function arrayClone(arr) {
  //# It's better to use a deep cloning method
  return JSON.parse(JSON.stringify(arr))
}