import type { NextPage } from 'next'
import ArticleListComponent from '../src/components/articleListComponent'
import CaptionCarouselComponents from '../src/components/carrousel'
import FooterComponents from '../src/components/footer'
import NavComponents from '../src/components/nav'
import AutoPlay from '../src/components/slick'
import WithSpeechBubblesComponent from '../src/components/withSpeechBubblesComponent '



const Home: NextPage = () => {
  return (
    <><div style={{ width: "100%" }}>
      <NavComponents />
      <CaptionCarouselComponents />
      <ArticleListComponent />
      <AutoPlay/>
      <WithSpeechBubblesComponent />
      <FooterComponents />
    </div>
    </>
  )
}

export default Home
