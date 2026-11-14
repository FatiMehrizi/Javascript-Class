//if(lamp == "red"){
   // console.log("stop")
//}
//else if (lamp == "green"){
   // console.log("go")
//}
//else if(lamp == "yellow"){
    //console.log("becareful")
//}
//else{
   // console.log("wrong")
//}


//let number = 7
//if(number>5){
    //console.log("1")
//else{
  //  console.log("2")
//}



//let temp=true
//console.log(temp)
//console.log(typeof temp)
//temp="fatemeh"
//console.log(temp)
//console.log(typeof temp)

//console.log(4*4) 

//let num = 2  
//console.log("num")

//let name = "fati"
//console.log(name)

//let f = false
//console.log(typeof f)

//let f = "false"
//console.log(typeof f)

//let f = 20
//console.log(typeof f)


//let f
//console.log(typeof f)

//const fati = 2
//fati = "pari"
//console.log(fati)  ارور میده واسه const

//اگر نمرات بچه ها  بالای 18 باشه مرورگر پرفکت روچاپ کنه 
//اگر نمره بین 16 تا 17 باشه گود رو چاپ کنه
//در غیر این صورت مرورگر بد اسکور را چاپ کنه

//let score = 16.75
//if(score > 18){
  // console.log("perfect")
//}else if(score > 16 & score < 17){
  // console.log("good")
//}else{
  // console.log("bad score")
//}

//اعدا زوج بین 3 تا 12

//for(let i= 3; i<12; i++){
  // if (i % 2 == 0){
    //  console.log(i)
   //}
//}

//اعداد فرد بین 50 تا 29 رو یکی یکی کم شه
//for(let f = 50 ; f > 29 ; f--){
   //if( f % 2 == 1 ){
     // console.log(f)
//}
//}
//                                         تدریس استاد تاجدار


//-------------------------------------------------------------------------------------------------------


//UI --> User Interface----->کاربر میبینه
// UX --> User Experience------->تجربه ی کاربر از سایت  ,   واکنش گراست


//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


//  نوشتن دوتا اسلش قبل از کد یعنی کامنت کردن کد و ران نشدن ان که اصولا چرایی براش به کار میره نه چگونگی


//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

 
//اسامی علامت ها:
//= : equal
 //!= : not equal
 //== : exacltly equal -> cheking only Value
 //=== : cheking type & value
// > : greather than
 //< : less than
 //* : star ->multiplay
 // / : slash -> divition
 //% : percent -> remainder of percent
 // \ : back slash
// & : ampercent
// ^ : caret
// ; : simicolen
 //: : clone
// # : sharp
 // | : pip
 //and : &&
 //or : ||

 //------------------------------------------------------------------------------------------------------
 //------------------------------------------------------------------------------------------------------



//console.log("string")------>پرینت در جاوااسکریپت

//مثالهاش:
//console.log("son")------>son  --->  برای متن از علامت دابل کتیشن استفاده میکنیم
//console.log("2*3")------->2*3  --->  بخاطر دابل کتیشن خودش کپی شده نه جوابش  
//console.log(2+2)---->4
//console.log('moon')----->moon


//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


//let برای متغییر های قابل تغییر و مثال است
 //constبرای متغییر های ثابت و غیر قابل تغییر است 



//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

// Data types :
//متغییره
//متغییر String
//let name="pari"--------->  برای این نوع تایپ باید از دابل کتیشن یا سینگل کتیشن استفاده کنیم
//console.log(name)------->pari

//متغییر Number
//let pari=29  --------->  در این نوع تایپ نیاز به دابل کتیشن نداریم وفقط انواع اعداد را شامل میشود
//console.log(pari)------->29 

//متغییر bool
//let name=true  ------->برای این نوع تایپ نیاز به دابل کتیشن نداریم و نباید درون کوتیشن بایند چون خروجی انها استرینگ چاپ میشود
//console.log(name)-------->true دیتا تایپ های منطقی هستند و خروجی انها یا درست است یا غلط 

//مثالهاش:
//let name="som" 
//console.log(name)----->som 

//let star =2
//console.log(star)------>2
//star=4
//console.log(star)------->4  ------> همیشه اخرین تغییر متغییر لاگ گرفته میشه

//let moon
//console.log('moon')----->moon  -------> بخاطر دابل کتیشن کپی شد
//console.log(moon)----->undefined ------>  چون مقداری براش تعریف نشده بود

//let moon=pari 
//console.log(moon)----->خطا  .  چون متن داخل دابل کتیشن نبود 

 
//به این ترتیب دوتا متغییر یا دوتا کنسول دات لاگ را در یک خط مینویسیم
//let name='ros' ,  family='akbari'
//console.log(name) , console.log(family)------->ros  akbari
//یا
//let name='pari'               
//let family='farahani'     
//let age=21
//console.log(name,family,age)------>pari , farahani , 21
//یا 
//let name='pari',family='farahani',age=21
//console.log(name),console.log(family,age)-------->pari farahani 21   


//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


//تغییرات متغییر
//let name="pari"
//name="reza"
//name="fati"    -------->   استفاده نمیکنیمlet برای یک متغییر از دو 
//name="noori"
//name="kolsom"
//console.log(name)---------->kolsom

//مثالهاش:
//let name = "pari"
//star = "moon"
//console.log(name)---->pari

//let name = "pari"
//name="fati"
//me="fati"
//console.log(name)----->fati

