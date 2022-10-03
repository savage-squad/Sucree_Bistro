import ArticleListComponent from "../../components/_ui/BlogArticleList";
import SlickComponents from "../../components/_ui/slick";

import WithSpeechBubblesComponent from "../../components/_ui/WithSpeechBubbles";

export default function HomePage() {
    return (
        <div >
            <ArticleListComponent />
            {/* <SlickComponents 
                {...settings} /> */}
            <WithSpeechBubblesComponent />
        </div>
    )
}