import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
 

const App = () => { 
    return (
    <div>
        <BrowserRouter>
           <div>
            <h1>Header! </h1>
            <Routes>
            <Route path="/" exact Component={StreamList} />
             <Route path="/streams/show" Component={StreamShow} />
             <Route path="/streams/new" Component={StreamCreate} />
             <Route path="/streams/edit" Component={StreamEdit} />
             <Route path="/streams/delete" Component={StreamDelete} />
            </Routes>
           </div>
        </BrowserRouter>
    </div>
    );
};

export default App;   