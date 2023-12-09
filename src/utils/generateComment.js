import generateUuid from './generateUuid';

export default function generateComment(commentText, name, isParent){
    const comment={
        id: generateUuid(),
        dateAdded: new Date().getTime(),
        comment: commentText,
        name: name,
        isParent: isParent,
        children:[]
      }
    return comment;
}