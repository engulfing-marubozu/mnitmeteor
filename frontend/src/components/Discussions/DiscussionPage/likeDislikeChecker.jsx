export function LikeDislikeChecker(array, userId) {
    // console.log(array);
    if (array.length === 0) {
        return false;
    } else {
        return (array.some((elem) => {
            return (elem === userId)
        }))
    }

}
// export function DislikeChecker({array,userId})