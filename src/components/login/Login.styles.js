import styled from 'styled-components';

export const Wrapper = styled.div`
margin-top:3rem;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
flex-direction: column;

.text-input-error{
        border:1px solid red;
    }

.register-button{
        width: 140px;
        margin: 1rem auto;
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
form{
    display: flex;
    flex-direction: column;
    .login-error{
        font-size: 0.8rem;
        color: red;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        font-style: italic;
        font-weight: 500;
    }
    
    label{
        margin-top: 0.5rem;
        margin-bottom: 0.3rem;
    }

    input{
        padding: 0.5rem;
        width: 400px;
        text-align: center;
        border: none;
        border-bottom: 1px solid blue;
        background-color: rgba(205,205,205,0.3);
        outline: none;
    
    }
    select{
        display: block;
        margin: 1rem auto 0 auto;
        width: 200px;
        text-align: center;
        outline: none;
        border: none;
        border-bottom: 1px solid blue;
    }
    
    .error{
        font-size: 0.8rem;
        color: red;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        font-style: italic;
        font-weight: 500;
    }
    button{
        width: 140px;
        margin: 1rem auto;
        background-color: rgba(14, 181, 92,0.8);
        border: none;
        border-radius: 16px;
        padding: 0.5rem;
        color: white;
        transition: 500ms;
        &:hover{
            background-color: rgba(25, 191, 86,1);
            cursor: pointer;
        }
    }
}

`