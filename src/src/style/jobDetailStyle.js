import styled from "styled-components";

const ApplyText = styled.p`
  text-transform:none;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #334680;
`;
const JobTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

const Desc = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #334680;
`;

export { ApplyText, JobTitle, Desc };