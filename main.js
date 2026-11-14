// section 1
//console.clear()
//let num1 = 20;
//let num2 = 10
//console.log(num1+num2)
//console.log(num1-num2)
//console.log(num1*num2)
//console.log(num1/num2)
//console.log(num1%num2)
//console.log(num1)
//coment
//if(num1>num2){
   // console.log('num1 is bigger than num2')
//}else{}

    //let age = 16
    //if(age < 18){
     //  console.log('You cannot vote')
    //}else if(age > 95){
       // console.log('to hanoz zendehei?')
    //}else{
       //console.log('You can vote')
    //}

    // day = 1
    //if(day = 1){
        //console.log('saturday')
    //}else if (day = 2){
        //console.log('sunday')
    //}else if(day = 3){
       // console.log('monday')
    //}else if(day = 4){
      //  console.log('tuseday')
    //}else if(day = 5){
    //console.log('wednesday')
//}else if(day = 6){
 //   console.log('thersday')
//}else if(day =7){
  //  console.log('friday')
//}else{
  //  console.log('error')
//}
//let st = 1000;
//for(let i = 1; i<st ; i++ ){
//console.log(i)
//}

//let num = 1000
//for(let f = 1; f<=num ; f++){
   // if(f%2 ==0){
    //    console.log(f)
    //}
//}

//let arr = ['arya','tajdar',10,20 ]
//console.log(arr[1])
//for(let i of arr){
   // console.log(i)
//}
//let data = [3,6,9,12,15,18,20,'stop']
//let c = 0
//for(let i of data){ 
   //console.log(i)
    //if (i == 'stop'){
     //   break
   //}
   //c++
//}
//console.log(c)




// let users = []
// users.push(  'fati' , 'parnia' , 'hasti' , 'sadaf' , 'armita' , 'mahsa')
// let i = 0
// for(let f of users){
//    if(i==0){
//       console.log('Vip:' +f)
//    }else if(i==1){
//       console.log('Vip: ' +f)
//    }else if(i==5){
//       console.log('Vip: ' +f)
//    }else{
//       console.log('index: ' +f)
//    }
// // i++
// }
// console.log(i)


// let score = [9 , 20 , 19.5 , 18 , 15 , 0 , 17.75 , 11]
// let sum = 0
// let n = 0
// for(let i of score){
//    sum+=i
   
//    if(i > 17){
//    n++
// }
// }
// console.log(sum)
// console.log(n)
// let av = sum/8
// console.log(av)

// let number = [1 , 54 , 0 , 6 , 9 , 20 , 8 , 4 , 2 , 7 ]
// let num = []
// for(let i of number){
//    if(i>10){
// num.push(i)
//    }

// }
// console.log(num)



//section 2

// let arr = ['Ali', 'mohammad', ' jasem', 'ghasem', 'parsa']
//console.log(arr.at(-1))
//console.log(arr[-1])
//console.log(arr.at(1))
//-----------------------------------
//console.log(arr.toString())
//console.log(arr.join('-'))
//console.log(arr.join('\n***\n'))
//-----------------------------------
// arr.push('ghazanfar')
// console.log(arr)
//-----------------------------------
// let lastchar =  arr.pop()
// console.log(arr)
// console.log(lastchar)
//-----------------------------------
// let lastch =  arr.reverse()
// console.log(arr)
//----------------------------------

//  let lastch = arr.unshift('kamal')
// console.log(arr)
// console.log(lastch)

//----------------------------------
//  let lastch =  arr.shift()
//  console.log(arr)
// console.log(lastch)
//----------------------------------
// let lastch = arr.slice(1,3)
// console.log(lastch)
//----------------------------------
// let newarr = arr.splice(3,0, 'heshmat')
// console.log(arr)
//----------------------------------
// delete arr[2]
// console.log(arr)
//----------------------------------

//let arr = ['Ali', 'mohammad', ' jasem', 'ghasem', 'parsa']
//let kazem = ['kazem' , 'kazemi', null , false , [11,14,17], [2,5,1]]
// console.log(kazem[4][1])
// console.log(kazem[4].at(-1))

// let ff = arr.concat(kazem)
// console.log(ff)
//console.log(kazem.length)
//console.log(...kazem)

//--------------------------------------------------
//برنامه ای بنویسید همه نمرات  را جمع کند و میانگین بگیرد
//روش اول

//let kazem = ['kazem' , 'kazemi', null , false , [11,14,17], [2,5,1]]
//let res = []
// for(let i = 0 ; i< kazem.length ;i++ ) {
//   // console.log(kazem[i])
// if(Array.isArray(kazem[i])){
//    res = [...res , ...kazem[i]]//---or----->res = res.concat(kazem[i])
// }
// }
// console.log(res)
//------------------------------------------------
//روش دوم 

// let kazem = ['kazem' , 'kazemi', null , false , [11,14,17], [2,5,1]]

