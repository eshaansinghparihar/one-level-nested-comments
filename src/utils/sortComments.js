export default function sortComments(comments, sortedNewestFirst){

    const sortedComments = [...comments];
    sortedComments.sort((a, b) => (sortedNewestFirst ? 
    a.dateAdded - b.dateAdded : b.dateAdded - a.dateAdded));

    for (const comment of sortedComments) {
    if (comment.children && comment.children.length > 0) {
    comment.children.sort((a, b) => (sortedNewestFirst ? 
    a.dateAdded - b.dateAdded : b.dateAdded - a.dateAdded));
    }
    }
    return sortedComments
};
