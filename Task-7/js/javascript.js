
//json Flight
  let getFet = '';
  let getDesti = "";
  let getOffer = '';
  let getAirline = '';
   fetch('.//json/flight.json')
   .then(response => response.json())
   .then(json =>{
     json.Amazing.forEach(function(item){
        getFet += `<div class="col-sm-4">
                       <div class="flight-deals">
                          <h4>${item.CountryName} <span>${item.idNo}</span> -> ${item.CountryName1} <span>${item.idNo1}</span></h4>
                          <p>${item.Date} - ${item.Date2}</p>
                          <div class="price-ticket">
                             <span><img src="images/${item.Image}" alt="" width="100%"></span>
                             <span> ${item.Trip}</span>
                             <span><span> $</span> ${item.Price}</span>
                          </div>
                       </div>
                    </div>`;
         getDesti += `<div class="col-sm-4">
                        <div class="flight-Top-Place">
                           <span><img src="images/${item.Image1}" width="100%" hight="100%"></span>
                           <div class="Flight-Book">
                              <h5>${item.Airway1} Airways to ${item.Airway2}</h5>
                              <p>${item.Book}</p>
                              <a href="javascript:;">
                                 <span></span>
                                 <span></span>
                                 <span></span>
                                 <span></span>
                                 ${item.Now}
                              </a>
                           </div>
                        </div>
                     </div>`               
     })
     if(document.querySelector('.flight-time')){
      document.querySelector('.flight-time').innerHTML = getFet;
      }
      if(document.querySelector('.flight-top-destinations')){
         document.querySelector('.flight-top-destinations').innerHTML = getDesti;
       }
     json.FlightDeals.forEach(function(item){
        getOffer += `<div class="col-sm-3">
                       <div class="flight-sale">
                          <img src="images/${item.Image1}" width="100%">
                          <span><img src="images/${item.Image2}" alt="" width="100%"></span>
                          <div class="overlay">
                            <div class="text">${item.Offer}</div>
                          </div>
                       </div>
                     </div>`;
                  //   getOffer += `<div class="flight-sale swiper-slide">
                  //                     <img src="images/${item.Image1}" width="100%">
                  //                     <span><img src="images/${item.Image2}" alt="" width="100%"></span>
                  //                     <div class="overlay">
                  //                       <div class="text">${item.Offer}</div>
                  //                     </div>
                  //                  </div>`;
        getAirline += `<div class="col-sm-3">
                       <div class="flight-Airline">
                          <div class="flight-hover-effect"><img src="images/${item.Image3}" width="100%"></div>
                          <span class="flight-logo-img">
                             <img src="images/${item.Image2}" alt="" width="100%">
                             <span>${item.Airline}</span> 
                          </span>
                          <div class="Flight-Usd button">
                             <h5>${item.Country1} to ${item.Country2}</h5>
                             <p>${item.Trip}</p>
                             <div class="flight-price">${item.From}
                                <span>${item.Symbol}</span>
                                <span>${item.Dollar}</span>
                             </div>
                          </div>
                       </div>
                    </div>`;                
     })
     if(document.querySelector('.flight-offer-part')){
      document.querySelector('.flight-offer-part').innerHTML = getOffer;
      }
      if(document.querySelector('.flight-offer-part1')){
         document.querySelector('.flight-offer-part1').innerHTML = getAirline;
      }
   })
  
//Unique
  let getUnique = "";
  fetch('./json/flight-unique.json')
  .then(response => response.json())
  .then(json =>{
     json.forEach(function(only){
        getUnique += `<div class="col-sm-4">
                          <div class="flight-unique">
                             <img src="images/${only.image}" alt="" width="100%">
                             <div class="flight-price-line">
                                <span>${only.Name1}, ${only.Name2}</span>
                                <span>${only.Price}</span>
                             </div>
                          </div>
                       </div>`
     })
     if(document.querySelector('.flight-only-unique')){
         document.querySelector('.flight-only-unique').innerHTML = getUnique;
      }
  }) 
  
