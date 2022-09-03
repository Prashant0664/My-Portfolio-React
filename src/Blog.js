import About_Me from "./About_me_data"
export default function Blog(){
    return(
        <article className="resume" id="resume">
            <article className="about  active" data-page="about" id="about">
                <header>
                <h2 className="h2 article-title active">Blog</h2>
                </header>
                <div className="blogcontenthead">
                {About_Me[5].Blog[0].Blog_Content}
                <div className="blog-content">
                {About_Me[5].Blog[0].Blog_Bottom}
                </div>
                </div>
            </article>
        </article>
    ) 
}