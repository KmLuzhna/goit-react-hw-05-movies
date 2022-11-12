import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TrendMovieList = styled.ul`
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

export const MoviesCard = styled.li`
  border: 1px solid gray;
  border-radius: 4px;
  text-align: center;
  padding: 10px 0px;
  font-weight: 500;
    font-size: 20px;

  > a {
    text-decoration: none;
  }
`;

// export const ProductName = styled.h3`
//   padding: 4px;
//   margin-top: 8px;
//   margin-bottom: 0;
//   color: black;
// `;

export const AdditonalInfoList = styled.ul`
    list-style: none;
    display: flex;
        padding: 0px;    
        margin-bottom: 30px;
`;

export const AdditonalInfoItem = styled.li`
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 4px;
    width: 100px;
    margin-right: 20px;

      &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: orangered;
  }
`;