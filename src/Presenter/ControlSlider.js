import React,{useState} from 'react';
import './Slider.css';

function filter(hour){
    const filter =  ['==', ['number', ['get', 'Hour']], 12];
    

     // update the map
    // filterBy(hour);

     // converting 0-23 hour to AMPM format
     const ampm = hour >= 12 ? 'PM' : 'AM';
     const hour12 = hour % 12 ? hour % 12 : 12;

     // update text in the UI
     document.getElementById('active-hour').textContent = hour12 + ampm;
    
}

function ControlSlider() {
    const filter =  ['==', ['number', ['get', 'Hour']], 12];
    // converting 0-23 hour to AMPM format
    var ampm ;
    var hour12;
    /*document.getElementById('slider').addEventListener('input', (event) => {
        const hour = parseInt(event.target.value);
        // update the map
        //map.setFilter('collisions', ['==', ['number', ['get', 'Hour']], hour]);
        ampm = hour >= 12 ? 'PM' : 'AM';
        hour12 = hour % 12 ? hour % 12 : 12;
      
        // update text in the UI
        document.getElementById('active-hour').innerText = hour12 + ampm;
      });*/

    return (
        <div class="info-box" id='sliderbar' >
            TRAFFIC DATA :

            <div class='session'>
                <h2>Traffic in route</h2>
                <div class='row colors'>
                </div>
                <div class='row labels'>
                    <div class='label'>0</div>
                    <div class='label'>1</div>
                    <div class='label'>2</div>
                    <div class='label'>3</div>
                    <div class='label'>4</div>
                    <div class='label'>5+</div>
                </div>
            </div>

            <div class='session' id='sliderbar'>
                <h2>Hour: <label id='active-hour'>12PM</label></h2>
                <input id='slider' class='row' type='range' min='0' max='23' step='1' value='12' />
            </div>
            
            <div class='session'>
            <h2>Day of the week</h2>
            <div class='row' id='filters'>
                <input id='all' type='radio' name='toggle' value='all' checked='checked'/>
                <label for='all'>All</label>
                <input id='weekday' type='radio' name='toggle' value='weekday'/>
                <label for='weekday'>Weekday</label>
                <input id='weekend' type='radio' name='toggle' value='weekend'/>
                <label for='weekend'>Weekend</label>
             </div>
        </div>
           
            
        
        </div> 
    );
















}
export default ControlSlider;