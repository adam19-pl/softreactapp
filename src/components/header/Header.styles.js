import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content:space-between;
min-height: 80px;
background-color: rgb(135, 189, 255);
align-items: center;
color: white;

button{
    min-width: 70px;
    margin-right: 1rem;
        background-color: rgba(3, 198, 252,1);
        border: none;
        border-radius: 16px;
        padding: 0.5rem;
        color: white;
        transition: 500ms;
        &:hover{
            background-color: rgba(3, 123, 252,0.8);
            cursor: pointer;
        }
}
h2{
    margin-left: 1rem;
}
}

`