//let name='ros'
//let name='ali'
//console.log(name)------>( در پایین درست شده ان است)خطا  
//let name=2
//name='ros' 
//console.log(name)----->ros


//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------


//ثابت ها
//const......=.... ------>نمیتونی باهاش تغییر متغییر  بدی و برای  داده های حساس مثل پسورد و اطلاعات مهم استفاده میشه
//console.log(.....)
//مثالهاش:


//const name="pari"
//name="fati"
//console.log(name)------>ارور


//let name ="parnia"
//let age=21 
//console.log(age)----->21
//console.log(name)----->parnia


//const name='pari'
//console.log(name)------>pari
//name='ros'
//console.log(name)------->خطا


//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------



//در جاوا اسکریپت کلا دو نوع تایپ داریم
//prmitive(value) types --------------->string,number,bool,undifinde,null,
//Referene types -----------> object , Array , founction


 //data type =دیتا تایپ ها
 //1--->String--->"" or ''
 //2--->Number--->int or float
 //3--->Boolean--->true or false
 //4--->undefined--->تعریف شده اما مقدار دهی نشده
 //5--->null--->چیزی که کاملا پوچ است
//typeof null---->Object

//مثالهاش:

//let fati=18
//console.log(typeof (fati))---> Number
//console.log(typeof("fati"))---->String
//fati="pari"
//console.log(typeof(fati))---->String
//fati=false
//console.log(typeof(fati))---->Boolean
//console.log(typeof("fati"))---->String


//let name="pari"
//let age=21.5
//let son= false یا  true
//let moon
//console.log(typeof (name))------>String
//console.log(typeof (son))------>Boolean
//console.log(typeof (age))------->Number
//console.log(typeof (moon))-------->undefined



//let name='pari'
//let age=21
//let admin=true
//console.log(typeof(admin))--------->boolean
//console.log(typeof(age))--------->number
//console.log(typeof(name))--------->string


//typeof مشخص کردن تایپ ,typeof+برچسب متغییر
//let fati=18
//console.log(typeof (fati))---> Number
//console.log(typeof("fati"))---->String
//fati="pari"
//console.log(typeof(fati))---->String
//fati=false
//console.log(typeof(fati))---->Boolean
//console.log(typeof("fati"))---->String


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


//string method -> length --> tol reshte
  //              -> toLowercase() --> همه رو کوچیک میکنه
  //            -> toUppercase() --> همه رو بزرگ میکنه
  //          -> startswith() --> با ....شروع بشه
  //          -> endswith() --> با....تموم بشه
  //             -> includes() --> چک میکنه توی ورودی باشه
  //             -> trim --> fasle ro hazf mikne
  //             -> indexof()
  //             -> slice() --> az koja ta koza ro nagah dar
  //             -> replace()

 //number method -> toEponential() --> tabdil b namaiy
 //              -> toFixed() --> rond mikne
 //              -> toString --> cast b string



 //مثالهاش:

//let a = "kol som "
// b = a.length
 //console.log(b)------>8

//  let b = 'Yekta'
//  a = b.length
//  console.log(a)


 //let a = "SAkinEh"
 //b = a.toLowerCase("SAkinEh")
 //console.log(b)---------->sakineh(همه رو کوچیک کرد)
//b = a.toUpperCase("SAkinEh")
 //console.log(b)------->SAKINEH(همه رو بزرگ میکنه)


 //let a = "ma@isa"
//b = a.includes("m")
//console.log(b)------->true
//b=a.includes("f")---------->false
//console.log(b)


//  let aj = "kolsom  "
//  bb = aj.trim
//   console.log(bb)



//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//عملگر های محاسباتی

 //      /  ------>تقسیم
//       +  ------>جمع
//       -  ------>تفریق
//       %  ------>درصد
//       *  ------>ضرب
//       <  ------>کوچکتر
//       >  ------>بزرگتر
//       >= ------>بزرگترمساوی
//       <= ------>کوچکترمساوی
//       == ------>برابری مقدار
//       === ----->برابری مقدار و تایپ
   

//       (nبرچسب)n+=عدد
//        (nبرچسب)n*=عدد
//        (nبرچسب)n-=عدد
//         (nبرچسب)n/=عدد

//         (nبرچسب)n=n+عدد
//         (nبرچسب)n=n*عدد
//         (nبرچسب)n=n/عدد
//          (nبرچسب)n=n-عدد



//مثالهاش:

//let s=10
//console.log(s+=3)--------->13
//console.log(s=s+3)-------->13


//let n=2
//console.log(n+=2)-------->4
//console.log(n*=3)--------->6
//console.log(n/=2) --------->1
//console.log(n-=1)-------->1
//console.log(n)----------->2


//let s=5
//console.log(s+=4)---------->9
//console.log(s*=3)--------->15
//console.log(s-=2)--------->3
//console.log(s/=5)---------->1
//console.log(s)--------->5


//let a=3
//let s=5
//console.log(a+s)---------->8
//console.log(a*s)--------->15
//console.log(s-a)----------->2


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


//Array [] :   ارایه ها
//میشود چندین داده را در ارایه ذخیره کرد.
//ارایه ها از صفر شروع میشوند و برای صدا زدنشون از اندیسشون ک همون عدددها از صفر هست میتونیم استفاده کنیم
//طول ارایه ها قابل تغییره و لازم نیست تایپ انها مثل هم باشه
//typeof Array ----->Object
//برای اضافخ کردن عدد به ارایه به طوری ک عدد به ارایه قبل اضافه نشود از متد ارایه پوش استفاده میکنیم
 //arr.push()

 //مثال
