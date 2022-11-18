import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Breakfast from './components/Breakfast';
import MainDishes from './components/MainDishes';
import FullRecipe from './components/FullRecipe';
import Salads from './components/Salads';
import Soup from './components/Soup';
import Desserts from './components/Desserts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App2.css';
import Posts from './components/Posts';
import { useAppContext } from './components/AppContext';

function App() {
  const fetchedData = useAppContext();
  console.log('data from context:', fetchedData);

  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //setArticles(fetchedData);
  }, [fetchedData]);

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <main>
          <Navbar />
          <div className='wrapper'>
            <Routes>
              <Route path='home' element={<Home />} />
              <Route path='breakfast/*' element={<Breakfast />}>
                <Route path=':recipe' element={<FullRecipe />} />
              </Route>
              <Route path='mainDishes/*' element={<MainDishes />}>
                <Route path=':recipe' element={<FullRecipe />} />
              </Route>
              <Route path='salads/*' element={<Salads />}>
                <Route path=':recipe' element={<FullRecipe />} />
              </Route>
              <Route path='soups/*' element={<Soup />}>
                <Route path=':recipe' element={<FullRecipe />} />
              </Route>
              <Route path='desserts/*' element={<Desserts />}>
                <Route path=':recipe' element={<FullRecipe />} />
              </Route>
            </Routes>
            {fetchedData?.fetchedData && (
              <Posts posts={fetchedData.fetchedData} />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
