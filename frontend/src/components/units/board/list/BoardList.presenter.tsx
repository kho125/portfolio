import { getDate } from "../../../../commons/libraries/utils";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import Searchbars01 from "../../../commons/searchbars/Searchbars01.container";
import {
  Wrapper,
  BestTitle,
  Bests,
  Best1,
  Img1,
  Title,
  BestBottom,
  Bestleft,
  UserImg,
  UserName,
  Data,
  BestRight,
  LikeImg,
  LikeCount,
  Best2,
  Best3,
  Best4,
  ColumnBasic,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnTitle,
  Footer,
  PencilIcon,
  Enrollment,
  Row,
  TableBottom,
  TableTop,
  TextToken,
} from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <Wrapper>
      <BestTitle>게시글</BestTitle>
      {/* <Bests> */}
        {/* @ts-ignore */}
        {/* {props.bestData?.fetchUseditemsOfTheBest.map((data: any) => (
        <Best1 
          key={data._id}
          onClick={() => props.onClickBestBoard(data._id)}
          >
          <Img1 src="aaa/img1.png" />
          <Title></Title>

          <BestBottom>
            <Bestleft>
              <UserImg src={`https://storage.googleapis.com/${data.images[0] || ""}`} />
              <UserName></UserName>
            </Bestleft>

            <BestRight>
              <LikeImg src="./images/boards/best/like.png" />
              <LikeCount></LikeCount>
            </BestRight>
          </BestBottom>
          <Data></Data>
        </Best1>
        ))} */}

        {/* --------- 하드 코딩 ----------- */}
        {/* <Best1>
          <Img1 src="aaa/img1.png" />
          <Title>노는게 제일 좋아</Title>

          <BestBottom>
            <Bestleft>
              <UserImg src="./images/boards/best/user.png" />
              <UserName>뽀로로</UserName>
            </Bestleft>

            <BestRight>
              <LikeImg src="./images/boards/best/like.png" />
              <LikeCount>999</LikeCount>
            </BestRight>
          </BestBottom>
          <Data>Date : 2021.07.04</Data>
        </Best1>
        <Best2>
          <Img1 src="aaa/img1.png" />
          <Title>마지막이네요👍🏼</Title>

          <BestBottom>
            <Bestleft>
              <UserImg src="./images/boards/best/user.png" />
              <UserName>코드캠프</UserName>
            </Bestleft>

            <BestRight>
              <LikeImg src="./images/boards/best/like.png" />
              <LikeCount>999</LikeCount>
            </BestRight>
          </BestBottom>
          <Data>Date : 2021.09.30</Data>
        </Best2>
        <Best3>
          <Img1 src="aaa/img1.png" />
          <Title>코드들과 친해지세요 그리고 전 항상..</Title>

          <BestBottom>
            <Bestleft>
              <UserImg src="./images/boards/best/user.png" />
              <UserName>노원두</UserName>
            </Bestleft>

            <BestRight>
              <LikeImg src="./images/boards/best/like.png" />
              <LikeCount>999</LikeCount>
            </BestRight>
          </BestBottom>
          <Data>Date : 2021.09.30</Data>
        </Best3>
        <Best4>
          <Img1 src="aaa/img1.png" />
          <Title>ㅠㅠㅠㅠㅠㅠㅠㅠ</Title>

          <BestBottom>
            <Bestleft>
              <UserImg src="./images/boards/best/user.png" />
              <UserName>원두없는 원두팀</UserName>
            </Bestleft>

            <BestRight>
              <LikeImg src="./images/boards/best/like.png" />
              <LikeCount>999</LikeCount>
            </BestRight>
          </BestBottom>
          <Data>Date : 2021.10.01</Data>
        </Best4> */}
        {/* --------------------------- */}
        {/* </Bests> */}

      <Searchbars01
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />

      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((data, index: number) => (
        <Row key={data._id}>
          <ColumnBasic>{10 - index}</ColumnBasic>
          <ColumnTitle id={data._id} onClick={props.onClickMoveToBoardDetail}>
            {data.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((data) => (
                <TextToken key={uuidv4()} isMatched={props.keyword === data}>
                  {data}
                </TextToken>
              ))}
          </ColumnTitle>
          <ColumnBasic>{data.writer}</ColumnBasic>
          <ColumnBasic>{getDate(data.createdAt)}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      <Footer>
        <Paginations01
          refetch={props.refetch}
          count={props.dataBoardsCount?.fetchBoardsCount}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
        <Enrollment onClick={props.onClickMoveToBoardNew}>
          <PencilIcon src="/images/boards/list/write.png" />
          게시물 등록하기
        </Enrollment>
      </Footer>
    </Wrapper>
  );
}
