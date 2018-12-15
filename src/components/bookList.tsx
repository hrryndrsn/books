import React from "react";
import styled from "styled-components";

//------------------------------------------------------

const ListContainer = styled.div`
  margin-top: 10px;
`;

const BookCardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
  }
`;

const BookCardLayout = styled.div`
  display: grid;
`;

const EmptyStateList = styled.div`
  text-align: center;
  margin: 20vh 10px;
  color: rgba(0, 0, 0, 0.2);
`;

const BookTitle = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
  color: rgba(0, 0, 0, 1);
  font-family: "Oswald", serif;
`;

const Byline = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const Author = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
`;

const Details = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
`;

//------------------------------------------------------

interface Fields {
  bookTitle: string;
  bookAuthor: string;
  bookUrl: string;
  isReading: boolean;
  audiobook: boolean;
}

interface BookRecord {
  id: string;
  fields: Fields;
  createdTime: Date;
}


interface BookCardProps {
  bookData: BookRecord
 }


 const BookCard: React.SFC<BookCardProps> = (props) => (
  <BookCardWrapper>
    <BookCardLayout>
      <BookTitle>{props.bookData.fields.bookTitle}</BookTitle>
      <Details>
        <Author>{props.bookData.fields.bookAuthor}</Author>
        <Byline>{props.bookData.fields.bookUrl}</Byline>
      </Details>
    </BookCardLayout>
  </BookCardWrapper>
);

interface AppProps {
  readingList: BookRecord[];
}

class BookList extends React.Component<AppProps> {
  render() {
    if (this.props.readingList.length === 0) {
      //no books
      return <EmptyStateList>Read some boooks m80</EmptyStateList>;
    } else {
      return (
        <ListContainer>
          {this.props.readingList.map((book, index) => {
            // return console.log(book);
            return <BookCard bookData={book} />;
          })}
        </ListContainer>
      );
    }
  }
}
export default BookList;