// let users =["mohammad"  , "ali"]
// users.push("zahra")
// console.log(users)
// console.log(users[0])
// console.log(typeof users)



//  let arr= ['Arya' , 'Tajdar' , 10 , 20]
//  arr.push(9)
//  for(let i of arr){
//   console.log(i)
//  }
// console.log(arr+9)--->concat 
//کانکت کردن رو میتونیم روی ارایه ها و استرینگ ها انجام بدیم



//ارایه ای از نمرات دانشجویان بساز و با حلقه فور مجموع نمرات رو حساب کن و بعد میانگین رو چاپ کن
//همچنین تعداد افرادی ک نمراتشان بالای 17 هست را نمایش بده
// let score = [12 , 20 , 17 , 16 , 6 , 0 , 10 , 14.5 , 17.75 , 19]
// let sum = 0
// let l= 0
// for(let i of score){
// sum+=i
// }if(score>17){
//   l++
//   console.log(l)
// }
// console.log(sum)
// let av = sum/10
// console.log(av)


//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//if ,else
//عملگرهای منطقی

//if(شرط اول سوال){
// console.log(...)
// }------->اگر
//else if(شرط دوم ,.... سوال){
// console.log(...)
// }-------->ولی اگر
//else{
// console.log(...)
// }در اخر
//اگر در پرانتر اول شرط ما درست بود بعد از لاگ گرفتن دیگخ نباز نیست به سراغ قسمت های بعدی بریم 
// اما اگر شرط غلط بود میریم سراغ شرط های بعدی

//مثالهاش:

//let lamp="a"
//if(lamp=="green")
//{console.log("go")}
//else if(lamp=="yellow")
//{console.log("becarefull")}
//else if(lamp=="red")
//{console.log("stop")}
//else{console.log("wrong")}

//let number=8
//if(number<5)
//{console.log("1")}
//else if(number>5)
//{console.log("2")}


//let lamp=p 
//if(lamp=="red"){console.log("stop")}
//else if(lamp=="green"){console.log("go")}
//else if(lamp=="yellow"){console.log("sllow")}



//let age="p"
//if(age>=18){console.log("You can get a driver’s license")}
//else if(age<18){console.log("You cant get a driver’s license")}



//let age=15
//if(age<0){console.log("error")}
//else if(age>4){console.log("right")}

// 6am-----12pm--->good morning
// 12pm----18pm---->good afternoon
// 18pm----21pm--->good evening
//otherwise --> good night
// let hour = 16
// if(hour >= 6 && hour <12 ){
//   console.log('good morning')
// }else if(hour >=12 && hour <18){
//   console.log('good afternoon ')
// }else if(hour >=18 && hour <21){
//   console.log('good evening')
// }else{
//   console.log('good night')
// }


// let role = 'admin'
// if(role == 'guest'){
//   console.log("guest user")
// }else if( role == 'admin'){
//   console.log("admin user")
// } else{
//   console.log("unknown user")
// }

//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


//switch-case   .   سوییچ کیس ها  
//برخلاف ایف و الس درون پرانتر نباید مقدار دهی شود و باید یک متغیر باشد
//زمانی که به شرط درست رسید علاوه بر اون شرط درست شرط های بعدی روهم چاپ میکند برای جلوگیری از این موضوع از بریک استفاده میکنیم



// switch(){
//   case "" هر تعداد دستور دیگه میتونیم  بعد از کیس داشته بشیمو مقدار متغیر را  ب کیس مییدیم
//   console.log()
//   break;   بعد از هر کیس باید بریک بزاریم اگر نباشه میره سراغ بعدی  
//defult :  رفتارش مثل الس هست 
// }
// let role = 'guest'
// switch(role){
// case "guest" :
//   console.log("guest user")
//   break;
//   case "admin":
//     console.log("admin user")
//     break;

//     default:
//       console.log("unknown user")
  
// }

//برنامه ای بنویسید که یک عدد بین 1تا7 را بگیرد و روزهای هفته را چاپ کند

// let day = 5
// switch(day){
// case 1 :
//   console.log('saturday')
//   break;
// case 2:
//   console.log('sunday')
//   break;
// case 3 :
//   console.log('monday')
//   break;
// case 4 :
//   console.log('tuseday')
//   break;
// case 5:
//   console.log('wednesday')
// break;
// case 6:
//   console.log('thersday')
// break;
// case 7:
//   console.log(friday)
//   break;
//   default:
//     console.log('not day')
// }

//برنامه ای بنویسید که شماره ماه رو بگیره و فصلش رو بگه

// let month = 1
// switch(month){
//   case 1:
//   case 2:
//   case 3:
//     console.log('Bahar')
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log('Tabestoon')
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log('Paeiz')
//     break;
//   case 10:
//   case 11:
//   case 12:
//     console.log('Zemestoon')
//     break;
//   default:
//     console.log('no month')
// }




//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------


//حلقه for
//میتونیم یک دستور یا چند دستور را چند بار اجرا کنیم
//for
//while 
//do while
//for...in
//for...of


//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------


//for

