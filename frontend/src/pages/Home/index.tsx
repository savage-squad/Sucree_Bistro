import ArticleListComponent from "../../components/_ui/BlogArticleList";
import CaptionCarouselComponents from "../../components/_ui/Carrossel";
import FooterComponents from "../../components/_ui/Footer";
import SlickComponents from "../../components/_ui/slick";
import FocusOnSelectComponents from "../../components/_ui/Slide";

import WithSpeechBubblesComponent from "../../components/_ui/WithSpeechBubbles";

export default function HomePage() {
    return (
        <>

            <CaptionCarouselComponents />
            <FocusOnSelectComponents/>
            <ArticleListComponent />
            <WithSpeechBubblesComponent />
            <FooterComponents />

        </>
    )
}