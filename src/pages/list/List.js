import React from 'react'
import "./list.css"
import {Link} from "react-router-dom"

const List = () => {
  return (
    <div className='list'>
      <div className='listContainer'>

        <div className="search">
          <div className='searchContainer'>
            <h1>Search</h1>
            <span>Destination</span>
            <input className='destination' placeholder='destination'/>
            <span>Check-in-date</span>
            <input className='destination' placeholder='date'/>
            <span>Option</span>


            <div className='detailInput'>

            
             

              <div className='detailContainer'>
                <span className='listTilte'>Min price (per night)</span>
                <input className='listInput'/>
              </div>
              
              <div className='detailContainer'>
                <span className='listTilte'>Max price (per night)</span>
                <input className='listInput'/>
              </div>

              <div className='detailContainer'>
                <span className='listTilte'>Adult</span>
                <input className='listInput'/>
              </div>

              <div className='detailContainer'>
                <span className='listTilte'>Children</span>
                <input className='listInput'/>
              </div>

              <div className='detailContainer'>
                <span className='listTilte'>Room(per night)</span>
                <input className='listInput'/>
              </div>
            
              <button className='listSearch'>Search</button>
            
            </div>

          </div>


        </div>
      

        <div className='listItem'> 

        <div className='listItemContainer'>
        <img src='https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1600' className='listItemImg'/>

        <div className='listItemTitle'>

          <div className='listItemTitleDetail'>
                <h1 style={{margin : 0 }}>Tower Street Tower</h1>
                <span>500m from center</span>
                <button style={{background : "green" ,border : "none" ,width : "max-content" , color : "white" ,padding : "5px 2px" ,borderRadius : " 4px"}}>Free airport taxi</button>
                <span style={{fontWeight : "bold"}}>Studio Apartment with Air conditioning</span>
                <span>Enter studio .1 bathroom .21m 1 full bed</span>
                <span style={{ color : "green" ,fontWeight : 'bold'}}>Free cancellation</span>
                <span style={{color : 'green'}}>You can cancel later,so lock in this price today</span>
          </div>

          <div className='listFacts'>
            <div className='listExcRange'>
              <h2 style={{margin : 0 }}>Excellence</h2>
              <button style={{ background : "rgb(41, 43, 181)" ,color : "white" ,border : "none" ,borderRadius : "3px" ,fontWeight : 'bold' ,padding : "10px"}}>8.3</button>
            </div>

            <div className='listItemPrices'>
              <span style={{ fontSize : "30px" , display : 'flex' , justifyContent:"flex-end"}}>$124</span>
              <span style={{display : 'flex' , justifyContent:"flex-end"}}> includes taxes fees</span>
              <Link style={{ width: "100%" }} to="/hotel/:id">
              <button style={{background : "rgb(10, 98, 157)" ,color : 'white' ,padding : "10px 5px" ,borderRadius : "5px" , border : "none" , fontWeight : 'bold'}}>See availability</button>
              </Link>
             
            </div>
          </div>
            
        </div>


        </div>

        <div className='listItemContainer'>
        <img src='https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1600' className='listItemImg'/>

        <div className='listItemTitle'>

          <div className='listItemTitleDetail'>
                <h1 style={{margin : 0 }}>Tower Street Tower</h1>
                <span>500m from center</span>
                <button style={{background : "green" ,border : "none" ,width : "max-content" , color : "white" ,padding : "5px 2px" ,borderRadius : " 4px"}}>Free airport taxi</button>
                <span style={{fontWeight : "bold"}}>Studio Apartment with Air conditioning</span>
                <span>Enter studio .1 bathroom .21m 1 full bed</span>
                <span style={{ color : "green" ,fontWeight : 'bold'}}>Free cancellation</span>
                <span style={{color : 'green'}}>You can cancel later,so lock in this price today</span>
          </div>

          <div className='listFacts'>
            <div className='listExcRange'>
              <h2 style={{margin : 0 }}>Excellence</h2>
              <button style={{ background : "rgb(41, 43, 181)" ,color : "white" ,border : "none" ,borderRadius : "3px" ,fontWeight : 'bold' ,padding : "10px"}}>8.3</button>
            </div>

            <div className='listItemPrices'>
              <span style={{ fontSize : "30px" , display : 'flex' , justifyContent:"flex-end"}}>$124</span>
              <span style={{display : 'flex' , justifyContent:"flex-end"}}> includes taxes fees</span>
              <button style={{background : "rgb(10, 98, 157)" ,color : 'white' ,padding : "10px 5px" ,borderRadius : "5px" , border : "none" , fontWeight : 'bold'}}>See availability</button>
            </div>
          </div>
            
        </div>


        </div>


        <div className='listItemContainer'>
        <img src='https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1600' className='listItemImg'/>

        <div className='listItemTitle'>

          <div className='listItemTitleDetail'>
                <h1 style={{margin : 0 }}>Tower Street Tower</h1>
                <span>500m from center</span>
                <button style={{background : "green" ,border : "none" ,width : "max-content" , color : "white" ,padding : "5px 2px" ,borderRadius : " 4px"}}>Free airport taxi</button>
                <span style={{fontWeight : "bold"}}>Studio Apartment with Air conditioning</span>
                <span>Enter studio .1 bathroom .21m 1 full bed</span>
                <span style={{ color : "green" ,fontWeight : 'bold'}}>Free cancellation</span>
                <span style={{color : 'green'}}>You can cancel later,so lock in this price today</span>
          </div>

          <div className='listFacts'>
            <div className='listExcRange'>
              <h2 style={{margin : 0 }}>Excellence</h2>
              <button style={{ background : "rgb(41, 43, 181)" ,color : "white" ,border : "none" ,borderRadius : "3px" ,fontWeight : 'bold' ,padding : "10px"}}>8.3</button>
            </div>

            <div className='listItemPrices'>
              <span style={{ fontSize : "30px" , display : 'flex' , justifyContent:"flex-end"}}>$124</span>
              <span style={{display : 'flex' , justifyContent:"flex-end"}}> includes taxes fees</span>
              <button style={{background : "rgb(10, 98, 157)" ,color : 'white' ,padding : "10px 5px" ,borderRadius : "5px" , border : "none" , fontWeight : 'bold'}}>See availability</button>
            </div>
          </div>
            
        </div>


        </div>


        <div className='listItemContainer'>
        <img src='https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1600' className='listItemImg'/>

        <div className='listItemTitle'>

          <div className='listItemTitleDetail'>
                <h1 style={{margin : 0 }}>Tower Street Tower</h1>
                <span>500m from center</span>
                <button style={{background : "green" ,border : "none" ,width : "max-content" , color : "white" ,padding : "5px 2px" ,borderRadius : " 4px"}}>Free airport taxi</button>
                <span style={{fontWeight : "bold"}}>Studio Apartment with Air conditioning</span>
                <span>Enter studio .1 bathroom .21m 1 full bed</span>
                <span style={{ color : "green" ,fontWeight : 'bold'}}>Free cancellation</span>
                <span style={{color : 'green'}}>You can cancel later,so lock in this price today</span>
          </div>

          <div className='listFacts'>
            <div className='listExcRange'>
              <h2 style={{margin : 0 }}>Excellence</h2>
              <button style={{ background : "rgb(41, 43, 181)" ,color : "white" ,border : "none" ,borderRadius : "3px" ,fontWeight : 'bold' ,padding : "10px"}}>8.3</button>
            </div>

            <div className='listItemPrices'>
              <span style={{ fontSize : "30px" , display : 'flex' , justifyContent:"flex-end"}}>$124</span>
              <span style={{display : 'flex' , justifyContent:"flex-end"}}> includes taxes fees</span>
              <button style={{background : "rgb(10, 98, 157)" ,color : 'white' ,padding : "10px 5px" ,borderRadius : "5px" , border : "none" , fontWeight : 'bold'}}>See availability</button>
            </div>
          </div>
            
        </div>


        </div>

        <div className='listItemContainer'>
        <img src='https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1600' className='listItemImg'/>

        <div className='listItemTitle'>

          <div className='listItemTitleDetail'>
                <h1 style={{margin : 0 }}>Tower Street Tower</h1>
                <span>500m from center</span>
                <button style={{background : "green" ,border : "none" ,width : "max-content" , color : "white" ,padding : "5px 2px" ,borderRadius : " 4px"}}>Free airport taxi</button>
                <span style={{fontWeight : "bold"}}>Studio Apartment with Air conditioning</span>
                <span>Enter studio .1 bathroom .21m 1 full bed</span>
                <span style={{ color : "green" ,fontWeight : 'bold'}}>Free cancellation</span>
                <span style={{color : 'green'}}>You can cancel later,so lock in this price today</span>
          </div>

          <div className='listFacts'>
            <div className='listExcRange'>
              <h2 style={{margin : 0 }}>Excellence</h2>
              <button style={{ background : "rgb(41, 43, 181)" ,color : "white" ,border : "none" ,borderRadius : "3px" ,fontWeight : 'bold' ,padding : "10px"}}>8.3</button>
            </div>

            <div className='listItemPrices'>
              <span style={{ fontSize : "30px" , display : 'flex' , justifyContent:"flex-end"}}>$124</span>
              <span style={{display : 'flex' , justifyContent:"flex-end"}}> includes taxes fees</span>
              <button style={{background : "rgb(10, 98, 157)" ,color : 'white' ,padding : "10px 5px" ,borderRadius : "5px" , border : "none" , fontWeight : 'bold'}}>See availability</button>
            </div>
          </div>
            
        </div>


        </div>

        <div className='listItemContainer'>
        <img src='https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1600' className='listItemImg'/>

        <div className='listItemTitle'>

          <div className='listItemTitleDetail'>
                <h1 style={{margin : 0 }}>Tower Street Tower</h1>
                <span>500m from center</span>
                <button style={{background : "green" ,border : "none" ,width : "max-content" , color : "white" ,padding : "5px 2px" ,borderRadius : " 4px"}}>Free airport taxi</button>
                <span style={{fontWeight : "bold"}}>Studio Apartment with Air conditioning</span>
                <span>Enter studio .1 bathroom .21m 1 full bed</span>
                <span style={{ color : "green" ,fontWeight : 'bold'}}>Free cancellation</span>
                <span style={{color : 'green'}}>You can cancel later,so lock in this price today</span>
          </div>

          <div className='listFacts'>
            <div className='listExcRange'>
              <h2 style={{margin : 0 }}>Excellence</h2>
              <button style={{ background : "rgb(41, 43, 181)" ,color : "white" ,border : "none" ,borderRadius : "3px" ,fontWeight : 'bold' ,padding : "10px"}}>8.3</button>
            </div>

            <div className='listItemPrices'>
              <span style={{ fontSize : "30px" , display : 'flex' , justifyContent:"flex-end"}}>$124</span>
              <span style={{display : 'flex' , justifyContent:"flex-end"}}> includes taxes fees</span>
              <Link></Link>
              <button style={{background : "rgb(10, 98, 157)" ,color : 'white' ,padding : "10px 5px" ,borderRadius : "5px" , border : "none" , fontWeight : 'bold'}}>See availability</button>
            </div>
          </div>
            
        </div>


        </div>

       

        

        </div>

      </div>
    </div>
  )
}

export default List

