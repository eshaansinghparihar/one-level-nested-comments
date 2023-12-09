import React, { useState } from 'react';
import styled from 'styled-components';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import sortComments from '../utils/sortComments';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const SortButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: black;
  display: flex;
  align-items: center;
`;

const SortText = styled.span`
  margin-right: 8px;
`;

const SortArrows = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArrowUp = styled(BsArrowUp)`
  display: ${(props) => (props.sortedNewestFirst ? 'inline' : 'none')};
`;

const ArrowDown = styled(BsArrowDown)`
  display: ${(props) => (!props.sortedNewestFirst ? 'inline' : 'none')};
`;

function CommentSortButton({comments, setComments}){
  const [sortedNewestFirst, setSortedNewestFirst] = useState(false);

  const handleSortClick = () => {
    setSortedNewestFirst(!sortedNewestFirst);
    const commentsCopy= [...comments]
    const sortedComments= sortComments(commentsCopy, sortedNewestFirst)
    setComments(sortedComments)
    localStorage.setItem('comments',JSON.stringify(sortedComments))
  };

  return (
    <Container>
      <SortButton onClick={handleSortClick}>
        <SortText>Sort By: Date and Time</SortText>
        <SortArrows>
          <ArrowUp sortedNewestFirst={sortedNewestFirst} />
          <ArrowDown sortedNewestFirst={sortedNewestFirst} />
        </SortArrows>
      </SortButton>
    </Container>
  );
};

export default CommentSortButton;