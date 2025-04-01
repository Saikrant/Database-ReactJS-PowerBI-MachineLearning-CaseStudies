import { Link } from "react-router-dom";
import articles from "./article-content";
import ArticlesList from "../Components/ArticlesList";

const ArticleListPage = () => {
    return(
        <>
        <h1>This is ArticleListPage</h1> 
        <ArticlesList articles={articles}/>

        </>
    );
}

export default ArticleListPage;