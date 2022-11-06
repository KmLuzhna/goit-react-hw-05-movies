import styled from "styled-components";

export const CastList = styled.ul`
  display: grid;
    justify-content: center;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
    padding: 0px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const CastItem = styled.li`
  border: 1px solid #DCDCDC;
  border-radius: 4px;
  text-align: center;
  padding: 10px 0px;

  > a {
    text-decoration: none;
  }
`;