//@ts-ignore
import Fade from "react-reveal/Fade";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

import {
  Wrapper,
  Section01,
  Section02,
  Section03,
  Section04,
  Title,
  ProfileWrapper,
  ProfileImg,
  ProfileExplanationWrapper,
  ProfileExplanationTextWrapper,
  ProfileExplanationText,
  ProjectExplanationWrapper,
  ProjectStackWrapper,
  ProjectLanguage,
  ProjectFramework,
  ProjectNetwork,
  ProjectGeneral,
  StackTitleWrapper,
  StackTitle,
  StackText,
  AboutWrapper,
  AboutNotionWrapper,
  AboutNotion,
  AboutGithubWrapper,
  AboutGithub,
  AboutBlogWrapper,
  AboutBlog,
  DetailButton,
  TopButton,
  ProjectsWrapper,
  ProjectBoardWrapper,
  ProjectMarketWrapper,
  ProjectNativeWrapper,
  ProjectsImg,
  MyProjectStackWrapper,
  MyProjectStackTitle,
  MyProjectStackTextWrapper,
  MyProjectStackText,
  ProgileExplanationTitle,
  StackUnderLine,
  FrameworkTitle,
  MyStacksTitle,
  ProjectContentsWrapper,
} from "./landing.styles";
import { useRouter } from "next/router";

