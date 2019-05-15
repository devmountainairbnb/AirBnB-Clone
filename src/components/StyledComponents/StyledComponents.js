import styled from 'styled-components'

export const BookingCardInput = styled.input`
width: ${props => props.login ? "25rem" : "18rem"};
height: 2.3rem;
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
height: 2.3rem;
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

export const PropertyInput = styled.input`
width: ${props => props.short ? "9.7rem" : "20rem"};
height: 2rem;
border: 1px solid lightgray;
border-radius: 3px;
margin: .9rem .6rem 0rem 0rem;
padding-left: .3rem;
font-size: .9rem;
`

export const CounterButton = styled.button`
width: 30px;
height: 30px;
border-radius: 50%;
border: none;
font-size: 1rem;
font-weight: 200;
background-color: white;
border: 1px solid #007A7F;
margin: 1.2rem;
cursor: pointer;
`

export const ListingButton = styled.button`
width: 7rem;
height 2.5rem;
border-radius: 5px;
background-color: rgb(3, 155, 160);
color: white;
border: none;
margin: 1.5rem 1.5rem 1.5rem 0rem;
font-size: .8rem;
`