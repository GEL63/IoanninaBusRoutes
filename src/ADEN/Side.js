import React, { useState } from 'react';

const SideDrop = () => {
  /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
  function doThat(){
    alert("ok");
  }

  return(
    <div class="sidenav">
    
    
    <button class="dropdown-btn">Dropdown
        <i class="fa fa-caret-down"></i>
    </button>
     <div class="dropdown-container">
        menu={[
                <button onClick={doThat}>16:PERAMA-PANEPISTIMIO</button>,
                <button onClick={doThat}>17</button>
                
        ]}
    </div>
     <a href="#contact">Search</a>
    </div>
  );
}
export default SideDrop;