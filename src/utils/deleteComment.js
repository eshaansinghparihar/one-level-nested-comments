export default function deleteComment(comments, commentId){
    const stack = [...comments];

      while (stack.length > 0) {
        const currentComment = stack.pop();
    
        currentComment.children = currentComment.children
          ? currentComment.children.filter(comment => comment.id !== commentId)
          : [];
    
        stack.push(...currentComment.children);
        }
        const updatedComments = comments.filter(comment => comment.id !== commentId);
        return updatedComments
}