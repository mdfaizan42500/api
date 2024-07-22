// accessing api using json


// let data = JSON.parse('{"activity":"Write a list of things you are grateful for","type":"relaxation","participants":1,"price":0,"link":"","key":"2062010","accessibility":0}');
// console.log(data.price);


// let student = {
//     name : "Muhammad Faizan",
//     marks : 98,
// };
// console.log(
//     JSON.stringify(student));





// our first api request

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then ((res)=>{
   
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then ((data2)=>{
//     console.log(data2.fact);
// })
// .catch((err)=>{
//     console.log("ERROR -" , err);
// })





// using await and async with fectc

// async function getFacts(){
//     try{
//         let res =await fetch(url);
//     let data =await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//     }
//     catch (e){
//         console.log("error is-", e);
//     }
// console.log("end");
// }

// getFacts();






// using axios

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//     return res.data.fact ;
//     }
//     catch(e){
//         console.log("error is",e);
//         return "No fact found";
//     }
// } 
// getFacts();





// for getting random cat fact and print on screen
// let btn = document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let fact =await getFacts();
//     let p = document.querySelector("#para");
//     p.innerText = fact;
// })




// for gettin random dog image

// async function getImg(){
//     try{
//         let res = await axios.get(url2);
//          return res.data.message;
//     }
//     catch(e){
//         console.log("Error is -" , e)
//         return "no image found";
//     }
// }

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let link = await getImg();
//    let image = document.querySelector("#image");
//    image.setAttribute("src",link);
   
// });




// passing header

// let url3 = "https://icanhazdadjoke.com/";
// async function getJoke(){
//     try{
//         const config = {headers : {Accept : "text/plain"}}; // application/json
//         let res = await axios.get(url3,config);
//     console.log(res.data);
//     }
//     catch(e){
//         console.log(e);
//     }
// }







// updating querystring


// let url = "http://universities.hipolabs.com/search?name=";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=>{
    
//     let country = document.querySelector("input").value;
   
//     let colArr = await getCollege(country);
    
//     show(colArr);
// })

// function show(colArr){
//     let ul = document.querySelector("ul");
//     ul.innerText ="";
//      for(col of colArr){
//          let list = document.createElement("li");
//          list.innerText = col.name;
//          ul.appendChild(list);
//      } 
// }

// async function getCollege(country){
//     try{
//         let res = await axios.get(url+country);
//     return res.data;
//     }
//     catch(e){
//         console.log(e);
//     }
// }






// Not working

// let url = "http://universities.hipolabs.com/search?name=india";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=>{
    
//     let state = document.querySelector("input").value;
   
//     let colArr = await getCollege(state);
    
//     show(colArr);
// })

// function show(colArr){
//     let ul = document.querySelector("ul");
//     ul.innerText ="";
//      for(col of colArr){
//          let list = document.createElement("li");
//          list.innerText = col.name;
//          ul.appendChild(list);
//      } 
// }

// async function getCollege(state){
//     try{
//         let res = await axios.get(url+state);
//     return res.data;
//     }
//     catch(e){
//         console.log(e);
//     }
// }
