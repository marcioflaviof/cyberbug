export function classNames(...classes: (string | undefined | Boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
