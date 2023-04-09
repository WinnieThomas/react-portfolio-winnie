import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/footer";
import Header from "./components/header";
import './App.css';

const App = () => 
<div className="content-container">
<Header/>
<div className="portfoli-container">
<PortfolioContainer />
</div>
<Footer/>
</div>
export default App;
