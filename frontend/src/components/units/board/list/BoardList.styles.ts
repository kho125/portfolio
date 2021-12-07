import styled from "@emotion/styled";
import { ITextTokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const BestTitle = styled.div`
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  justify-content: center;
`;

export const Bests = styled.div`
  display: flex;
  margin-bottom: 80px;
`;

export const Best1 = styled.div`
  margin-right: 24px;
  width: 282px;
  height: 257px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const Img1 = styled.img``;

export const Title = styled.div`
  margin: 20px 0 0 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const BestBottom = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const Bestleft = styled.div`
  display: flex;
`;

export const UserImg = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  margin: 22px 6px 10px 22px;
`;

export const UserName = styled.div`
  margin-top: 23px;
  font-size: 16px;
  line-height: 24px;
`;

export const Data = styled.div`
  margin-left: 20px;
  margin-top: -19px;
  font-size: 12px;
  line-height: 18px;
  color: #828282;
`;

export const BestRight = styled.div`
  margin-right: 23.5px;
`;

export const LikeImg = styled.img`
  margin-left: 3px;
  margin-bottom: 6px;
  margin-top: 20px;
`;

export const LikeCount = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

export const Best2 = styled.div`
  margin-right: 24px;
  width: 282px;
  height: 257px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const Best3 = styled.div`
  margin-right: 24px;
  width: 282px;
  height: 257px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const Best4 = styled.div`
  width: 282px;
  height: 257px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Enrollment = styled.button`
  width: 171px;
  height: 52px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #d3d3d3;
    transition: 0.3s;
  }
`;
