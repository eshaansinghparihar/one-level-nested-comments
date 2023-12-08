import generateUuid from './generateUuid';

export default function generateComment(commentText, name, addChildren){
    const comment={
        id: generateUuid(),
        dateAdded: new Date().toISOString(),
        comment: commentText,
        name: name
      }
    if(addChildren)
    comment.children = [] 
    return comment;
}