//Flight List
  let getFlightList = "";
  fetch('./json/flight-list.json')
  .then(response => response.json())
  .then(json =>{
     json.forEach(function(list){
        getFlightList += `<ul>
                             <li>
                                <div class="flight-list-logo">
                                   <span><img src="images/${list.Image}" alt="" width="100%"></span>
                                   <span> ${list.Name}</span>
                                   <span>Flight Details</span>
                                </div>
                             </li>
                             <li>
                                <div class="time-flight">
                                   <span>${list.Time.Depart}</span>
                                   <span>${list.Time.Ampm}</span>
                                </div>
                             </li>
                             <li>
                                <div class="Duration-flight">
                                   <span>${list.Time.Duration}<br><span>${list.Time.Type}</span></span>
                                   
                                </div>
                             </li>
                             <li>
                                <div class="time-flight">
                                   <span>${list.Time.Arrive}</span>
                                   <span>${list.Time.AmPm}</span>
                                </div>
                             </li>
                             <li>
                                <div class="price-flight">
                                   <span><span>$</span>${list.price}</span>
                                   <a href="javascript:;"><button type="button">Select</button></a>
                                </div>
                             </li>
                          </ul>`
     })
     if(document.querySelector('.flight-list')){
      document.querySelector('.flight-list').innerHTML = getFlightList;
      }
  })
  
//exchange
let getVal = document.querySelectorAll('.exchanges');
getVal.forEach(getVal =>{
  let getExCh = getVal.querySelector('.flight-exchangesymb');
  let getC = getVal.querySelectorAll('.change');
  getExCh.addEventListener('click',function(){
    let getNow = getC[0].querySelector('.form-control').value;
    let getNows = getC[1].querySelector('.form-control').value;
    getC[0].querySelector('.form-control').value = getNows;
    getC[1].querySelector('.form-control').value = getNow;
  })
})

//total passenger
let getTrv = document.querySelectorAll('.trav');
 getTrv.forEach(getTrv =>{
  let getPerson = getTrv.querySelectorAll('.flight-total-person');
  getPerson.forEach(getPerson =>{
     let getPersonFli = getPerson.querySelectorAll('.flight-person-noms');
     getPersonFli.forEach(getPersonFli =>{
        let getMin = getPersonFli.querySelector('.min');
        let getMax = getPersonFli.querySelector('.max');
        let a = 0;
           getMax.addEventListener('click',function(){
            a++;
            getPersonFli.querySelector('.tick').value = a;
            //console.log(a);
           })
           
           getMin.addEventListener('click',function(){
            if(a > 0){
               a--;
               getPersonFli.querySelector('.tick').value = a;
               //console.log(a);
            }
           })
      })
   })
})
//Traveller Drop down
let getDone = document.querySelectorAll('.flight-person');
getDone.forEach(getDone =>{
   let getWe = getDone.querySelector('.dropdown');
   let getButton = getWe.querySelector('.dropdown-toggle');
   let getDones = getDone.querySelector('.dropdown-menu');
   getButton.addEventListener('click',function(){
   // getDones.style.display = 'block';
    getDones.classList.add('reds');
    getWe.classList.remove('open');
   })
})
let getValue ="";
 let getHe = document.querySelectorAll('.trav');
 getHe.forEach(getHe =>{
   let getAct = getHe.querySelector('.flight-done');
   let getPerDet = getHe.querySelectorAll('.flight-total-person');
   getAct.addEventListener('click',function(){
   //getDones.style.display = 'none';
   getPerDet.forEach(getPerDet =>{
      let getDetails = getPerDet.querySelector('.flight-person-noms');
       getSelect = getDetails.querySelector('.tick').value;
       getValue += getSelect +"<br>";
   })
   getHe.classList.remove('reds');
   console.log(getValue);
   })
 })
 