//for(;;){  -->  به ترتیب از چپ به راست استارت استاپ استپ  
//استارت = شروع و تعریف متغیر
//استاپ = تا کجا حلقه ادامه پیدا کنه و خرعددی ک ما به استاپ بدیم رو منهای یک میکنه و به کاربر نشون میده
//استپ =چگونگی تغییر متغییر را نشان میدهد
//console.log()
//}

//for(let p=1;p<6;p++){
// console.log('pari')
// }------->دستورات در ()----->پنج بار پری را مینویسد


//مثالهاش

//اعداد زوج بین صفر تا پنج را لاگ بگیرد
//for(let s=0;s<5;s++){
//if(s%2==0){ -----> یعنی زوج بودن
//console.log(s)
//}
// }------>0 2 4


//اعداد فرد بین 3 تا 9 را لاگ بگیرد 
// for(let i =3;i<9;i++){
//   if(i%2==1){
//     console.log(i)
//   }
// }----->3 5 7 


//از 40 تا 10 یکی یکی بیاد پایین و فرد ها را لاگ بگیرد
// for(let f =40 ; f>10 ;f--){
//   if(f%2==1){
//     console.log(f)
//   }
// }


//از 100 تا 36 بیاد پایین و زوج ها را لاگ بگیرد
// for(let e=100; e>36 ; e--){
//   if(e%2==1){
//     console.log(e)
//   }
// }

//پنج بار کلمه نئون رو لاگ بگیر
//  for(let n=0 ; n<5 ;n++){
//   console.log("neon")
//   console.log(n)
//  }
 

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//casting  تبدیل تایپ ها به یکدیگر 
//console.log('10'*10)---> استرینگ را به نامبر تبدیل کرد و جواب را با تایپ نامبر نوشت
//console.log(typeof('10'*10))--->اول پرانتز رو حساب میکنه و تایپ پرانتز میشه نامبر و بعد لاگ میگیره
//console.log(typeof'10'*10)---->تایپش-->NaN
//console.log(''*5)---> خود جاوااسکریپت استرینگ را به نامبر تبدیل میکنه و چون خالی هست صفر در نظر میگیره و بعد ضرب در 5میکنه  


//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//Number   تابع نامبر---->هر چیزی به عنوان ورودی بهش بدیم به تایپ نامبر تبدیل میکنه
// let strAge = '20'
// console.log(strAge)
// console.log(typeof strAge)
// let intAge = Number(strAge)
// console.log(intAge)
// console.log(typeof  intAge)

//console.log(Number('a9'))---->ورودی تایع نامبر رو هرچی غیر از صفر بدیم به ما نن برمیگردونه
//NaN---->Not a Number

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//String     تابع استرینگ ---->هرچیزی به عنوان ورودی بهش بدیم به تایپ استرینگ تبدیل میکنه
// let nationalCode = 2283339966
// console.log(nationalCode)
// console.log(typeof nationalCode)
// let strnationalCode = String(nationalCode)
// console.log(strnationalCode)
// console.log(typeof strnationalCode)

// let temp = 99
// console.log(temp.toString())---->متدی که کارش تبدیل کردن به استرینگه


//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//Boolean       تابع بولین---->با استفاده از این تابع میتونیم پارامترهایی که بهش میدیم رو تورو و فالز تبدیل کنه
//false --->0    , true---->1

// let isMarried = 0
// console.log(isMarried)
// console.log(typeof isMarried)
// let boolIsMarried = Boolean(isMarried)
// console.log(boolIsMarried)
// console.log(typeof boolIsMarried)

// console.log(Boolean(1))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))


//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

// let c = []
// c[3]='fati'
// console.log(c.length)
// c.length= 6
// console.log(c)


// let a = [3,9]
// let b = [ 3,9]
// console.log(a==b)
// console.log(a[1]==b[1])

//محاسبه میانگین 5عدد
// let grade1 = 14.5
// let grade2 = 18
// let grade3 = 17
// let grade4 = 16.75
// let grade5= 20
// let sum = grade1 + grade2 + grade3 + grade4 + grade5
// let avg = sum/5
// console.log(avg) ------>حالت عادی

// let grades =[14.5 , 18,17,16.75,20]
// sum = 0 
// for(let i of grades){
//   sum += i
//   i++
// }
// console.log(sum)
// let avg = sum/grades.length
// console.log(avg)---->با استفاده از ارایه ها
 
// پیمایش روی ارایه ها 
// let nam = ['fati', 'pari', 'ali' , 'hasti']
// for(let i =0 ; i <4   ;i++ ){
// if( nam == 'fati'){
// }
// }
// console.log('dar araye hast')

// let num = [ 17,12,15,11,20,22,44,60]
// for(let i =0 ;i<=7;i++){
//   if(num[i]%2==0){
//     console.log(num[i])
//   }
// }


//بزرگترین عدد ارایه
// let numbers =[ 11,34,22,66,90,,87,67,56,43,12,23,44,100]
// let max = numbers[0]
// for(let i = 1 ; i<= numbers.length-1 ; i++){
//   if( numbers[i]>max){
//     max = numbers[i]
//   }
// }
// console.log(max)





// let Array=[20,'pari',13.5,true,'nan'];
// const Aray=[20,'pari',13.5,true,'nan']

//چاپ ارایه
// console.log(Array[2])
// console.log(Aray[1])
// console.log(Array[3])
// console.log(Aray[2])

