export default function insertReply(comments, commentId, newReply){
    let commentsCopy = [...comments]
    for (let i = 0; i < commentsCopy.length; i++) {
      let comment = commentsCopy[i];
      if (comment.id === commentId) {
        comment.children.push(newReply);
      }
    }
    return commentsCopy
}