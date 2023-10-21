import React from 'react'
import Card from "./Card"
import Data from "./Banks.json"
import "./Plans.css"
import a from "./assets/plane.gif"
import data from "./Travel.json"
import { useState } from 'react'
const Plans = ({ onSelectedBanksChange }) => {
  // console.log(props);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (plan) => {
    if (selectedCheckboxes.includes(plan)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== plan));
    } else if (selectedCheckboxes.length < 2) {
      setSelectedCheckboxes([...selectedCheckboxes, plan]);
    }

    // Pass the selected bank data to the parent component
    onSelectedBanksChange(selectedCheckboxes.map((selectedBank) => {
      return Data.find((bank) => bank.plan === selectedBank);
    }));
  };
    let[count,setCount]= useState(3);
    function handleClick(){
        setCount((prev)=>prev+1)
    }
    function handleCompare() {
      if (onSelectedBanksChange) {
        onSelectedBanksChange(selectedCheckboxes.map((selectedBank) => {
          return Data.find((bank) => bank.plan === selectedBank);
        }));
      } else {
        alert('sidhu');
      }
    }
    

  return (
    <>
    <div className="container">
        <div className='row-1'>
            <p className='p'>Plans</p>
            <div className='car-img'>
                        <img src={a} alt="" />
            </div>
            <div className='step'>
                <p>step 1 <span style={{color:"#23A8FA"}}>(In Progress)</span></p>
                <p>Plan Details</p>
            </div>
        </div>
        <div className="row-2">
            <div className='col bor'>
                <p>Showing Plan Details For</p>
                <p>Travel</p>
            </div>
            <div className='col'>
                <p>Travelling To: {data[0].countries}</p>
                <p>Membes : {data[0].members}</p>
            </div>
            <div className='col'>
               <p>Duration :{data[0].duration}</p>
               <p>Travelers Age :{data[0].ages}</p>
            </div>
            <div className='col'>
                <p>Sum Insured : <select name="" id="">
                    <option value="25000">25000</option>
                    <option value="25000">50000</option>
                    <option value="25000">250000</option>
                    <option value="25000">500000</option>
                    </select></p>
            </div>
        </div>
        <div className="row-3">
            <div className='rec'>
                 <div className='reco'> <p>Recommended<select name="" id="">
                    </select></p>
                    </div>

                    <div className="banks">
  {Data.map((e, i) => (
    <Card
      key={i}
      props={e}
      isSelected={selectedCheckboxes.includes(e.plan)}
      onCheckboxChange={handleCheckboxChange}
    />
  ))}
  <div className='add'>
    <div className='more' onClick={handleClick}>Add More  +</div>
  </div>
</div>


                <div className='buttons'>
                    <div>Previous</div>
                    <div onClick={handleCompare}>Add To Compare</div>
                    <div>Next</div>
                    </div>  
            </div>
        </div>
    </div>
    </>
  )
}

export default Plans;