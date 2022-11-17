import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';
import React, { useState,useEffect,useContext }  from "react";
import "./App2.css";
import Posts from "./components/Posts";
import { AppProvider,useAppContext} from './components/AppContext';

function App() {
  
//const fetchedData = useAppContext();
// const fetchedData = AppProvider(useAppContext);
// console.log("data:   ",fetchedData.props.value.fetchedData);

const fetchedData = useContext(AppProvider);
console.log("data ..",fetchedData);

  const [articles, setArticles] = useState();
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
  //setArticles(fetchedData);
  },[fetchedData]);
  console.log("fetchedData from context :",fetchedData);
  console.log("articles:",articles);




    return (  
      <BrowserRouter>
      <AppProvider>
      <div className="App">
        <div className="container">
          <header>
            <div className="Header">
              <Header />
            </div>
          </header>
          <main>
            <div className="Navbar">
              <Navbar />
            </div>
            <div className="wrapper">
              {/* <Posts posts={this.state.articles} /> */}
             {/* {articles && <Posts posts={articles} /> } */}
            </div>
          </main>
          <footer>
            <div className='footer'>
              <Footer />
            </div>
          </footer>
        </div>
      </div> 
      </AppProvider>
      </BrowserRouter>
    );
  }

export default App;
