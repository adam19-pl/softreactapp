import styled from 'styled-components';

export const Wrapper = styled.div`
margin-top: 3rem;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
flex-direction: column;

form{
    display: flex;
    flex-direction: column;
    button{
        background-color:rgba(25, 191, 86,0.8);
        &:hover{
            background-color:rgba(25, 191, 86,1);
        }
    }
    .error{
        font-size: 0.8rem;
        color: red;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        font-style: italic;
        font-weight: 500;

    }
    input{
        padding: 0.5rem;
        min-width: 400px;
        text-align: center;
        border: none;
        border-bottom: 1px solid blue;
        background-color: rgba(205,205,205,0.3);
        outline: none;
    
    }
    .textarea{
        text-align: center;
        width: 400px;
        height: 300px;
    }
    .textarea-error{
        width: 400px;
        height: 300px;  
        border:1px solid red;
    }
}
button{
    width: 140px;
        margin: 1rem auto;
        background-color: rgba(3, 198, 252,0.8);
        border: none;
        border-radius: 16px;
        padding: 0.5rem;
        color: white;
        transition: 500ms;
        &:hover{
            background-color: rgba(3, 198, 252,1) ;
            cursor: pointer;
        }
}


`