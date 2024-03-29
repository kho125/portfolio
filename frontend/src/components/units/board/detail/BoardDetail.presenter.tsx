import { Tooltip } from "antd";
import {
  Avatar,
  AvatarWrapper,
  Body,
  Button,
  Contents,
  CreatedAt,
  BottomWrapper,
  Header,
  IconWrapper,
  Info,
  ImageWrapper,
  Image,
  LinkIcon,
  LocationIcon,
  Title,
  Wrapper,
  Writer,
  Youtube,
  CardWrapper,
  LikeWrapper,
  LikeCount,
  DislikeIcon,
  DislikeCount,
  LikeIcon,
} from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="/images/avatar.png" />
            <Info>
              <Writer>{props.data?.fetchBoard.writer}</Writer>
              <CreatedAt>{props.data?.fetchBoard.createdAt}</CreatedAt>
            </Info>
          </AvatarWrapper>
          <IconWrapper>
            <LinkIcon src="/images/boards/detail/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <LocationIcon src="/images/boards/detail/location.png" />
            </Tooltip>
          </IconWrapper>
        </Header>
        <Body>
          <Title>{props.data?.fetchBoard.title}</Title>
          <ImageWrapper>
            {props.data?.fetchBoard.images?.map((data: string) => (
              <Image
                key={data}
                src={`https://storage.googleapis.com/${data}`}
              />
            ))}
          </ImageWrapper>
          <Contents>{props.data?.fetchBoard.contents}</Contents>

          <Youtube
            url={props.data?.fetchBoard.youtubeUrl}
            width="486px"
            height="240px"
          />
          <LikeWrapper>
            <IconWrapper>
              <LikeIcon onClick={props.onClickLike} />
              <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
            </IconWrapper>
            <IconWrapper>
              <DislikeIcon onClick={props.onClickDislike} />
              <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
            </IconWrapper>
          </LikeWrapper>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button onClick={props.onClickMoveToList}>목록으로</Button>
        <Button onClick={props.onClickMoveToEdit}>수정하기</Button>
        <Button onClick={props.onClickDelete}>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