//تغییر مقدار ارایه
// Array[0]='fati'
// console.log(Array[0])


// let q=[]
// q[3]='pari'
// console.log(q)------>[ <3 empty items>, 'pari' ]


//گرفتن طول ارایه
//let Array=[20,'pari',13.5,true,'nan'];
//console.log(Array.length)------>5
//تغییر طول ارایه
// Array.length=6
// console.log(Array.length)---->6
// console.log(Array)----->[ 20, 'pari', 13.5, true, 'nan', <1 empty item> ]


//مقایسه دو ارایه با مقداری یکسان
//  let a =['pari',21,false]
//  let b =['pari',21,false]
// console.log(a==b)---->false  , ادرسشون برابر نیس چون مقدار داخل ارایه مهم نیس ولی ادرسش مهمه
//,هر دو مسافرخونه که یکجا نیسن
//console.log(a[2]==b[2])---->true   ,   مقادیر هر دو یکی هست پس برابره  


//میانگین گرفتن
//بدون یادگیری ارایه

// let a =13
// let b=7
// let c=19
// let d=9
// let jam=a+b+c+d
// let miyan=jam/4
// console.log(miyan)---->12

//با یادگیری ارایه
 //let m=[12,16,5,20,15]
// let sum=m[0]+m[1]+m[2]+m[3]+m[4]
// let miyan=sum/5
// console.log(miyan)---->13.6


//  let m=[12,16,5,20,15]
//  let sum=0
//  let p=0
//  for(let p=0;p<=m.length-1;p+=1){
//  sum+=m[p]
//  }
//  let miyan=sum/m.length
//  console.log(miyan)



//پیمایش روی ارایه
// let p=[22,13,87,45,14,16,20]
// let i=0
//  for(let i=0;i<=p.length-1;i+=1){ if(p[i]%2==0)
//     {console.log(p[i])};
// }---->22,14,16,20



// let Array=[12,67.9,false,'pari']
//ارایه را تبدیل به متن میکنه
//console.log(Array)----->  [ 12, 67.9, false, 'pari' ]
//console.log(Array.toString())---->  12,67.9,false,pari  

//تبدیل جدا کننده ها به هرچی بخایم
//let Array=[12,67.9,false,'pari']
//console.log(Array.join('*'))---->  12*67.9*false*pari
//console.log(Array.join('+'))---->  12+67.9+false+pari

//اخرین خانه ی ارایه را چاپ میکند
//let Array=[12,67.9,false,'pari']
//console.log(Array.pop())---->pari

//اخرین عضو ارایه را حذف کند
//let Array=[12,67.9,false,'pari']
// Array.pop()
// console.log(Array)----> [ 12, 67.9, false ]

// عضو اول ارایه را حذف کند 
//let Array=[12,67.9,false,'pari']
// Array.shift()
// console.log(Array)----->[ 67.9, false, 'pari' ]

//عضو اول را چاپ کند
//let Array=[12,67.9,false,'pari']
//console.log(Array.shift())---->12

//  ایتم جدید به ارایه اضافه میکنه از اخر
//let Array=[12,67.9,false,'pari']
//Array.push('rara')
//console.log(Array)----> [ 12, 67.9, false, 'pari', 'rara' ]

//از اول ایتم جدید به ارایه اضافه میکند
//let Array=[12,67.9,false,'pari']
// Array.unshift('fati')
// console.log(Array)-----> [ 'fati', 12, 67.9, false, 'pari' ]

//حذف خانه های درون ارایه    .    خود اتاق از بین نمیره فقط مقدار داخلش از بین میره  
//let Array=[12,67.9,false,'pari']
//delete Array[1]
//console.log(Array)----->  [ 12, <1 empty item>, false, 'pari' ]

//ادغام کردن چند ارایه باهم 
//  let a=[1,2,3,4,5,6]
//  let b=[7,8,9,10]
//  let c=[3,4,7,8,2]
//  let d=a.concat(b,c)
//  console.log(d)----->[
//     1, 2, 3,  4, 5, 6,
//     7, 8, 9, 10, 3, 4,
//     7, 8, 2 ]
 
//  عضو های ارایه را از اندیس به بعد حذف میکند و باقی مانده را چاپ میکند 
//let Array=[12,67.9,false,'pari']
//Array.splice(1)--->شماره ی خانه نه اندیس 
//console.log(Array)---->[ 12 ]
//Array.splice(2,2)--->فلان خانه ها را از فلان خانه ها به بعد حذف کن
//console.log(Array)---->[ 12, 67.9]

//از فلان اندیس به بعد حذف بشه
//let Array=[12,67.9,false,'pari']
// let p=Array.slice(2)
// console.log(p)---> [ false, 'pari' ]
// let o =Array.slice(1,3)--->  از خانه ی اول تا قبل از خانه ی سوم 
// console.log(o)----> [ 67.9, false ]

// اعداد از کوچکتر به بزرگتر , اعضای ارایه را از طریق الف با مرتب میکند
// let Array=[12,67.9,false,'pari','zara','ali']
// Array.sort()
// console.log(Array)----->    let Array=[12,67.9,false,'pari']

//اعضای ارایه را برعکس میکند
// let Array=[12,67.9,false,'pari','zara','ali']
// Array.reverse()
// console.log(Array)------>  [ 'ali', 'zara', 'pari', false, 67.9, 12 ]

