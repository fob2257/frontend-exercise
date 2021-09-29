import Styled from 'styled-components';

export const CatalogContainer = Styled.div`
border: 1px red black;
width: 75%;
display:flex; 
flex-wrap: wrap;
justify-content: center;
margin: auto;
`;

export const CatalogCard = Styled.div`
border: 1px red solid;
height: 425px;
width: 30%;
border: 1px red solid;
margin: 12px; 
border-radius: 8px;
`;

export const CatalogCardImg = Styled.img`
    width: 100%;
    height: 65%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`;

export const CatalogCardTitle = Styled.h2`

`;
