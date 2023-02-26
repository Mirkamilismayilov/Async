// let students = [

// {Name: "Mirkamil", age:20 },
// {Name: "Məmməd", age:23 },
// {Name: "İlkin", age:25 }

// ]

// let ul = document.createElement("ul");
// document.body.appendChild(ul);

// function func(){
//     let newStudent = "" ;
//      setTimeout(()=>{
//         students.forEach((student)=>{
//             newStudent += `<li>${student.Name}</li>`
//             newStudent += `<li>${student.age}</li>`

//         })

//          ul.innerHTML  =  newStudent
//      },2000);
// }
// func();

// function func2(newObj , callback){
//     setTimeout(() => {
//         students.push(newObj);
//         callback
//     }, 3000);
// }
// func2({Name: "Azer", age:28,func})   


// function func2(newObj){
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         students.push(newObj);
//     }, 3000);

//         let loading = false ;

//         if(!loading){
//             resolve()
//         }else{
//             reject("Xeta bas verdi");
//         }
//     })
// }

// func2({Name: "Azer", age:28}).then(response=>{
//     func()
// }).catch((err)=>{
//     console.log(err);
// })      

// new Promise((resolve,reject)=>{
//   resolve("data ugurlu geldi")
//     reject("data ugursuz geldi")
// }).then(resolve=>{
// console.log("Data tam geldi");
// }).catch((err)=>{
//     console.log(err);
// }).finally(
//      console.log("emeliyyat bitdi")
// ) 



// let ul = document.createElement("ul");
// document.body.appendChild(ul);

// fetch("data.json").then(response=> response.json()).then(data=> console.log(data));

// let container = document.querySelector(".container");

// let btn = document.querySelector(".button");

// let numb = 2;


// fetch("https://fakestoreapi.com/products")
// .then(res=>res.json())
// .then(data1=>{
//     let newObj = "";
//     data1.slice(0,numb).forEach((item)=>{
//         let text = item.description;

//         newObj += `<div class="box">
//         <div class="img">
//             <img src= ${item.image} alt="">
//         </div>
//         <div class="data">
//             <h1>${item.title} </h1>
//             <p>${text.slice(0,20)}</p>
//             <p>${item.price}</p>
//         </div>
//         </div>`




//     })
//     container.innerHTML = newObj
//     });


//     btn.addEventListener("click" , ()=>{
//         numb++;

//     });


// let container = document.querySelector(".container");
// let btn = document.querySelector(".btn");
// let numb = 3;

// btn.addEventListener("click", function() {
//   numb += 2;
//   func1();
// });


// fetch("https://fakestoreapi.com/products")
// .then(resp=>resp.json())
// .then(data=>{

//     let newobj = "" ;

//     data.slice(0,numb).forEach((item) => {

//         let text = item.description;
//         newobj += ` <div class="box">
//         <div class="img">
//             <img src=${item.image}
//                 alt="">
//         </div>
//         <div class="info">
//             <h1>${item.title}</h1>
//             <p>${text.slice(0,30)}</p>
//             <p>${item.price}</p>
//         </div> 
//     </div> `

//     }); 

//     container.innerHTML = newobj

// })


// function func1() {
//   fetch("https://fakestoreapi.com/products")
//   .then(resp=>resp.json())
//   .then(data=>{

//       let newobj = "" ;

//       data.slice(0,numb).forEach((item) => {

//           let text = item.description;
//           newobj += ` <div class="box">
//           <div class="img">
//               <img src=${item.image}
//                   alt="">
//           </div>
//           <div class="info">
//               <h1>${item.title}</h1>
//               <p>${text.slice(0,20)}</p>
//               <p>${item.price}</p>
//           </div> 
//       </div> `

//       }); 

//       container.innerHTML =newobj

//   })
// }




let container = document.querySelector(".container");
let btn = document.querySelector("button");
let numb = 2;

btn.addEventListener("click" , ()=>{
     numb += 2;
    myFunc();
});


fetch("https://fakestoreapi.com/products")
    .then(resp => resp.json())
    .then(data => {

        let newObj = ""

        data.slice(0, numb).forEach((item) => {

            let text = item.description
            newObj += `<div class="box">
        
          <div class="img">
              <img src=${item.image}
                  alt="">
          </div>
          <div class="info">
              <h1>${item.title}</h1>
              <p>${text.slice(0, 20)}</p>
              <p>${item.price}</p>
          </div> 
      </div>`


        });
       container.innerHTML = newObj
    })
    
function myFunc(){
    fetch("https://fakestoreapi.com/products")
    .then(resp => resp.json())
    .then(data => {

        let newObj = ""

        data.slice(0, numb).forEach((item) => {

            let text = item.description
            newObj += `<div class="box">
        
          <div class="img">
              <img src=${item.image}
                  alt="">
          </div>
          <div class="info">
              <h1>${item.title}</h1>
              <p>${text.slice(0, 20)}</p>
              <p>${item.price}</p>
          </div> 
      </div>`


        });
       container.innerHTML = newObj
    })
 
}


































