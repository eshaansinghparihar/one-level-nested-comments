import React, { useState } from 'react';
import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';
import TextCard from './TextCard';
import EditCard from './EditCard';

const Container = styled.div`
  width: 80%;
  margin-left: auto;
`;

const CardContainer = styled.div`
  
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const Card = styled.div`
  position: relative;
  border: 1px solid #ccc;
  background-color: #efefef;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
`;

const Name = styled.div`
  align-self: flex-start;
  font-weight: bold;
`;

const DateText = styled.div`
  align-self: flex-end;
  font-size: 0.8rem;
  color: #808080;
  font-weight:600;
  margin-left: auto;
`;

const CommentText = styled.p`
  overflow-wrap: break-word;
  padding-bottom: 16px;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  color: #007bff;
  padding: 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 16px;
`;

const IconButton = styled.button`
  background-color: #808080;
  padding: 8px;
  border-radius: 50%;
  color: #fff;
  align-self: flex-end;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  right: -13px;
  top: 50%;
  font-size: large;
  transform: translateY(-50%);
`;

const DeleteIcon = styled(RiDeleteBin6Line)` 
`;

const CommentCard = ({ comment, name, replyText, 
  setName, setReplyText, addReply, onEdit, deleteComment }) => {

  const parsedDate = new Date(comment.dateAdded).toDateString().split(' ').slice(1).join(' ')
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [showEditBox, setShowEditBox] = useState(false);

  return (
    <div>
    <CardContainer key={comment.id}>
      <Card>
        <Header>
            <Name>{comment.name}</Name>
            <DateText>{parsedDate}</DateText>
        </Header>
        <CommentText>{comment.comment}</CommentText>
        <ButtonContainer>
          {comment.isParent && <Button onClick={()=>setShowReplyBox(!showReplyBox)}>Reply</Button>}
          <Button onClick={()=>setShowEditBox(!showEditBox)}>Edit</Button>
        </ButtonContainer>
        <IconButton onClick={()=>deleteComment(comment.id)}>
            <DeleteIcon />
        </IconButton>
      </Card>
    </CardContainer>
    {showReplyBox && 
    <Container>
    <TextCard
    title={'Reply'} 
    field1Placeholder={'Name'} 
    field2Placeholder={'Reply'}
    name={name}
    comment={replyText}
    setName={setName}
    setComment={setReplyText}
    addComment={()=>{addReply(); setName(''); setReplyText(''); setShowReplyBox(false);}}
    />
    </Container>}
    {showEditBox && 
    <Container>
      <EditCard
      name={comment.name}
      comment={comment}
      editComment={onEdit}
      setShowEditBox={setShowEditBox}
      />
    </Container>
    }
    {comment.children && comment.children.length > 0 &&
    comment.children.map(comment =>
    <Container key={comment.id}>
    <CommentCard
    comment={comment}
    deleteComment={deleteComment}
    onEdit={onEdit}
    />
    </Container>
    )
   }
    </div>
  );
};

export default CommentCard;
