import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';
import Home from './components/Home';
import Headlines from './components/Headlines';
import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import SignIn from './components/SignIn';
import Contact from './components/Contact';
import axios from "axios";



function App(){

    const [url, setUrl ] = useState(`https://newsapi.org/v2/everything?q=india&apiKey=fb5542083cca4ac5957e9a26f8a6ec5f`);

    const changeUrl = (e, value)=>{
        e.preventDefault();
        setUrl(`https://newsapi.org/v2/everything?q=${value}}&apiKey=fb5542083cca4ac5957e9a26f8a6ec5f`)
    }       


    // const[url, setUrl] = useState(`https://newsapi.org/v2/everything?q=india&apiKey=fb5542083cca4ac5957e9a26f8a6ec5f`);
    const[data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // const[articles, setArticles] = useState([
    //     { title: "The Mountains are Calling",
    //     img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //     id:1 },

    //     {title: "The Setting Sun",
    //     img:"https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    //     id:2},

    //     { title: "Of Wooden Cottages and Snowy Mountains",
    //     img:"https://images.unsplash.com/photo-1520984032042-162d526883e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //     id:3},
        
    //     {title: "Food is Happiness", img:"https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //     id:4}
    //     ]) 

     useEffect(()=>{
        let abortController;
        const getData = async()=>{
            abortController = new AbortController();
            let signal = abortController.signal;    
            try{
                const response = await axios.get(url, { signal: signal })
                console.log(response.data)
                setData(response.data.articles);
                setError(null);
            }catch(err){
                setError(err.message);
                setData(null);
            }finally{
                setLoading(false);
            }          
        }
        getData();      
        return () => abortController.abort();
     }, [url])


    const handleRemoveArticle=(id)=>{
        setData(data.filter(article => article.publishedAt !== id));
    }

    return(
        <DarkModeProvider>
                <Routes>
                    <Route path='/' element ={<Home loading={loading} data={data} error={error} handleRemoveArticle={handleRemoveArticle} changeUrl={changeUrl}/>}>
                    </Route>
                    <Route path='/headlines' element ={<Headlines/>}>
                    </Route>
                    <Route path='/contact' element ={<Contact/>}>
                    </Route>
                    <Route path='/signin' element ={<SignIn/>}>
                    </Route>
                    <Route path='*' element ={<ErrorPage/>}>
                    </Route>
                </Routes>
        </DarkModeProvider>
    );
    
}


export default App;
