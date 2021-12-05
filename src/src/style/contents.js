import styled from "styled-components";

const Section = styled.section`
    display: flex; 
    flex-direction: column;
`
const Box = styled.div`
    width: 790px;
    max-height: 114px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin-bottom: 30px; 
`
const Img = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 4px;
    margin-right: 15px;
`
const CompanyName = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
`
const Name = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #334680;
    margin: 11px 0;
`
const ContentButton = styled.button`
    padding: 6px 8px;
    border: none;
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    background: #fff;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
    margin: ${props => props.margin};
`
const PrevNextButton = styled(ContentButton)`
    &:hover {
        font-weight: normal;
        border: 1px solid #1E86FF;
        background: #1E86FF;
        color: #fff;
        transparent: .6s ease;
    }
    margin-right: 6px;
    padding: 6px 10px;
`
const Pag = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export { Section, Box, CompanyName, Name, Img, ContentButton, PrevNextButton, Pag }