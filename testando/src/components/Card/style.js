import styled from "styled-components";

export const CardBox = styled.div`
border: 1px solid #ccc;
    border-radius: 25px;
    padding: 2%;
    flex: 1 1 calc(20% - 4rem);
    background-color: black;
    margin: 2rem;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
    margin-top: 10% ;
    


    &:hover {
    background-color:rgba(46, 41, 41, 0.438);
    color: #fff;
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1200px) {
        flex: 1 1 calc(33.33% - 2rem); 
    }

    @media (max-width: 768px) {
        flex: 1 1 calc(50% - 2rem); 
    }

    @media (max-width: 480px) {
        flex: 1 1 calc(100% - 2rem);
    }
`;
