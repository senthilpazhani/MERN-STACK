import React, { Component } from 'react'; 

class DashboardPage extends Component { 

    _filterSelection = (c,event) => {
        var cards = document.getElementsByClassName("filterDiv");    
        [...cards].map(card => {card.classList.add('w3-hide');
            if (card.className.indexOf(c) > -1) {card.classList.toggle('w3-hide');} 
        });
         
        var options = document.querySelectorAll('#myBtnContainer button');
        [...options].map(opt => {opt.classList.remove('w3-theme');})
        event.target.classList.toggle('w3-theme');        
    }    

    render() {
        return (
            <section id="content">
                <div className="w3-panel" id="myBtnContainer">
                    <button className="w3-btn w3-theme-l4 w3-padding-small w3-margin-small" onClick={this._filterSelection.bind(this,'')}> Show all</button>
                    <button className="w3-btn w3-theme-l4 w3-padding-small w3-margin-small" onClick={this._filterSelection.bind(this,'cars')}> Cars</button>
                    <button className="w3-btn w3-theme-l4 w3-padding-small w3-margin-small" onClick={this._filterSelection.bind(this,'animals')}> Animals</button>
                    <button className="w3-btn w3-theme-l4 w3-padding-small w3-margin-small" onClick={this._filterSelection.bind(this,'fruits')}> Fruits</button>
                    <button className="w3-btn w3-theme-l4 w3-padding-small w3-margin-small" onClick={this._filterSelection.bind(this,'colors')}> Colors</button>
                </div>
                <div className="container">
                    <div className="w3-col l2 m3 s5 filterDiv w3-card w3-white w3-left w3-margin-small cars">
                        <img src="images/avatar3.png" alt="Avatar" style={{width:"100%",opacity:"0.85"}}/>
                        <div className="w3-container">
                            <div className="w3-padding-16 w3-small">Senthil Kumar Palanisamy</div>                            
                        </div>
                    </div>
                    <div className="w3-col l2 m3 s5 filterDiv w3-card w3-white w3-left w3-margin-small colors fruits">
                        <img src="images/avatar3.png" alt="Avatar" style={{width:"100%",opacity:"0.85"}}/>
                        <div className="w3-container">
                            <div className="w3-padding-16 w3-small">Senthil Kumar Palanisamy</div>                            
                        </div>
                    </div>
                    <div className="w3-col l2 m3 s5 filterDiv w3-card w3-white w3-left w3-margin-small cars">
                        <img src="images/avatar3.png" alt="Avatar" style={{width:"100%",opacity:"0.85"}}/>
                        <div className="w3-container">
                            <div className="w3-padding-16 w3-small">Senthil Kumar Palanisamy</div>                            
                        </div>
                    </div>
                    <div className="w3-col l2 m3 s5 filterDiv w3-card w3-white w3-left w3-margin-small colors">
                        <img src="images/avatar3.png" alt="Avatar" style={{width:"100%",opacity:"0.85"}}/>
                        <div className="w3-container">
                            <div className="w3-padding-16 w3-small">Senthil Kumar Palanisamy</div>                            
                        </div>
                    </div>
                    <div className="w3-col l2 m3 s5 filterDiv w3-card w3-white w3-left w3-margin-small cars animals">
                        <img src="images/avatar3.png" alt="Avatar" style={{width:"100%",opacity:"0.85"}}/>
                        <div className="w3-container">
                            <div className="w3-padding-16 w3-small">Senthil Kumar Palanisamy</div>                            
                        </div>
                    </div>
                    <div className="w3-col l2 m3 s5 filterDiv w3-card w3-white w3-left w3-margin-small colors">
                        <img src="images/avatar3.png" alt="Avatar" style={{width:"100%",opacity:"0.85"}}/>
                        <div className="w3-container">
                            <div className="w3-padding-16 w3-small">Senthil Kumar Palanisamy</div>                            
                        </div>
                    </div> 
                    <div className="w3-col l2 m3 s5 filterDiv w3-card w3-white w3-left w3-margin-small fruits animals">
                        <img src="images/avatar3.png" alt="Avatar" style={{width:"100%",opacity:"0.85"}}/>
                        <div className="w3-container">
                            <div className="w3-padding-16 w3-small">Senthil Kumar Palanisamy</div>                            
                        </div>
                    </div> 
                </div>                  
            </section>
        );
    }
}
 
export default DashboardPage;