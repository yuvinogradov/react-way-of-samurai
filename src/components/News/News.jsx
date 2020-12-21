import React from 'react';
import s from './News.module.css';
import {NavLink} from "react-router-dom";

const NewsItem = (props) => {
    let path = "/news/" + props.id;

    return <div className={s.news + ' ' + s.active}>

        <div >{props.date}</div>
        <div >{props.item}</div>
        {/*<NavLink to={path}>{props.name}</NavLink>*/}
    </div>
}


const News = (props) => {

    let newsData = [
        {id: 1, date: '21.11.2020', item: 'News section added'},
        {id: 2, date: '22.11.2020', item: 'New theme added'},
        {id: 3, date: '23.11.2020', item: 'Settings added'},
        {id: 4, date: '24.11.2020', item: 'Music section added'},
    ]




    return (
        <div className={s.news}>
            <div className={s.newsItems}>
                <NewsItem item={newsData[0].item} date={newsData[0].date} />
                <NewsItem item={newsData[1].item} date={newsData[1].date}/>
            </div>
            {/*<div className={s.newsItems}>*/}
            {/*    <Message message={newsData[0].item}/>*/}
            {/*    <Message message={newsData[1].item}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default News;