import './App.css';
import React from 'react'
import {ForHire} from './components/ForHire.js'
import {Info} from './components/Info.js'
import {Default} from './components/Default'

import {Routes, Route, NavLink} from 'react-router-dom'
function App() {
  let setLink = () => {
      return window.location.href.replace('http://egorkulik.com/','').replace('%20',' ')
  }

  const [activeCollection, setActiveCollection] = React.useState(`${setLink()==='forhire' || setLink()==='info' || setLink()==='' ? 'projects/Selected Works' : setLink()}`);
  const [collections, setCollections] = React.useState([]);
  const [collectionsName, setCollectionsName] = React.useState([]);
  const [projectsName, setProjectsName] = React.useState([]);

    const [burger_class, setBurgerClass] = React.useState("menu_btn")
    const [menu_class, setMenuClass] = React.useState("nav")
    const [isMenuClicked, setIsMenuClicked] = React.useState(false)


    const updateMenu = () => {
      console.log(isMenuClicked)
      if(!isMenuClicked) {
          setMenuClass("nav open")
          setBurgerClass("menu_btn open")
      }
      else {
          setMenuClass("nav")
          setBurgerClass("menu_btn")
      }
      setIsMenuClicked(!isMenuClicked)
  }


  React.useEffect( () => {
    fetch(`http://egorkulik.com:8000/api/?${
      activeCollection ? `path=${activeCollection}` : ''
    }`)
    .then(res=> res.json())
    .then((json) => setCollections(json))
    .catch((err) => {
      alert('Error takes data');
    });
  } , [activeCollection]);
  

  React.useEffect(() => {
    fetch(`http://egorkulik.com:8000/api/?path=Series`)
    .then(res=> res.json())
    .then((json) => setCollectionsName(json))
    .catch((err) => {

      alert('Error takes data');
    });
    fetch(`http://egorkulik.com:8000/api/?path=projects`)
    .then(res=> res.json())
    .then((json) => setProjectsName(json))
    .catch((err) => {

      alert('Error takes data');
    });
  } , []);


  let newProjectsName = projectsName.filter(item => item!=='Selected Works');
  return (
    <div className="App">

      <div className="container">
        <div className={burger_class} >
        <div onClick={updateMenu} className="header__burger-btn" id="burger" >
          <span></span><span></span><span></span>
        </div>
        <div>
        <h1 className='title_mobile'>
                <NavLink onClick={() => {
                  setActiveCollection('projects/Selected Works');
                  }} to="/">Egor Kulik</NavLink>
            </h1>
          </div>
        </div>
        <div className={menu_class} onClick={updateMenu}>
                
            <h1 className='title'>
                <NavLink onClick={() => {
                  setActiveCollection('projects/Selected Works');
                  }} to="/">Egor Kulik</NavLink>
            </h1>
            
            <ul>
                <li key='-'>
                  <NavLink onClick={() => {
                    setActiveCollection(`projects/Selected Works`)
                    }} to='/projects/Selected Works'>Selected Works</NavLink>
                  </li>

                {newProjectsName.map((obj, index) =>     
                (
                  <li key={index}>
                  <NavLink onClick={() => {
                    setActiveCollection(`projects/${obj}`)
                    }} to={`projects/`+obj}>{obj}</NavLink>
                  </li>
                ))}
            </ul>

            <ul className='series_ul'>
                <p className='series'>SERIES</p>

                {collectionsName.map((obj, index) => (
                  <li key={index}>
                    <NavLink onClick={ () => {
                      setActiveCollection(`Series/${obj}`)
                      }} to={`Series/`+obj} >{obj}</NavLink>
                  </li>
                ))}
            </ul>

            <ul>
                <li>
                    <NavLink to="/forhire">For Hire</NavLink>
                </li>
                <li>
                    <NavLink to="/info">Info</NavLink>
                </li>
            </ul>

            <a href="https://www.instagram.com/travel_clown/">Instagram</a>

        </div>

        <div className='section'>
          
          <Routes>
            <Route path="/forhire" element={<ForHire />}/>
            <Route path="/info" element={<Info />}/>
            <Route path="*" element={<Default collection={collections}  aCollection={activeCollection} />}/>
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
