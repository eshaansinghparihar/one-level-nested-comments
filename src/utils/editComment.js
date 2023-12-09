export default function editComment(comments, commentId, editedText){
    const stack = [...comments];

    while (stack.length > 0) {
      const currentComment = stack.pop();
  
      if (currentComment.id === commentId) {
        currentComment.comment = editedText;
        break;
      }
  
      if (currentComment.children)
      stack.push(...currentComment.children);
    }
  
    return comments
  }