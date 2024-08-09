// задание 1
function createPhoneNum(numbers) {
    var firstCode = numbers.slice(0, 3).join("");
    var secondPart = numbers.slice(3, 6).join("");
    var thirdPart = numbers.slice(6).join("");
    return "(".concat(firstCode, ") ").concat(secondPart, "-").concat(thirdPart);
}
var phoneNumber = createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber);
// задание 2
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number < 0) {
            return 0;
        }
        var sum = 0;
        for (var i = 3; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(10));
console.log(Challenge.solution(15));
console.log(Challenge.solution(-1206));
// задание 3 
function rotateArray(nums, k) {
    for (var i = 0; i < k; i++) {
        var lastElement = nums.pop();
        nums.unshift(lastElement);
    }
    return nums;
}
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
var rotatedArray = rotateArray(nums, k);
console.log(rotatedArray);
// задание 4 hhhhhhhhhhhhhhhhhhhhhhhhhh
function findMedianSortedArrays(nums1, nums2) {
    var merged = nums1.concat(nums2).sort(function (a, b) { return a - b; });
    var length = merged.length;
    var isEvenLength = length % 2 == 0;
    var median;
    if (isEvenLength) {
        var mid = length / 2;
        var median1_1 = merged[mid - 1];
        var median2_1 = merged[mid];
        median = (median1_1 + median2_1) / 2;
        return median;
    }
    else {
        var mid = Math.floor(length / 2);
        return merged[mid];
    }
}
var nums1 = [1, 3];
var nums2 = [2];
var median1 = findMedianSortedArrays(nums1, nums2);
console.log(median1);
var nums3 = [1, 2];
var nums4 = [3, 4];
var median2 = findMedianSortedArrays(nums3, nums4);
console.log(median2);
