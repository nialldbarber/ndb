import {isArrayType} from './is-type';

/**
 * Return list of class names as a string
 * @param classes unknown[]
 * @returns string
 */
export function classNames(...classes: unknown[]): string {
  let classesArr = [...classes];
  // if empty return an empty string
  if (
    classesArr.length === 0 ||
    isArrayType(classesArr, 'object') ||
    isArrayType(classesArr, 'null') ||
    isArrayType(classesArr, 'undefined')
  )
    return '';
  // if any element is a number, convert it to a string
  if (isArrayType(classesArr, 'number')) {
    classesArr = classesArr.map((n: number) => n.toString());
  }
  return classesArr.filter(Boolean).join(' ');
}
