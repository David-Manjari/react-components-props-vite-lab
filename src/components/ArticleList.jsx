import React from "react";
import Articles from "./Article"

function ArticleList({ posts }) {
    return (
        <main>
            {
                posts.map((props) => (
                    <Articles key={props.id}
                        title = {props.title}
                        preview = {props.preview}
                        date = {props.date} />

                ))}
        </main>
    )
}

export default ArticleList;