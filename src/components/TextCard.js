import React from 'react'
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

const InputField1 = styled.input`
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

export default function TextCard(props) {

  const { title, 
    field1Placeholder, 
    field2Placeholder, 
    name, 
    comment, 
    setName,
    setComment,
    addComment } = props;

  return (
    <div>
      <CardContainer>
      <Title>{title}</Title>
      <InputField1
        type="text"
        placeholder={field1Placeholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField2
        type="text"
        placeholder={field2Placeholder}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br></br>
      <Button onClick={addComment}>Post</Button>
      </CardContainer>
    </div>
  )
}

