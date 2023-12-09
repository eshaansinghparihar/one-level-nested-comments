import React, { useState } from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #efefef;
  margin: 16px auto 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
`;

const Title = styled.h5`
  color: #808080;
  float: left;
  font-size: 1.5rem;
  margin-bottom: 16px;
  margin-top: 8px;
`;

const Name = styled.p`
  height:25px;
  padding: 8px;
  margin-bottom: 16px;
`;

const InputField2 = styled.input`
  height:60px;
  padding: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 0;
  width: 10%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  align-self: flex-end;
`;

export default function EditCard({name, comment, editComment, setShowEditBox}) {

  const [editedText, setEditedText]= useState(()=> comment ? comment.comment: '')

  return (
    <div>
      <CardContainer>
      <Title>Edit</Title>
      <Name>{name}</Name>
      <InputField2
        type="text"
        placeholder={comment.comment}
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <br></br>
      <Button onClick={()=>{if(editedText){
          setShowEditBox(false)}
          editComment(comment.id, editedText);  
        }
        }
        >
        Edit</Button>
      </CardContainer>
    </div>
  )
}

