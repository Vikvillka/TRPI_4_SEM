// задание 1

function createPhoneNum(numbers: number[]): string {
    const firstCode = numbers.slice(0, 3).join("");
    const secondPart = numbers.slice(3, 6).join("");
    const thirdPart = numbers.slice(6).join("");
  
    return `(${firstCode}) ${secondPart}-${thirdPart}`;
}

const phoneNumber: string = createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber); 

// задание 2
class Challenge {
    static solution(number: number): number {
      if (number < 0) {
        return 0;
      }
  
      let sum = 0;
      for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
        }
      }
  
      return sum;
    }
}
console.log(Challenge.solution(10)); 
console.log(Challenge.solution(15)); 
console.log(Challenge.solution(-1206)); 

// задание 3 
function rotateArray(nums: number [], k: number): number[] {

    for (let i = 0; i < k; i++) {
      const lastElement = nums.pop();
      nums.unshift(lastElement);
    }
  
    return nums;
  }
  
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  const rotatedArray = rotateArray(nums, k);
  console.log(rotatedArray);

// задание 4 

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  const length = merged.length;
  const isEvenLength = length % 2 == 0;
  let median;

  if (isEvenLength) {
    const mid = length / 2;
    const median1 = merged[mid - 1];
    const median2 = merged[mid];
    median = (median1 + median2)/2;
    return median;
  } else {
    const mid = Math.floor(length / 2);
    return merged[mid];
  }
}

const nums1 = [1, 3];
const nums2 = [2];
const median1 = findMedianSortedArrays(nums1, nums2);
console.log(median1);

const nums3 = [1, 2];
const nums4 = [3, 4];
const median2 = findMedianSortedArrays(nums3, nums4);
console.log(median2);