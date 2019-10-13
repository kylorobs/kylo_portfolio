import React from 'react';
import { Link } from 'gatsby';

const postCard = (props) => {
    return (
        <Link style={{ boxShadow: `none` }} to={props.slug}>
            <article key={props.slug}>
                <header>
                    <h3>{props.title}</h3>
                    <p
                        dangerouslySetInnerHTML={{
                        __html: props.description
                        }}
                    />
                </header>
                <div>
                    <img src={props.src} alt={props.alt} />
                </div>
            </article>
      </Link>
    )
};

export default postCard;