// console.log(kazem.flat())
//----------------------------------------------
//روش سوم
// let kazem = ['kazem' , 'kazemi', null , false , [11,14,17], [2,5,1]]
// let f = kazem[4].concat(kazem[5])
// console.log(f)

//-----------------------------------------------


// let classlist = []
// let capacity = 5
// let idx = 0
// let complete = null

// while(complete != true){
//    if(idx < capacity){
// classlist.push((Math.random()*10).toFixed())
//    }else{
//       break
//    }
//    idx++
// }
// console.log(classlist)

//----------------------------------------
//با حلقه وایل یک الگوریتمی بنویس ک سرچ انجام بده روی ارایه و اگر اون کاراکتر بود اندیسش رو بگه
// let arr = [ 'mamad' , 'jasem' , 'ghasem' , 'ali','hossein']
// let idx = 0
// let target = 'ghasem'
// while(true){
//    console.log(idx)
//    idx++
//    if(idx  == 10){
//       break;
//    }
// }

//function

// function mamad(){
//    let arr=['bro pish ghasem pool bde', 'bro pish jasem shomare bgir', 'bro pish kazem barnme bgir']
// //    for(let a of arr)
// //       console.log(a)
// //or
// console.log(arr.join('\n'))
//  }
// mamad()


// function ghasem(mony){
//    if(mony < 10000000){
//       console.log('bro khonaton')
//    }else{
//       console.log('acceptad')
//    }
// }

// function jasem(){
//    let r= (Math.random()*150).toFixed()
//    return r
// }

// function kazem (stdCode){
//    console.log(` bara shomare daneshjoii ${stdCode} entekhab vahed kardam.   `)
//    let lesson =['fizik', ' riazi', 'varzesh']
//    return lesson 
// }
// console.log('mamad mige:')
// mamad()
// console.log('ghasem mige:')
// ghasem(100000)
// console.log('jasem mige')
// let std =jasem()
// console.log(std)
// console.log('kazem mige:')
// let barname = kazem(std)
// console.log(barname)

// function hashem(name , phone , pool=4500){
// console.log(`khosh amadi ${name} `)
// console.log(pool)
// }
// hashem('gholam',1321 , 5000)


// function num(number){
//    number= 10
//    number*2
//    console.log(number)
// }
//  

// function f(arr){
//    for( let a of ar)
//       if(a%2==0)
//          console.log(a)
//    }
//    let ar=[10,7,3,4]
//    f(ar)

//Arrow function

//روش 1
// function ghasem(mony){
//    if(mony < 10000000){
//       console.log('bro khonaton')
//    }else{
//       console.log('acceptad')
//    }
// }

// let bagher = (mony)=>{
//    if(mony <50000){
// console.log(true)
//    }else{
//       console.log(false)
//    }
// }

   
// let arr =[10,7,3,4]
// arr.map((i)=>{
//    console.log(i*2)
// })

// let m = arr.filter((i)=>{
//    returni%2==0
// })
// console.log(m)


// let Array=(bibi)=>{
// let res = []
// let zoj =bibi.filter((i)=>{
//    return i %2==0
// })
// let fard =bibi.filter((i)=>{
//    return i %2==1
// })
// res.push(zoj)
// res.push(fard)
// return res
// }
// let arr = [ 10,32,665,44,77,84,89,65,224,77,65,47,11,10,23,25,65]
// let f = Array(arr)
// console.log(f)

// function num(numbers){
//   return numbers*2
// }
// console.log(num(3))







// function max(bozorgtar){
// let max = 0
// for(let i = 0 ; i < bozorgtar.length ; i++){
//    if(bozorgtar[i]>max){
//       max = bozorgtar[i]
//    }
// }
// return max
// }
// console.log(max([20,35]))

// let a = 'hi jasem'
// for(let i of a){
//    console.log(i)
// }

//  function R(){
//  for(let i of a){
// if(i != ' ')
//    console.log(i)
//   }
//  console.log(a.length)
//  }
// let a = 'hi jasem'
// R()



// function num(addad){
// for(let i =1 ; i<=addad ; i++){
// console.log(i)
// }

// }
// num(8)





// function number(f){
//    if(f==1){
//       console.log('salavatt')
//    }else{
//       console.log('hich kari nakon')
//    }
// }
// number(1)
// number(5)


//section4


// console.log('nader')
// setTimeout(()=>{
// console.log('hello')
// })
// console.log('gholi')


// function sum(a,b){
//    return a+b
// }
// function kazem(num1,num2, calback){
//    console.log(calback(num1,num2))
// }
// kazem(1,2,sum)


// async function getdata() {
//    let data = await fetch('http://www.turing.local/data.json')
//    return data
// }
// try{
//    let raw = await getdata()
//    let jason= await raw.json()
//    console.log(jason.filter((i)=>{return i.age>20}))
// }catch(error){
//    console.log(error)
// }