//   (اولین)در ارایه هرچیزی که بخایم جست و جو میکنه و شماره اندیس اونو میگه  
// let Array=[12,67.9,false,'pari','zara','ali


// let p=[12,34,54,12,34,89]
//چاپ ارایه
// console.log(p[1])
//console.log(p[6])

//تغییر مقدار ارایه
// p[2]=13
// console.log(p)
// p[5]=90
// console.log(p)

//گرفتن طول ارایه
//console.log(p.length)  -----> از صفر شروع نمیشود

//مقایسه کردن دو ارایه
// let p=[12,34,54,12,34,89]
// let f=[12,34,54,12,34,89]
// console.log(p==f)        false
// console.log(p[1]==f[1])    true


//جمع ارایه ها 
// let p=[12,34,54,12,34,89]
// let i=0
// let sum=0
// for(let i=0;i<=p.length-1;i+=1){
//     sum+=p[i]
// }
// console.log(sum)
//------------------------------
// let score=[12,3,15,16,17,20,9,11]
// let i=0
// let sum=0
// for(let i=0;i<=score.length-1;i++){
//     sum+=score[i]
// }
// console.log(sum)


//میانگین ارایه ها
// let score=[12,4,13,8,20,19,17]
// let j=0
// let sum=0
// let avrg=0
// for(let j=0;j<=score.length-1;j++){
// sum+=score[j]
// }
// avrg=sum/score.length
// console.log(avrg)
//--------------------------------
// let p=[12,34,54,12,34,89]
// let i=0
// let sum=0
// let a=0
// for(let i=0;i<=p.length-1;i++){
// sum+=p[i]
// }
// a=sum/p.length
// console.log(a)


//جدایی اعداد زوج و فرد در ارایه
// let p=[12,34,54,12,34,9,1,46,75,89]
// let i=0
// let zoj=0
// let fard=0
// for(let i=0;i<=p.length-1;i++){
//     if(p[i]%2==0)
//     {zoj.push(p[i])}
// else{fard.push(p[i])}
// }
// console.log(p[i])
//--------------------------------------
// let score=[12,20,1,6,3,17,11,9]
// let m=0
// let bala=[]
// let paeen=[]
// for(let m=0;m<=score.length-1;m++){
// if(score[m]>10){bala.push(score[m])}
// else{paeen.push(score[m])}
// }
// console.log(bala)
// console.log(paeen)


//میانگین اعداد زوج در ارایه
// let score=[12,20,1,6,3,17,11,9]
// let i=0
// let zoj=0
// let sum=0
// let avg=0
// for(let i=0;i<=score.length-1;i++){
// if(score[i]%2==0){
//     sum+=score[i]
// }
// }
// avg=sum/score.length
// console.log(avg)


//بزرگترین عدد در اریه را چاپ کند
// let score=[12,20,1,6,3,17,11,9]
// let i=0
// let max=score[0]
// for(let i=0;i<=score.length-1;i++){
// if(score[i]>max)
// max=score[i]
// }
// console.log(max)


//کوچکترین عضو را لاگ بگیرد
// let score=[12,20,1,6,3,17,11,9]
// let i=0
// let min=score[0]
// for(let i=0;i<=score.length-1;i++){
// if(score[i]<min)
// min=score[i]
// }
// console.log(min)


//تعداد کوچکتر از 12 را چاپ کند
// let score=[12,20,1,6,3,17,11,9]
// let i=0
// let min=[]
// for(let i=0;i<=score.length-1;i++){
//     if(score[i]<12){
//         min.push(score[i])
//     }
// }
// console.log(min)


//متدها
// let score=['fati','pari',12,20,1,6,3,17,20,11,9]
//console.log(score.toString())
//console.log(score.join('*'))
// score.pop()
// console.log(score)
// let s=score.pop()
// console.log(s)
// score.shift()
// console.log(score)
// let s=score.shift()
// console.log(s)
// score.push('zara')
// console.log(score)
// score.unshift('aria')
// console.log(score)
//score.reverse()
//console.log(score)
// score.sort()
// console.log(score)
//console.log(score.indexOf(20))
//console.log(score.lastIndexOf(20))
// delete score[2]
// console.log(score)
// let score=['fati','pari',12,20,1,6,3,17,20,11,9]
// let sscore=[12,20,1,6,3,17,11,9]
// let p=[12,34,54,12,34,9,1,46,75,89]
// let i=score.concat(sscore,p)
// console.log(i)






// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

