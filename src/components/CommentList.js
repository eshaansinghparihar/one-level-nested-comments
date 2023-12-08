import React, { useState, useEffect } from 'react';
import TextCard from './TextCard';
import CommentCard from './CommentCard';
import styled from 'styled-components';
import generateComment from '../utils/generateComment';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default function CommentList() {
  const [comments, setComments]= useState([])
  const [name, setName] = useState('')
  const [inputComment, setComment] = useState('')
  const [replyText, setReplyText] = useState("");
  const [replierName, setReplierName] = useState('')

  useEffect(()=>{
    localStorage.setItem('comments',JSON.stringify(comments))
  }, [comments])

  useEffect(()=>{
    const data = localStorage.getItem('comments')
    if(data){
      setComments(JSON.parse(data))
     }
    },[])

  const insertCommentHandler=()=>{
    if(name && inputComment){
      let commentsCopy= [...comments]
      const comment = generateComment(inputComment, name, true)
      commentsCopy.push(comment)
      setComments(commentsCopy)
      setComment('')
      setName('')
    }
    else
    alert('Name or comment cannot be blank')
  }

  function addReplyHandler(commentId){
    if(replierName && replyText){
    const comment=generateComment(replyText, replierName, false)
    insertReply(commentId, comment)
  }
    else{
      alert('Name or Reply cannot be blank')
    }
  } 

  function insertReply(commentId, newComment){
    let commentsCopy = [...comments]
    for (let i = 0; i < commentsCopy.length; i++) {
      let comment = commentsCopy[i];
      if (comment.id === commentId) {
        comment.children.unshift(newComment);
      }
    }
    setComments(commentsCopy);
  }

  function deleteComment(commentId){
    const stack = [...comments];

  while (stack.length > 0) {
    const currentComment = stack.pop();

    currentComment.children = currentComment.children
      ? currentComment.children.filter(comment => comment.id !== commentId)
      : [];

    stack.push(...currentComment.children);
    }
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
  }

  return (
    <div>
        <Container>
        <TextCard 
        title={'Comment'} 
        field1Placeholder={'Name'} 
        field2Placeholder={'Comment'}
        name={name}
        comment={inputComment}
        setName={setName}
        setComment={setComment}
        addComment={insertCommentHandler}/>
        {comments.length > 0 && comments.map(comment =>
        <CommentCard 
        key={comment.id}
        comment={comment}
        name={replierName}
        replyText={replyText}
        setName={setReplierName}
        setReplyText={setReplyText}
        addReply={()=>addReplyHandler(comment.id)} 
        onDeleteHandler={deleteComment}/>
        )}
        </Container>
    </div>
  )
}
