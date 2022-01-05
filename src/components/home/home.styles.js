import styled from 'styled-components';

export const Wrapper = styled.div`
margin-top: 3rem;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
flex-direction: column;

div{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}
a{  

    min-width: 80px;
    margin: 0 1rem;
    
    background-color: rgba(3, 198, 252,1);
    text-decoration: none;
    border-radius: 16px;
    padding: 0.5rem;
    color: white;
    transition: 500ms;
        &:hover{
            background-color: rgba(3, 123, 252,0.8);
            cursor: pointer;
        }
}
table{
    width: 100%;
    td{
        text-align: center;
        justify-content: center;
        a{
            margin: 0 0.3rem;
        }
    }
}
}
`