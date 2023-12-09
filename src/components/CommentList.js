import React, { useState, useEffect } from 'react';
import TextCard from './TextCard';
import CommentCard from './CommentCard';
import styled from 'styled-components';
import generateComment from '../utils/generateComment';
import editComment from '../utils/editComment';
import deleteComment from '../utils/deleteComment';
import insertReply from '../utils/insertReply';
import CommentSortButton from './SortButton';

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
    const data = localStorage.getItem('comments')
    if(data){
      setComments(JSON.parse(data))
     }
    },[])

  function insertCommentHandler(){
    if(name && inputComment){
      let commentsCopy= [...comments]
      const comment = generateComment(inputComment, name, true)
      commentsCopy.push(comment)
      localStorage.setItem('comments',JSON.stringify(commentsCopy))
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
    insertReplyHandler(commentId, comment)
    }
    else{
      alert('Name or Reply cannot be blank')
    }
  } 

  function insertReplyHandler(commentId, newComment){
    const updatedComments= insertReply(comments, commentId, newComment)
    localStorage.setItem('comments',JSON.stringify(updatedComments))
    setComments(updatedComments);
  }

  function editCommentHandler(commentId, editedComment){
    const updatedComments= editComment(comments, commentId, editedComment);
    localStorage.setItem('comments',JSON.stringify(updatedComments))
    setComments(updatedComments);
  }

  function onDeleteHandler(commentId){
    if (window.confirm("Are you sure you want to delete?")){
        const updatedComments= deleteComment(comments, commentId)
        localStorage.setItem('comments',JSON.stringify(updatedComments))
        setComments(updatedComments);
    }
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
        {comments.length > 1 && <CommentSortButton
        comments={comments}
        setComments={setComments}/>}
        {comments.length > 0 && comments.map(comment =>
        <CommentCard 
        key={comment.id}
        comment={comment}
        name={replierName}
        replyText={replyText}
        setName={setReplierName}
        setReplyText={setReplyText}
        addReply={()=>addReplyHandler(comment.id)} 
        deleteComment={onDeleteHandler}
        onEdit={editCommentHandler}/>
        )}
        </Container>
    </div>
  )
}
