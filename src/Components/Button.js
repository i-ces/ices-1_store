import styled from 'styled-components'


export const ButtonContanier = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border:0.05rem solid var(--lightGreen);
border-color: ${props => 
props.cart ? "var(--mainYellow)":"var(--lightGreen)"};
color: ${props => props.cart?"var(--mainYellow)":"var(--lightGreen)"};

border-radius: 0.5 rem;
padding; 0.2rem 0.5rem 0.2rem 0rem;
transition:all 0.5s ease-in-out;
&:hover{
    background: ${props => props.cart?"var(--mainYellow)":"var(--lightGreen)"};
    color: ${props => props.cart?"var(--mainWhite)":"var(--mainGreen)"};
&:focus {
    outline:none;
    
}

}
`