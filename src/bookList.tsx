import React from "react";
import styled from "styled-components";
import BookCard from "./BookCard"

//------------------------------------------------------

const ListContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const EmptyStateList = styled.div`
  text-align: center;
  margin: 20vh 10px;
  color: rgba(0, 0, 0, 0.2);
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
            return <BookCard key={index} bookData={book} />;
          })}
        </ListContainer>
      );
    }
  }
}
export default BookList;
