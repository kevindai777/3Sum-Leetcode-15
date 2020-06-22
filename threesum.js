//Objective is to find all unique triplets in a 1-D array that add up to 0.

let nums = [-1, 0, 1, 2, -1, -4]


//O(n^2) solution that sorts the array then puts pointers at the front and 
//beginning.

let result = []

nums.sort((a,b) => {
    return a - b
})

//End at 2nd to last element to make sure no overflow
for (let i = 0; i < nums.length - 2; i++) {
    //Skip any duplicates at beginning of index
    if (i > 0 && nums[i] == nums[i - 1]) {
        continue
    }

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
        let sum = nums[i] + nums[j] + nums[k]
        if (sum == 0) {
            result.push([nums[i], nums[j], nums[k]])

            //Skip any duplicate elements from the left side
            while (nums[j] == nums[j + 1]) {
                j++
            }

            //Skip any duplicate elements from the right side
            while (nums[k] == nums[k - 1]) {
                k--
            }

            //Increment pointers
            j++
            k--
        }

        //If sum is too low, get greater elements
        if (sum < 0) {
            j++
        }

        //If sum is too high, get lesser elements
        if (sum > 0) {
            k--
        }
    }
}

return result