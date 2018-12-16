import React, { ChangeEvent } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";


///--------------------------------------------------------------------
const BookCardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  background: white;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
  }
`;

const BookCardLayout = styled.div`
  display: grid;

`;

const BookTitle = styled.h2`
margin: 0 0 12px 0;
padding: 0;
color: rgba(0, 0, 0, 1);
font-family: "Oswald", serif;
`;

const UrlText = styled.a`
text-decoration: none;
color: #000;
`

const Author = styled.p`
margin: 0;
font-size: 16px;
color: rgba(0, 0, 0, 0.6);
`;

const Details = styled.div`
display: grid;
grid-template-rows: 1fr;
gap: 12px;
`;

const CardFooter = styled.div`
display: grid;
margin-top: 40px;
grid-template-columns: 3fr 1fr 1fr 1fr;
align-items: center;
`
const CheckboxGroup = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;
text-align: left;`



////---------------------------------------------------------------

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
  
  
class BookCard extends React.Component<BookCardProps> {
    handleCheckboxChange = (event: ChangeEvent)  => {
        console.log(event.target)
        // this.setState({ checked: event.target.checked })
    }
    
    render() {
    return (<BookCardWrapper>
      <BookCardLayout>
        <BookTitle>{this.props.bookData.fields.bookTitle}</BookTitle>
        <Details>
          
          <CardFooter> 
            <Author>{this.props.bookData.fields.bookAuthor}</Author>
            <UrlText href={this.props.bookData.fields.bookUrl}>💸 Buy</UrlText>
            <CheckboxGroup>
              <label>🔈</label>
              <input name="audio" type="checkbox"/>
            </CheckboxGroup>
            <CheckboxGroup>
              <label>📚</label>
              <input name="audio" type="checkbox"/>
              </CheckboxGroup>
            <Checkbox
              className="cb"
              checked={false}
              onChange={this.handleCheckboxChange}
            />
          </CardFooter>
        </Details>
      </BookCardLayout>
    </BookCardWrapper>
    )}
};

  export default BookCard