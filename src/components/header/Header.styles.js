import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (max-width: 568px){

justify-content: center;
  }
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content:space-between;
min-height: 80px;
background-color: rgb(135, 189, 255);
align-items: center;
color: white;

button{
    color: black!important;
    font-weight: 500;
    min-width: 70px;
    margin-right: 1rem;
        background-color: rgb(255,255,255);
        
        border: none;
        border-radius: 16px;
        padding: 0.5rem;
        color: white;
        transition: 500ms;
        &:hover{
            background-color: rgba(3, 123, 252,0.8);
            color: white!important;
            cursor: pointer;
        }
}
h2{
    margin-left: 1rem;
}
}

`