import React, { Component } from 'react'; 

class RenewalSupportPage extends Component {
  
    render() {
        return (
            <section id="content">
                <div className="w3-container">
                    <div className="w3-panel w3-blue-grey">
                        <h6>Renewal Support</h6>
                    </div>
                    <div className="w3-bar w3-theme-d4">
                        <button className="w3-bar-item w3-button tablink w3-theme" onclick="maintabnav(event,'maintabContainer','tablink','one')">Add</button>
                        <button className="w3-bar-item w3-button tablink" onclick="maintabnav(event,'maintabContainer','tablink','two')">Ticket List</button>
                    </div>                    
                    <div id="one" className="w3-container w3-border w3-white maintabContainer">                       
                        <form className="w3-container " noValidate> 
                            <div className="w3-row w3-padding-24">
                                <div className="w3-half">
                                    <div className="w3-col w3-padding-8">
                                        <label className="w3-text-grey">Support #</label>
                                        <input className="w3-input w3-border" type="text" required=""/>
                                    </div>
                                    <div className="w3-col w3-padding-8">
                                        <label className="w3-text-grey">IMEI #</label>
                                        <input className="w3-input w3-border" type="text" required=""/>
                                    </div>
                                    <div className="w3-col w3-padding-8">
                                        <label className="w3-text-grey">Complain Type</label>
                                        <input className="w3-input w3-border" type="text" required=""/>
                                    </div>  
                                    <div className="w3-col w3-padding-8">
                                        <label className="w3-text-grey">Renewal Due on</label>
                                        <input className="w3-input w3-border" type="date" required=""/>
                                    </div>                                    
                                </div>
                                <div className="w3-half w3-padding-left-adjust">                                
                                    <div className="w3-col w3-padding-8">
                                        <label className="w3-text-grey">Contact Person Name</label>
                                        <input className="w3-input w3-border" type="text" required=""/>
                                    </div>
                                    <div className="w3-col w3-padding-8">
                                        <label className="w3-text-grey">Contact Email Id</label>
                                        <input className="w3-input w3-border" type="text" required=""/>
                                    </div>
                                    <div className="w3-col w3-padding-8">
                                        <label className="w3-text-grey">Contact Mobile Number</label>
                                        <input className="w3-input w3-border" type="text" required=""/>
                                    </div>                                
                                </div>
                            </div> 
                            <div className="w3-full">
                                <div className="w3-col w3-padding-8">
                                    <label className="w3-text-grey">Notes</label>
                                    <textarea className="w3-input w3-border" style={{resize:"none"}}></textarea>
                                </div>
                            </div>
                            <div className="w3-panel w3-right">
                                <button type="button" className="w3-btn w3-padding w3-teal">Save</button>
                                <button type="button" className="w3-btn w3-padding w3-grey">Reset</button>
                            </div>                             
                        </form>
                    </div>                    
                    <div id="two" className="w3-container w3-border maintabContainer" style={{display:"none"}}>
                        <div className="w3-responsive w3-padding-24">
                            <table className="w3-table-all w3-card-4 w3-hoverable">
                                <thead><tr className="w3-light-grey em-085">
                                    <th>IMEI #</th>
                                    <th>Activated On</th>
                                    <th>Expires On</th>
                                    <th>SIM #</th>
                                    <th>Full Name</th>
                                    <th>EMail Id</th>
                                    <th>Mobile #</th> 
                                    </tr>
                                </thead>
                                <tbody className="em-085">
                                    <tr>
                                        <td>Jill</td>
                                        <td>Smith</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>Jill</td>
                                        <td>Smith</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>Jill</td>
                                        <td>Smith</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                    </tr> 
                                </tbody>
                            </table>
                        </div>
                    </div>                    
                </div>
            </section>
        );
    }
}
 
export default RenewalSupportPage;