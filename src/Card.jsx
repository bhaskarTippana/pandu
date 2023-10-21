import React from 'react'
const Card = ({props , isSelected , onCheckboxChange}) => {
   //  console.log(props);
  return (
   <>
        <div className='bank-1'>
                    <div className='a'>
                  <div>
                    
                  <input
              type="checkbox"
              name=""
              id=""
              checked={isSelected}
              onChange={() => onCheckboxChange(props.plan)}
            />

                  </div>
                    <div className='image'><img src={props.image} alt="" /></div>
                    </div>
                   <div className="b">
                    <div  className='pp'><p className='ppp'>Plan</p></div>
                    <div className='pl'>{props.plan}</div>
                   </div>
                   <div className="c">
                    <div className='pp'>
                        <p className='aaa'>Additional Covers</p>
                    </div>
                    <div className='demo'>
                        <div className='demo-1'>
                         <div>
                         <h4>Co-Payment <i className="fa-solid fa-bell"></i></h4>
                            <p>ZONE WISE CAPPING OF 20%</p>
                         </div>
                           <div>
                           <h4>PRE-Travel <i className="fa-solid fa-bell"></i></h4>
                            <p>60 Days</p>
                           </div>
                           <div>
                           <h4>Special Criteria <i className="fa-solid fa-bell"></i></h4>
                            <p>10% OF SUM INSURED PER DAY (EXCLUDING CUMULATIVE BONUS) CRACTUAL WHICHEVER IS LOWER</p>
                           </div>
                        </div>

                        <div className='demo-1'>
                         <div>
                         <h4>Co-Payment <i className="fa-solid fa-bell"></i></h4>
                            <p>ZONE WISE CAPPING OF 20%</p>
                         </div>
                           <div>
                           <h4>PRE-Travel <i className="fa-solid fa-bell"></i></h4>
                            <p>60 Days</p>
                           </div>
                           <div>
                           <h4>Special Criteria <i className="fa-solid fa-bell"></i></h4>
                            <p>10% OF SUM INSURED PER DAY (EXCLUDING CUMULATIVE BONUS) CRACTUAL WHICHEVER IS LOWER</p>
                           </div>
                        </div>
                    </div>
                   </div>

                   <div className="d">
                   <div className='pp'>
                        <p className='aaa'>Premium</p>
                    </div>
                    <div className='dd'>
                       <div>
                       <p><i className="fa-solid fa-indian-rupee-sign"></i>  {props.amount}</p>
                        <div className='btn'>Buy</div>
                       </div>
                    </div>

                   <section>
                    <p>View More</p>
                   </section>
                   </div>
                </div>
   </>
  )
}

export default Card