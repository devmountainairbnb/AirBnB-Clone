import styled from 'styled-components'

export const BookingCardInput = styled.input`
width: ${props => props.login ? "25rem" : "18rem"};
height: 2rem;
border: 1px solid lightgray;
border-radius: 3px;
`

export const BookingCardButton = styled.button`
width: ${props => props.login ? "15.5rem" : "5.5rem"};
height 2.5rem;
border-radius: 5px;
background-color: #F76464;
color: white;
border: none;
position: absolute;
bottom: 1rem;
right: 2rem;
`
export const LoginButton = styled.button`
width: ${props => props.login ? "15.5rem" : "5.5rem"};
height 2.5rem;
border-radius: 5px;
background-color: #F76464;
color: white;
border: none;
margin: 1.5rem;
`

export const BookingDateInput = styled.input`
width: 8.9rem;
height: 2rem;
border: 1px solid lightgray;
border-radius 3px;
`

export const CancelButton = styled.button`
width: 30px;
height: 30px;
border-radius: 50%;
border: none;
font-size: 1rem;
font-weight: 200;
background-color: white;
border: 1px solid lightgray;
margin: 1rem;
`