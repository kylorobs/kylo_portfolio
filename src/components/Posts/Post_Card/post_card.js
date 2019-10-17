import React from 'react';
import { Link } from 'gatsby';
import Styles from './post_card.module.css';


const postCard = (props) => {
    // let screenWidth = window.screen.width;
    // console.log(screenWidth)
    // let size = (screenWidth - 350) / 3;
    // console.log(size)
    return (
        <Link style={{ boxShadow: `none` }} to={props.slug}>
            <article key={props.slug}>
                <div className={Styles.title}>
                    <h3>{props.title}</h3>
                </div>
                <div className={Styles.description}>
                    <p
                        dangerouslySetInnerHTML={{
                        __html: props.description
                        }}
                    />
                </div>
            </article>
      </Link>
    )
};

export default postCard;