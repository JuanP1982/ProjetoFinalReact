import styled from "styled-components";

export const CardBox = styled.div`
border: 1px solid #ccc;
    border-radius: 25px;
    padding: 1%;
    width: 20%;
    background-color: black;
    margin: 2.6rem;
    color: white;
    margin-top: 10%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease,color 0.3 ease;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
    

    &:hover {
    background-color:rgba(46, 41, 41, 0.438);
    color: #fff;
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1200px) {
        width: 45%; 

    @media (max-width: 768px) {
        width: 100%; 
    }
  }
`;
   