export default function LandingUI() {
  const router = useRouter();

  const onClickNotion = () => {
    window.open("https://www.notion.so/ccdc2b1a66c04acdb85c64cf1b0556c6");
  };

  const onClickGithub = () => {
    window.open("https://github.com/kho125");
  };

  const onClickBlog = () => {
    window.open("https://jyamin.tistory.com/category/code.camp");
  };

  const onClickBoard = () => {
    router.push("/boards");
  };

  const onClickMarket = () => {
    router.push("/product/main");
  };

  const onClickNative = () => {
    window.open("https://www.youtube.com/watch?v=7VlKfhuJwXs");
  };

  return (
    <Wrapper>
      <Fade bottom>
        <Section01>
          <Fade bottom>
            <Title> WELCOME! </Title>
          </Fade>
          <ProfileWrapper>
            <ProfileImg src="/myprofile/profile.jpg" />
            <ProfileExplanationWrapper>
              <Fade bottom>
                <ProfileExplanationTextWrapper>
                  <ProgileExplanationTitle>
                    안녕하세요. 고객경험을 넘어서 현재는 개발을 사랑하는
                    프론트엔드 개발자 김경호입니다.
                  </ProgileExplanationTitle>
                  <ProfileExplanationText>
                    고객경험을 바탕으로 클라이언트 입장에서 서비스를 구현해보고
                    싶어서 개발을 시작하게 되었습니다.단순히 코드를 작성하는
                    개발자가 아니라, 문제를 지혜롭게 해결해 나가는 개발자로
                    성장하길 희망합니다.
                  </ProfileExplanationText>
                </ProfileExplanationTextWrapper>
              </Fade>
            </ProfileExplanationWrapper>
          </ProfileWrapper>
        </Section01>
      </Fade>
      <Fade bottom>
        <Section02>
          <Fade bottom>
            <MyStacksTitle>MY STACKS</MyStacksTitle>
          </Fade>
          <ProjectExplanationWrapper>
            <Fade bottom>
              <ProjectStackWrapper>
                <ProjectLanguage>
                  <StackTitle> Language </StackTitle>
                  <StackUnderLine />
                  <Fade bottom>
                    <StackText>HTML</StackText>
                    <StackText>CSS</StackText>
                    <StackText>JavaScript</StackText>
                  </Fade>
                </ProjectLanguage>
                <ProjectFramework>
                  <StackTitleWrapper>
                    <FrameworkTitle>Framework & Library</FrameworkTitle>
                  </StackTitleWrapper>
                  <StackUnderLine />
                  <Fade bottom>
                    <StackText>Next.js</StackText>
                    <StackText>React & React-hooks</StackText>
                    <StackText>React-Native</StackText>
                    <StackText>Typescript</StackText>
                    <StackText>Emotion</StackText>
                    <StackText>Styled-Component</StackText>
                  </Fade>
                </ProjectFramework>
                <ProjectNetwork>
                  <StackTitle> Network </StackTitle>
                  <StackUnderLine />
                  <Fade bottom>
                    <StackText>GraphQL & Apollo</StackText>
                    <StackText>Rest API & axios</StackText>
                  </Fade>
                </ProjectNetwork>
                <ProjectGeneral>
                  <StackTitle> Cooperation </StackTitle>
                  <StackUnderLine />
                  <Fade bottom>
                    <StackText>Git & Github</StackText>
                    <StackText>Notion</StackText>
                    <StackText>Slack</StackText>
                    <StackText>Figma</StackText>
                    <StackText>Zeplin</StackText>
                  </Fade>
                </ProjectGeneral>
              </ProjectStackWrapper>
            </Fade>
          </ProjectExplanationWrapper>
        </Section02>
      </Fade>
      <Fade bottom>
        <Section03>
          <Title>ABOUT ME</Title>
          <Fade bottom>
            <AboutWrapper>
              <AboutNotionWrapper>
                <AboutNotion src="myprofile/notion.png" />
                <Fade bottom>
                  <DetailButton onClick={onClickNotion}>
                    이력서 자세히 보기
                  </DetailButton>
                </Fade>
              </AboutNotionWrapper>
              <AboutGithubWrapper>
                <AboutGithub src="myprofile/github.png" />
                <Fade bottom>
                  <DetailButton onClick={onClickGithub}>
                    Github 자세히 보기
                  </DetailButton>
                </Fade>
              </AboutGithubWrapper>
              <AboutBlogWrapper>
                <AboutBlog src="myprofile/tistory.png" />
                <Fade bottom>
                  <DetailButton onClick={onClickBlog}>
                    블로그 자세히 보기
                  </DetailButton>
                </Fade>
              </AboutBlogWrapper>
            </AboutWrapper>
          </Fade>
        </Section03>
      </Fade>
      <Fade bottom>
        <Section04>
          <Title>MY PROJECTS</Title>
          <ProjectsWrapper>
            <Fade bottom>
              <ProjectContentsWrapper>
                <MyProjectStackTitle> 자유게시판 </MyProjectStackTitle>
                <ProjectBoardWrapper onClick={onClickBoard}>
                  <ProjectsImg src="myprofile/test02.jpg" />
                  <MyProjectStackWrapper>
                    <MyProjectStackTextWrapper>
                      <Fade bottom>
                        <MyProjectStackText> - Next.js </MyProjectStackText>
                        <MyProjectStackText>
                          - React & React-hooks
                        </MyProjectStackText>
                        <MyProjectStackText> - TypeSctipt</MyProjectStackText>
                        <MyProjectStackText>- GraphQL </MyProjectStackText>
                        <MyProjectStackText>
                          - Styled-Component
                        </MyProjectStackText>
                        <MyProjectStackText> - Emotion</MyProjectStackText>
                      </Fade>
                    </MyProjectStackTextWrapper>
                  </MyProjectStackWrapper>
                </ProjectBoardWrapper>
              </ProjectContentsWrapper>
            </Fade>
            <Fade bottom>
              <ProjectContentsWrapper>
                <MyProjectStackTitle> 중고마켓 </MyProjectStackTitle>
                <ProjectMarketWrapper onClick={onClickMarket}>
                  <ProjectsImg src="myprofile/test01.jpg" />
                  <MyProjectStackWrapper>
                    <MyProjectStackTextWrapper>
                      <Fade bottom>
                        <MyProjectStackText> - Next.js </MyProjectStackText>
                        <MyProjectStackText>
                          - React & React-hooks
                        </MyProjectStackText>
                        <MyProjectStackText> - TypeSctipt</MyProjectStackText>
                        <MyProjectStackText>- GraphQL </MyProjectStackText>
                        <MyProjectStackText>
                          - Styled-Component
                        </MyProjectStackText>
                        <MyProjectStackText> - Emotion</MyProjectStackText>
                      </Fade>
                    </MyProjectStackTextWrapper>
                  </MyProjectStackWrapper>
                </ProjectMarketWrapper>
              </ProjectContentsWrapper>
            </Fade>
            <Fade bottom>
              <ProjectContentsWrapper>
                <MyProjectStackTitle> 헤이고 </MyProjectStackTitle>
                <ProjectNativeWrapper onClick={onClickNative}>
                  <ProjectsImg src="heygo.png" />
                  <MyProjectStackWrapper>
                    <MyProjectStackTextWrapper>
                      <Fade bottom>
                        <MyProjectStackText>- React-Native</MyProjectStackText>
                        <MyProjectStackText>
                          - React-Navigation
                        </MyProjectStackText>
                        <MyProjectStackText> - TypeScript </MyProjectStackText>
                        <MyProjectStackText>
                          - Styled-Component
                        </MyProjectStackText>
                        <MyProjectStackText>- Apollo-Client</MyProjectStackText>
                        <MyProjectStackText> - GraphQL</MyProjectStackText>
                        <MyProjectStackText> - Firebase </MyProjectStackText>
                      </Fade>
                    </MyProjectStackTextWrapper>
                  </MyProjectStackWrapper>
                </ProjectNativeWrapper>
              </ProjectContentsWrapper>
            </Fade>
          </ProjectsWrapper>
        </Section04>
      </Fade>
      <BackTop>
        <TopButton>
          <ArrowUpOutlined />
        </TopButton>
      </BackTop>
    </Wrapper>
  );
}
