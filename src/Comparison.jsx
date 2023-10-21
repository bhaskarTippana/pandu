import React from 'react'
import "./Comparison.css"
import logo from "./assets/logo.png"
import digit from "./assets/digit.jpg"
import sbi from "./assets/sbi.png"
const Comparison = ({ selectedBanks }) => {
    console.log(selectedBanks);
  return (
    <>
    <div className='gridContainer'>
        <div className="mainChild">
            <div className="subChild">
           <div></div>
           <div className='log'><img src={logo} alt="" /></div>
           <div className='mark'><i className="fa-solid fa-xmark"></i></div>
            </div>
         <div className="control">
         <div className='childrens'>
              <div className="child">
              <div className='com'><p>Comparison</p></div>
                <div className='test'><img src={digit} alt="" /></div>
                <div className='test pad'><img src={sbi} alt="" /></div>
              </div>
              <div className="childs">
                        <div>Premium</div>
                        <div className='digit'><p className='dig'><i className="fa-solid fa-indian-rupee-sign"></i> 8,729/-</p></div>
                        <div className='digitt'><p className='dig'><i className="fa-solid fa-indian-rupee-sign"></i> 8,729/-</p></div>
              </div>

              <div className="childs">
                <div>Final</div>
                <div>4,40,368</div>
                <div>4,40,368</div>
              </div>

              <div className="childs">
                <div>Special Premium</div>
                <div>5,369</div>
                <div>4,403</div>
              </div>


              <div className="childs">
                <div>Self Plan Premium</div>
                <div>2,368</div>
                <div>3,368</div>
              </div>


              <div className="childs">
                <div>Benefits</div>
                <div>1,200</div>
                <div>480</div>
              </div>


              <div className="childs">
                <div>Service Tax/GST</div>
                <div>120</div>
                <div>120</div>
              </div>

              <div className="childs m">
                <div></div>
                <div className='digit'><p className='down'>DOWNLOAD</p></div>
                <div></div>
              </div>
     


            </div>
         </div>
        </div>
    </div>
    </>
  )
}

export default Comparison