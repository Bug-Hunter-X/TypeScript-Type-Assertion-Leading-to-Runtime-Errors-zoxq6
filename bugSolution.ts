function combineArraysSafe<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const array1: number[] = [1, 2, 3];
const array2: number[] = [4,5,6];

const combinedArraySafe: number[] = combineArraysSafe(array1, array2);
console.log(combinedArraySafe); //This is safe

const stringArray1: string[] = ['a', 'b', 'c'];
const stringArray2: string[] = ['d','e','f'];
const combinedStringArray: string[] = combineArraysSafe(stringArray1, stringArray2);
console.log(combinedStringArray); //This is also safe