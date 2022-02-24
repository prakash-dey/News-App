import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function Home({ handleRemoveArticle, data, error, loading,changeUrl}) {


  return (
    <div>
        <Header changeUrl={changeUrl}/>
        {loading && <div className="loading">News Loading...</div>}
        {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {data && data.map(({title, urlToImage, publishedAt, url, content})=>(<Article 
        desc = {content}
        title={title} 
        img={urlToImage} 
        id={publishedAt}
        key={url}
        url={url}
        removeArticle={handleRemoveArticle}/>))}
        <Footer/>
    </div>
  );
}

export default Home;
