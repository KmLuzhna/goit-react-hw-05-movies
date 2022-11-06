import styled from "styled-components";

export const MovieContainer = styled.div`
    display: flex;
    padding: 20px;
`;
export const MovieInfoContainer = styled.div`
     margin-left: 30px;
`;

export const GenersList = styled.ul`
    list-style: none;
    display: flex;
    font-size: 20px;
    padding: 0px;
`;
export const GenersListItem = styled.li`
  border: 1px solid gray;
  border-radius: 4px;
  text-align: center;
  margin-right: 20px;
  padding: 5px;
  background: #f2f3f4;
  font-weight: 500;
    font-size: 20px;

  > a {
    text-decoration: none;
  }
`;
export const Info= styled.p`
  font-weight: 400;
    font-size: 20px;
`;