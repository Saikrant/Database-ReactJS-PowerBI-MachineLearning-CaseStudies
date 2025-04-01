import logo from './logo.svg';
import './App.css';
import NavBar from  './NavBar'
import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
      <div id="page-body"> 
        <Routes>
          <Route path='/' element ={<HomePage/>} />
          <Route path='/about' element ={<AboutPage/>} />
          <Route path='/articles/:articleId' element ={<ArticlePage/>} />
          <Route path='/articles/' element ={<ArticleListPage/>} />
          {/* <Route path='/notFound' element ={<NotFoundPage/>} /> */}
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
       
      </div>
    </div></BrowserRouter>
 
  );
}

export default App;
