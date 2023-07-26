import React, { useState } from 'react'
import { BiHotel,BiSolidCar,BiPerso,BiCalendar} from "react-icons/bi";
import { FaPlaneDeparture ,FaTaxi} from "react-icons/fa";
import {MdHotel,MdPerson} from "react-icons/md";
import "./header.css"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'




const Header = ({type}) => {
  
  const [ clicked ,setClicked ] = useState("stay")

  const handleClick = (item) => {
    setClicked(item)
  }

  const [openDate,setOpenDate] = useState(false)

  const [date,setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);


  const [openOption ,setOpenOption] = useState(false);
  const [option ,setOption] = useState({
    adult : 1,
    children : 0,
    room : 1
  })

  const handleOption = ( name ,operation ) => {
    setOption(prev => {return {
      ...prev,[name] : operation === "i" ? option[name] + 1 : option[name] - 1
    }  
    })
  }

  return (
    <div className='header'>

      <div className={ type === "list" ? "headerContainer listMood" : "headerContainer"  }>

       <div className='headerList'>

        <div onClick={() => handleClick("stay")} className= {clicked === "stay" ? 'headerListItem active' : 'headerListItem'}>
              <MdHotel/>
              <span>Stay</span>
        </div>

        <div  onClick={() => handleClick("flight")} className= { clicked === "flight" ? 'headerListItem active' : 'headerListItem'}>
              <FaPlaneDeparture/>
              <span>Flight</span>
        </div>

        <div onClick={() => handleClick("so")} className= { clicked === "so" ? 'headerListItem active' : 'headerListItem'}>
              <BiSolidCar/>
              <span>Car</span>
            </div>
        
            
        <div onClick={() => handleClick("bo")} className= { clicked === "bo" ? 'headerListItem active' : 'headerListItem'}>
              <BiHotel/>
              <span>Attrection</span>
         </div>

        <div onClick={() => handleClick("oo")} className= { clicked === "oo" ? 'headerListItem active' : 'headerListItem'}>
              <FaTaxi/>
              <span>Texi</span>
        </div>
        </div>

     { type !== "list" && <>
      <h1 className='headerTitle'>A lifetime of discount</h1>
        <p className='headerDes'>
          Get reward for your travels unlock instant saving of 10% or more with a free bookingapp account
        </p>
        <button className='headrBtn'>Sign In/Register</button>

      <div className='headerSer'>

          <div className='headerSerItem'>
          <MdHotel className='headerItem'/>
          <input type='text' placeholder='Where are you going' className='headerSearchInput'/>
          </div>

          <div className='headerSerItem'>
          <BiCalendar className='headerItem'  onClick={()=>setOpenDate(!openDate)}/>
          <span onClick={()=>setOpenDate(!openDate)} className='headerSerText'>{`${format(date[0].startDate,"dd/mm/yyyy")} to ${format(date[0].endDate,"dd/mm/yyyy")}`}</span>
          {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'/>}
        </div>

        <div className='headerSerItem'>
          <MdPerson className='headerItem'/>
          <span className='headerSerText' onClick={() => setOpenOption(!openOption)}>{`${option.adult} adult . ${option.children} children . ${option.room} room`}</span>

        {openOption && <div className='options'>

          <div className='optionItem'>
            <span className='optionText'>Adult</span>

          <div className='optionContainer'>
          <button disabled={option.adult < 1 }  className='optionBtn' onClick={()=>handleOption("adult","d")}>-</button>
            <span className='number'>{option.adult}</span>
            <button className='optionBtn' onClick={()=>handleOption("adult","i")}>+</button>
          </div>
            
          </div>
            
          <div className='optionItem'>
            <span className='optionText'>Children</span>

          <div className='optionContainer'>
          <button disabled={option.children < 1 } className='optionBtn' onClick={()=>handleOption("children","d")}>-</button>
            <span className='number'>{option.children}</span>
            <button className='optionBtn' onClick={()=>handleOption("children","i")}>+</button>
          </div>
           
          </div>
            
          <div className='optionItem'>
            <span className='optionText'>Room</span>

          <div className='optionContainer'>
          <button disabled={option.room < 1 }  className='optionBtn' onClick={()=>handleOption("room","d")}>-</button>
            <span className='number'>{option.room}</span>
            <button className='optionBtn' onClick={()=>handleOption("room","i")}>+</button>
          </div>
          
        </div>
            


          </div>}

        </div>

          <div className='headerSerItem'>
          <button className='headrBtn'>Search</button>
          </div>

      </div>
      </>
      }
        

      </div>   
    </div>
  )
}

export default Header