export function LikeDislikeChecker(array, userId) {
    if (array.length === 0) {
        return false;
    } else {
        return (array.some((elem) => {
            return (elem === userId)
        }))
    }

}
