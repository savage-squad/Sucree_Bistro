import ArticleListComponent from "../../src/components/articleListComponent";
import FooterComponents from "../../src/components/footer";
import NavComponents from "../../src/components/nav";
import AutoPlay from "../../src/components/slick";
import WithSpeechBubblesComponent from "../../src/components/withSpeechBubblesComponent";

export default function HomePage() {
    return (
        <><div style={{ width: "100%" }}>
            <NavComponents />
            {/* <CaptionCarouselComponents /> */}
            <ArticleListComponent />
            <AutoPlay />
            <WithSpeechBubblesComponent />
            <FooterComponents />
        </div>
        </>
    )
}