//function     توابع
// function declaration--------> function m (){}
// function functionname(ورودی تایع){
// console.log('first name = fati')
// console.log('last name = mehrizi')
// console.log('age = 20')
// }
//functionname()-------->  باید تایع صدا زده شود تا دستورات اجرا شود هرچندبار که صدا زده شود به همون اندازه کدها اجرا میشود
//
//function expression------->توابع بی نام -------->let m = function(){}
// let fati = function(){
//   console.log('first name = fati')
// console.log('last name = mehrizi')
//  console.log('age = 20')
// }
// fati()
//تابع برای انجام یک فعالیت خاص و مشخص برنامه نویسی میشه و ممکنه در وطل اجرا بارها اجرا شود ینی
// تابع یک برنامه کوچیکه که یکبار کدنویسی می شود و میتونیم بارها و بارها ازش استفاده کنیم 
//توابع مانند متغیرها نامکذاری میشوند 
//توابع میتونن ورودی های مختلفی داشته باشن =>عدد و ارایه و بولین ووو
//هر تابع یه چیزی رو برمیگردونه
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//
// function addNumber(num1,num2){
// console.log(num1+ num2)
// }
// addNumber( 10 , 5)---->این اعداد میرن بالا و داخل ورودی تابع جایگزین میشن 
//---------------------------------------------------------------------------
// let add = function(num1 , num2){
//   console.log(num1 + num2)
// }
// add ( 4 , 8)
// add ( 10 , 5)
//---------------------------------------------------------------------------
//تابعی بنویسید که عددی را دریافت کند و اگر عدد زوج بود چاپ کند عدد زوج است و اگر فرد بود چاپ کند عدد فرد است
// function zojyafard(number){
// if(number%2==0){
//   console.log('zoj')
// }else{
//   console.log('fard')
// }
// }
// zojyafard(20)--------->اگر به تابع عدد ندیم ورودی تابع میشه اندیفایند و 
// اندیفلیند تقسین به دو میشه نن و نن ==0نیست و جواب برا ما تورو چاپ میشه
//--------------------------------------------------------------------------
// f = cantigerad *9/5 +32
// cantigerad = 0
// f= 32 farenhait
//تابعی بنویسید که درجه سانتی گراد را به فارنهایت تبدیل کند
// function cantitofarenhit(celsuse){
// let f = celsuse*9/5+32
// console.log('farenhit :' +f)
// }
// cantitofarenhit(25)
//---------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//تابعی بنویسید که ارایه ای از اعداد را دریافت کند و مجموع اعداد درون ارایه رو محاسبه کند و نمایش دهد 

// let arr = [1,2,3,4,5,6]
// let sum = 0
// for(let i=0 ; i <arr.length ; i++ ){
//   sum += arr[i]
// }
// console.log(sum)------>حالت عادی

// function numbers(array){
//   let sum = 0
// for( let i =0 ; i < array.length ; i++ ){
// sum += array[i]
// }
// return sum
//  }

//  console.log(numbers([1,2,3,4,5,6]))

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//Parameter ----> پارامتر-----> ورودی هایی که زمان تعریف تابع درون پرانتز جلوی تابع مینویسیم 
//Argument---->ارگمان ---->ورودی هایی که موقع صدازدن تابع در نظ میگیرم در  اخر کد 
//Return ---->یک مقداری از تابع رو برمیگردونه و اگر در تابع از ریترن استفاده نکنیم تابع مقدار اندیفایند رو برمیگردونه
//وقتی به دستور ریترن میرسیم در تابع اجرای تابع به اتمام میرسه و هردستوری بعد از ریترن در تابع باشه اجرا نمیشه
//console.log('....'.startwith(..))----->  رشته درون استرینگ شروع شده با هرچی ک جلوش درون پرانتز بزاریم




// function addNumber(num1 , num2){
//   console.log(num1 + num2)
// }
// //addNumber(5,51)
// let x = addNumber(5,51)
// console.log(x)------> undefined

// function addNumber(num1 , num2){
//    return (num1 + num2)
// }
//  let x = addNumber(5,51)
//  console.log(x)

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//تابعی بنویسید که 5 نمره یک دانشجو را داشته باشد و معدلش را محاسبه کند و اگر معدل مساوی 12 یا بیشتر بود  چاپ کند قبول
// چاپ کند مشروط و اگر نبود

// function score(num1 , num2 , num3 , num4 , num5){
// let sum = num1 + num2 + num3 + num4 + num5
// let average = sum / 5

// if(average > 12){
//   console.log('ghabol')
// }else{
//   console.log('mashrot')
// }
// }
// score(10,20,15,9,11)

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//تابعی بنویسید که ارایه ای از اعداد رو دریافت کتد و ارایه ای از اعداد زوجرو ریترن کند

// function numbers(arr){
// let num = []
// for(let i =0 ; i<arr.length ; i++){
//   if(arr[i]%2==0){
//     num.push(arr[i])
//   }
// }
// return num
// }
// console.log(numbers([20,10,4,5,7,11,35]))


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//تابعی که ارایه ای از اسامی رو بگیره و به عنوان ورودی یک کااراکتر رو دریافت کنه 
// و اسامی که با اون حرف شروع شده رو چاپ کنه

// let arr = ['fati', 'pari', 'hasti', 'sadaf', 'fati','fati', 'nastaran']
// function names(character){
// let result = []
//   for(let i =0 ; i< arr.length; i++){ 
//     if(arr[i].startWith(character)){
//       result.push(arr[i])
//     }
//   }
// return result
// }
// //console.log(names(['fati', 'pari', 'hasti', 'sadaf', 'fati','fati', 'nastaran']))

// console.log(names('f'))


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//تابعی تعریف کنید که یک عدد را دریافت کند و مشخص کند که ایا اون عدد اول هست یا نه؟

// let count = 0 , number = 3;//----->کانت برای شمردن مقسوم علیه ها به کار میره
// for(let i=1 ; i <= number ; i++ ){
//   if(number%i ==0){
// count++
// }
// }
// if(count==2){----->تعدادمقسوم علیه های عدد برابر دو بود 
//   console.log('yes')
// }else{
//   console.log('no')
// }--->بدون استفاده ار فانکشن

