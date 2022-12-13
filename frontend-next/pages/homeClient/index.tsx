import type { NextPage } from 'next'
import ArticleListComponent from './components/articleListComponent'
import CaptionCarouselComponents from './components/carrousel'
import FooterComponents from '../../src/components/footer'
import NavComponents from './components/nav'
import AutoPlay from './components/slick'
//import WithSpeechBubblesComponent from './components/withSpeechBubblesComponent '



const HomeClient: NextPage = () => {
    return (
        <><div style={{ width: "100%" }}>
            <NavComponents />
            <CaptionCarouselComponents />
            <ArticleListComponent />
            <AutoPlay />
            {/* <WithSpeechBubblesComponent /> */}
            <FooterComponents />
        </div>
        </>
    )
}

export default HomeClient