// Search
let getCon = [];
let getSample = "berlin";
let getSea = document.querySelector('.search-packs');
let getAns1 = document.querySelectorAll('.form-control')[1].value;
fetch('./json/flight.json')
.then(response => response.json())
.then(json =>{
   json.Amazing.forEach(function(item){
   console.log(item.CountryName)
   getCon.push(item.CountryName);
   // if(getSample == item.CountryName){
   //    console.log("ok");
   // }
    })
    console.log(getCon)
    if(document.querySelector('.search-packs')){
       let getSea = document.querySelector('.search-packs');
          getSea.addEventListener('click',function(){
          let getAns = document.querySelectorAll('.form-control')[0].value;
          let getAns1 = document.querySelectorAll('.form-control')[1].value;
          console.log(typeof(getAns))
          console.log(getAns);
          let res = getCon.find(findnum);
             function findnum(val){
              return val == getAns;
             }
             if(res){
               getSea.setAttribute('href','index-list-page.html');
             }
            //  else if(!res){
            //    alert('No Flight');
            //  }
             else{
               alert('could you please type the Origin to search');
             }
             console.log(res);
         //  for(let i = 0; i < getCon.length; i++) {
         //       if(getAns == getCon[i]){
         //          getSea.setAttribute('href','index-list-page.html');
         //       }
         //       // else{
         //       //    alert('could you please type the Origin');
         //       // }
         // }
          })
       }
//     let ans = 'berlin';
//     for(let i = 0; i < getCon.length; i++) {  //0   //0   +  1    //0     1    +  2   //0        1     2  +   3
//          if(ans == getCon[i]){
//              console.log("oks");
//          }
//          else{
//          console.log("not in")
//          }//Arun//Arun Sarathy//Arun Sarathy obito//Arun Sarathy obito himawari(final ans)
//  //  ans = ans + arraynames[i] +"<br>";
//    }
      // let res = getCon.find(findnum);
      //    function findnum(val){
      //     return val === 'Abu Dhabi AUH';
      //    }
      //    console.log(res);
   })

// Add City
let getMul = document.querySelector('.flight-addlast');
function myfunction() {
      let getAddRem =`<ul class="flight-mul-Add-remove flight-none">
     <li>
       <div class="input-group">
         <span class="input-group-addon"><i class="fa fa-plane" aria-hidden="true"></i></span>
         <label for="Origin" class="sr-only">Origin</label>
         <input type="text " class="form-control "  name="Enter Your Name" placeholder="Origin ">
       </div>
     </li>
     <li>
       <div class="input-group">
         <span class="input-group-addon" ><i class="fa fa-map-marker" aria-hidden="true"></i></span>
         <label for="Destinstion" class="sr-only">Destinstion</label>
         <input type="text " class="form-control "  name="Enter Your Name" placeholder="Destinstion ">
       </div>
     </li>
     <li class="flight-date">
       <div class="input-group">
         <span class="input-group-addon" id="clad"><i class="fa fa-calendar" aria-hidden="true"></i></span>
         <label for="Depart Date" class="sr-only">Depart Date</label>
         <input  class="check" type="text" onfocus="(this.type='date')" id="date" placeholder="Depart Date" />
       </div>
     </li>
     <li class="flight-remove"><a href="javascript:;" >remove</a></li>
   </ul>`
   document.querySelector('.flight-addlast').innerHTML += getAddRem;
   let getOpen = getMul.querySelectorAll('.flight-none');
   getOpen.forEach(getOpen =>{
      let getRemove = getOpen.querySelector('.flight-remove');
      getRemove.addEventListener('click',function(){
         getOpen.remove();
      })

   })
//console.log(getAddRem);
}   
// Add City
// let getBtn = document.querySelector('.flight-more');
// //let getAddCity = document.querySelector('.flight-mul-Add-remove');
// if(document.querySelector('.flight-mul-Add-remove')){
//    let getPut = document.querySelector('.flight-mul-Add-remove');
//     //let getPuts = getPut.querySelector('.last');
//     let count = 0;
//      getBtn.addEventListener('click',function(){
//       //console.log(getAddCity);
//       count ++;
//      // if(count === 0){
//          getPut.style.display = 'block';
//       //}
//       if( count > 1){
//          getPut.querySelector('.last').innerHTML = getPut.innerHTML;
//          //getPut.remove('danger');
//          //getOne.classList.remove('danger');
//       //console.log(count)
//       //let getOne = querySelector.querySelector('.last');
//       //let getClic = getOne.querySelector('li');
   