// function isPrime ( number){
// let count = 0 
// for(let i=1 ; i <= number ; i++ )
//   if(number%i ==0){
//  count++
//   }
// }
// if(count==2){
//   return true
//  }else{
// return false
// }

// console.log(isPrime(5))


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//**بعضی توابع خروجیشان مقدار بولین تورو یا فالز هست  */
//console.log(Number.isInteger(5))---->true---->مثال
//console.log(Number.isInteger(5.6))---->false---->مثال


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//تابع توان --->Pawer

//function(base , exponent){
//code 
// }
//عدد 2 را به توان 3 برسان
// let result = 1
// for(let i =1 ;i<=3 ;i++){
//   result *= 2
// }
// console.log(result)----حالت عادی

// function pawer(base , exponent){
// let result = 1
// for(let i = 1; i<= exponent ;i++){
//   result*= base
// }
// return result
// }
// console.log(pawer(2,3))
// console.log(pawer(2,0))
// console.log(pawer(3,2))
// console.log(pawer(10,2))--->با استفاده از فانکشن

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//توابع با تعداد  ورودی نامشخص
// function sum(num1,num2,num3){
// return num1 + num2 + num3
// }
// console.log(sum(1,2,3))
// console.log(sum(10 , 5 ,3))

//console.log(sum(10,5))----->NaN       موقع تعریف تابع سه تا ورودی دادیم اما اینجا دوتا ورودی هست به جای 
//   نام سوم مقدار اندیفایند قرار میگیره و عدد در جمع بااندیفایند مقدار نن رو برمیگردونه
//console.log(sum(5,15,3,2))----> ورودی چهارم نادیده گرفته میشه و به اندازه ای ک ورودی دادیم جمع میکنه و مقدار اضافی رو نادیده میگیره

//* ,هرتابع داخل خودش به یک ارایه به اسم ارگیومنت دسترسی داره و در اصل ارگیومنت شبه ارایه هست 

// function myfunction(){-----> ورودی نمیدیم بهش
// console.log(arguments.length)---->تعداد ورودی های نامشخص
// }
// myfunction()//-----> این ورودی ها یا ارگومان ها داخل ارگیومنت نقطه لنس ذخیره میشن    هر ورودی که بدیم بهش
// myfunction(10,20,44)


//روش اول
// function sum(){
// let total = 0
// for(let i =0 ; i<arguments.length ; i++){
//   total += arguments[i]
// }
// return total
// }
// console.log(sum())
// console.log(sum(5))
// console.log(sum(5,10))
// console.log(sum(7,8,5,40,40))


//روش دوم : چون ارگیومنت شبه ارایه هست ما خیلی از متد های ارایه هارو نمیتونیم روش استفاده کنیم و به جاش از اررایه استفاده میکنیم

// function myfunction(...numbers){//------------>     سه تا نقطه نشان دهنده عملگر رست هست و زمانی که
//   //    به تایع ارگمان ورودی بدیم میاد درون نامبرز ذخیره میشه و نامبرز  اسم داخواهه و هرچیزی میتونه باشه
// console.log(numbers)
// }
// myfunction()
// myfunction(5)
// myfunction(5,8,10,14)//------>ارگمان های ورودی


// function sum(...nums){
// let total = 0
// for(let i =0 ; i<nums.length ; i++){
//   total += nums[i]
// }
// return total
// }
// console.log(sum())
// console.log(sum(5 , 20))
// console.log(sum(5,10,25))
// console.log(sum(7,8,5,40, 55,40))

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

// defult parameters  --->پارامترهای پیش فرض  
//پارامتر های پیشفرض باید اخر پرانتز باشن و بهشون مقدار بدیم مثل نام 3 که شده 0  و اگر اول یا وسط باشه باز اندیفایند میشه

// function sum(num1 , num2 , num3=0){----> اگر برای این پارامتر ها ارگمان متناسب با تعدادشون ندیم مقدار پیشفرض قرار میگیره به جاش , 
//   //و میتونیم توی همون پارامتر بالا مقدار نام رو برابرمقدار پیشفرض مد ننظر قرار بدیم
//   //   و اگر ارگمانی به جاش قرار نگیره این عدد به جای اون هست مقدار اندیفایند برنمیگردونه
//   return num1+ num2+ num3
// }
// console.log(sum(10,4,5))
// console.log(sum(10,4))------->  Nan  عدد سوم اندیفایند هست

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//Arrow function (=> namad )    --->جایگزین فشرده برای روش فانکشن اکسپرشن هست  اما یک سری محدودیت ها داره
//  و در همه مموقعیت ها نمیتونیم ازش استفاده کنیم
//از این مدل زمانی استتفاده میکنیم که معمولا یک دستور و یک خط باشه و کلا ساده باشه 


// let massage = ()=>console.log('next1code')--->در این نوع ما اسم فانکشن رو نمینویسیم  و {} حذف میشه 
// و فقط پرانتز و نیاز به نوشتن دستور ریترن هم نیست
// massage()


//تابعی بنویسید که دو عدد را دریافت  باهم جمع کند
// let addd = function(a,b){
//   return a+b
// }
// console.log(addd(10,20))


// let add = (a,b)=>  a+b
// console.log(add(5,10))


//تابعی بنویسید که عددی را دریافت و ان را ضرب در خودش کند

// let pawer = function(num){
// return num*num
// }
// console.log(pawer(6))

// let pawerr  = (num)=>num*num
// console.log(pawerr(6))






