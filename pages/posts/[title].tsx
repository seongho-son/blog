import React, { useEffect } from 'react'
import styled from 'styled-components'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Preview } from 'components/common/Preview'
import { PREFIX } from 'infra/config'
import { getMarkdownContent, markdownLayoutFilter } from 'utils/format'
import { Frame } from 'components/common/Frame'
import { Column, Media } from 'components/common/Layout'
import { BaseText, ExtraBoldText } from 'components/common/Text'
import { posts } from 'public/posts'
import { useRouter } from 'next/router'
import { ThemeColor } from 'infra/type'
import { theme } from 'styles/theme'
import { analytics } from 'infra/analytics'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => {
    return {
      params: {
        title: post,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const title = context.params?.title as string
  const data = await fetch(decodeURI(`${PREFIX}/posts/${title}.md`)).then(
    (res) => res.text(),
  )

  return {
    props: { data },
  }
}

const Post: NextPage<{ data: string }> = ({ data }) => {
  analytics.traffic('page_post')
  const router = useRouter()
  const title = markdownLayoutFilter('title', data)
  const writer = markdownLayoutFilter('writer', data)
  const content = getMarkdownContent(data)

  useEffect(() => {
    router.beforePopState((state) => {
      state.options.scroll = false
      return true
    })
  }, [router])

  return (
    <Frame backgroundColor={ThemeColor.B1}>
      <Main>
        <Media>
          <Content>
            <TitleWrapper>
              <MainTitle as='h1'>{title}</MainTitle>
              {/* {writer && <SmallText>{writer}</SmallText>} */}
            </TitleWrapper>
            <Column>
              <Preview
                source={content}
                style={{
                  backgroundColor: theme.color.background1,
                  color: theme.color.background2,
                }}
              />
            </Column>
            <ItalicTitle as='h2'>
              - {writer} [{title}] -
            </ItalicTitle>
          </Content>
        </Media>
      </Main>
    </Frame>
  )
}

const Content = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    gap: 40px;
  }
  gap: 80px;
`

const Main = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 60px 0;
  }
  padding: 100px 0;
`

const TitleWrapper = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    align-items: start;
  }
  align-items: center;
  gap: 20px;
`

const MainTitle = styled(ExtraBoldText)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h1};
  }
  font-size: 60px;
  color: ${(p) => p.theme.color.background2};
`

const SmallText = styled(BaseText)`
  @media ${(p) => p.theme.media.mobile} {
  }
  font-weight: ${(p) => p.theme.weight.regular};
  color: ${(p) => p.theme.color.gray1};
`

const ItalicTitle = styled(SmallText)`
  font-style: italic;
  text-align: end;
`

export default Post
