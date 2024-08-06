import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const PageOne = () => {
    return (
        <div>
            PageOne
            <Link to="/pagetwo">Navigatg to Page Two</Link>
        </div>
    );
}

const PageTwo = () => {
    return (
        <div>
            <input type="text" />
            <input type="submit" name="" id="" />
        </div>
    );
}

const App = () => { 
    return (
    <div>
        <BrowserRouter>
          <Routes>
          <Route path="/" exact Component={PageOne} />  
          <Route path="/pagetwo"  Component={PageTwo}/>
          </Routes>
        </BrowserRouter>
    </div>
    );
};

export default App;