//       }
//       //getOne.classList.remove('Active');
//       if(document.querySelector('.last')) {
//       let getPutt = document.querySelectorAll('.last');
//          getPutt.forEach(getPutt =>{
//          console.log(getPutt)
//             if(getPutt.querySelector('.flight-remove')){
//                let getAdd = getPutt.querySelector('.flight-remove');
//                let getClic = getPutt.querySelectorAll('li');
//                let getClics = getPutt.querySelector('ul');
//                console.log(getClic)
//                getAdd.addEventListener('click',function(){
//                   alert('arun')
//                   // getClic[0].style.display = 'none';
//                   // getClic[1].style.display = 'none';
//                   // getClic[2].style.display = 'none';
//                   // getClic[3].style.display = 'none';
//                   // getClics.style.display = 'none';
//                   getClic[0].remove();
//                   getClic[1].remove();
//                   getClic[2].remove();
//                   getClic[3].remove();
//                   getClics.remove();

//                })
//             }
//          })
//       }
   
//    })

// }
// let getMul = document.querySelector('.flight-addlast');
// let getLast = getMul.querySelector('.flight-none');
// if(document.querySelector('.flight-none')){
//    let getRem = getLast.querySelector('.flight-remove');
//     getRem.addEventListener('click', function(){
//       //getLast.classList.toggle('move');
//       getLast.style.display = 'none';
//       //getLast.style.display = 'none';
//    })
// }
// let getLast = getMul.querySelector('.flight-none');
// if(document.querySelector('.flight-none')){
//    let getRem = getLast.querySelector('.flight-remove');
//     getRem.addEventListener('click', function(){
//       alert('arun')
//       //getLast.classList.toggle('move');
//       getLast.style.display = 'none';
//       //getLast.style.display = 'none';
//    })
// }
/* inspiration 
https://cz.pinterest.com/pin/830703093774129160/ */
// $(".owl-carousel").owlCarousel({
//    loop: true,
//    margin: 10,
//    nav: true,
//    responsive: {
//      0: {
//        items: 1
//      },
//      600: {
//        items: 4
//      }
//    }
//  });
 
//  var swiper = new Swiper(".demo", {
//    slidesPerView: 4,
//    spaceBetween: 20,
//    grabCursor: true,
//    slidesPerGroup: 1,
//    loop: true,
//    loopFillGroupWithBlank: true,
//    pagination: {
//      el: ".swiper-pagination",
//      clickable: true,
//    },
//    navigation: {
//       loop: true,
//      nextEl: ".swiper-button-next",
//      prevEl: ".swiper-button-prev",
//    },
   
//    breakpoints:{
//       0:{
//          slidesPerView: 1,
//        },
//       520:{
//          slidesPerView: 2,
//       },
//       950:{
//          slidesPerView: 4,
//       },
//    }
//  });
// import React, { useState } from "react";
// import NavBar from "../components/navbar/NavBar";
// const Home = () =>{
//    const [darkMode, setDarkMode] = useState(false);
//    function toggleDarkMode() {
//       setDarkMode((prevDarkMode) => !prevDarkMode);
//    }
// return (
//    <>
//     <NavBar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode} />
//    </>
// );
// };