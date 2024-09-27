// // // // // console.log('Deep')
// // // // // var nme ='deep'

// // // // // for (i=0;i<=10;i++){
// // // // //     console.log(i)
// // // // // }
// // // // // var m=3
// // // //  // m=9
// // // // // for (i=0;i<=10;i++){
// // // // //     console.log(i*m)
// // // // // }
// // // // // var new_object={new:'value'}
// // // // // console.log(new_object)
// // // // // var array=[1,2,3,4,5,6]
// // // // // console.log(array)
// // // // // function for_loop(){
// // // // //     for(i=0;i<=10;i++){
// // // // //         console.log(i)
// // // // //     }}
// // // // //     for_loop()
// // // // //   var i=[1,2,3,4,5,6]
// // // // //   console.log(i.at(1))  
// // // // //   i.join('*')
// // // // //   console.log(i)




// // // // //   function isArmstrongNumber(num) {
// // // // //     // Convert the number to a string to easily iterate over digits
// // // // //     const numStr = num.toString();
// // // // //     const numDigits = numStr.length;
    
// // // // //     // Calculate the sum of each digit raised to the power of the number of digits
// // // // //     const sum = numStr.split('').reduce((accumulator, digit) => {
// // // // //         return accumulator + Math.pow(parseInt(digit), numDigits);
// // // // //     }, 0);

// // // // //     // Check if the sum is equal to the original number
// // // // //     return sum === num;
// // // // // }

// // // // // // Example usage:
// // // // // const number = 153;
// // // // // if (isArmstrongNumber(number)) {
// // // // //     console.log(`${number} is an Armstrong number.`);
// // // // // } else {
// // // // //     console.log(`${number} is not an Armstrong number.`);
// // // // // }
 // var sum=0;
// var number="183";
// function isArmstrongNumber(number){
  
//   m=number.length;
//   for (i=0;i<m;i++){
//     sum=sum+(number[i]**m);
//   }
//   if (sum==number){
//     console.log('number is armstrong')
//   }
//   else{
//     console.log('number is not armstrong')
//   }
  
  
// }


// isArmstrongNumber(number)


// // // // // console.log("Hello World")
// // // // // var name =['Deep']
// // // // // var Adress =['vapi']
// // // // // var city =['vapi']
// // // // // console.log(name)
// // // // // console.log(Adress)
// // // // // console.log(city)
// // // // // r=14
// // // // // area =3.14*r
// // // // // console.log(area)

// // // // // x=2
// // // // // y=3
// // // // // console.log(x+y)
// // // // // console.log(x*y)
// // // // // console.log(x/y)
// // // // // var temp;
// // // // // temp=x;
// // // // // x=y;
// // // // // y=temp;
// // // // // console.log(x)
// // // // // console.log(y)
// // // // // n=3
// // // // // m=5
// // // // // if (n<m){
// // // // //   console.log('n is smaller')
// // // // // }
// // // // // else{
// // // // //   console.log('m is greater than n ')
// // // // // }
// // // // // if (n>m){
// // // // //   console.log('n is greater')
// // // // // }
// // // // // else{
// // // // //   console.log('m is greater')
// // // // // }
// // // // // n=3
// // // // // m=4
// // // // // z=9
// // // // // if (z<n>m){
// // // // //   console.log("n is greater")
// // // // // }
// // // // // else if (z<n<m){
// // // // //   console.log('n is greater than z but less than m')
// // // // // }
// // // // // else if (z>n>m){
// // // // //   console.log('z is greater than n and n is greater than m')
// // // // // }
// // // // // else {
// // // // //   console.log('z is greater than n and m ')
// // // // // }
// // // // // n=1
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // n=2
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }

// // // // // n=3
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // n=4
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // n=5
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // n=6
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // n=7
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // n=8
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // n=9
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // n=10
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // n=11
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // n=12
// // // // // for (i=1;i<=10;i++){
// // // // //   console.log(n*i)

// // // // // }
// // // // // sum45=0
// // // // // for (i=45;i<=65;i++){
 
// // // // //   sum45 =sum45 + i
// // // // // }
// // // // // console.log(sum45)
// // // // // var number=7;
// // // // // var count=0;

// // // // // for(var i=2; i<number;i++){
// // // // //     if(number%i==0){
// // // // //         count=count+1
// // // // //     }
// // // // // }
// // // // // if (count>0){
// // // // //     console.log(number, "is not a prime number")
    
// // // // // }
// // // // // else{
// // // // //     console.log(number, "is  prime number")
// // // // // }
// // // // // console.log('********')
// // // // // rarray=[];
// // // // // for (i=101;i<=130;i++){
// // // // //   rarray.push(i)
// // // // // }
// // // // // console.log(rarray)
// // // // // b=('my name')
// // // // // d=('is deep')
// // // // // console.log(b.concat(d))

     
// // // // // b=console.log(b)
// // // // // no1=2;
// // // // // no2=3;
// // // // // [no1,no2]=[no2,no1]
// // // // // console.log('no1',no1)
// // // // // console.log('no2',no2)

// // // // // var number = 223;
// // // // // var sum = 0;

// // // // // while (number > 0) {
// // // // //   sum = sum + (number % 10); 
// // // // //   number = (number -(number % 10))/10; 
// // // // // }

// // // // // console.log(sum);

// // // // const colors = ["red", "green", "blue"];
// // // // const [firstColor, secondColor, thirdColor] = colors;

// // // // console.log(firstColor); 
// // // // console.log(secondColor); 
// // // // console.log(thirdColor);

// // // // const cars=['lambo','merc','buggati','dodge','mclaren']
// // // // const [car1,,,,car5]=cars
// // // // console.log(car1)
// // // // console.log(car5)

// // // // let ecar={bname:'bj',age:'infinite'}
// // // // let{age,bname}={bname:'bj',age:'infinite'}
// // // // console.log(bname)

// // // // const uniquenumbers= new Set();
// // // // uniquenumbers.add(1)
// // // // console.log("set:Unique numbers-",Array.from(uniquenumbers).join(","))



// // // // let arr='aa,bbb,cc,dddd';
// // // // var alp= arr.split(",");
// // // // console.log(alp)
// // // // console.log(alp.length)
// // // // let max=alp[0].length
// // // // max_word=''
// // // // for(i=1;i<alp.length;i++){ 
// // // //     if(max>alp[i].length){
// // // //         max_word=max
// // // //     }
// // // //     else{
// // // //        max_word=alp[i].length
// // // //     }
// // // //     }
// // // //     console.log(max_word)

// // // a='hello,world';
// // // b=a.split(',');
// // // console.log(b)

 
// var arr=[1,3,2,4,5,8,7];
// var count=0;
// for (i=0;i;i++){
//     if (arr[i]!=undefined){
//         count=count+1;
//         console.log(count);
//     }
//     else{
//         count=0; n
//     }
// }

// arr.sort();

// n=[];
// for (i=0;i<arr.length;i++){
//     if(arr[i+1]=arr[i]+1){
       
//     }
//     else{
//         arr[i]=arr[i]+1;
        
//     }
//     n=n+arr[i]
// }
// console.log(n)


// var i=0;
// for(i=0;i<=10;i++){
//     if(i%2==0){
//         console.log(i,"is a even number ");
//     }
//     else{
//         console.log(i,"is a odd number");
//     }
    

       
// }


// str="madam";
// revstr='';
// for(i=str.length-1;i>=0;i--){
//     revstr=revstr+str[i]
// }
// if(str==revstr){
//     console.log("it is a pallindrome")
// }
// else{
//     console.log("it is not a pallindrome")
// }

// var a=1,2,3,[{12:"we"},{y:"ws"}],2];
// console.log(a[3][1].y)
// var num=5;
// var sum=0;
// var fact=1;
// for(i=num;i>0;i--){
//     fact=fact*i;
//     sum+=fact
// }
// console.log(fact);

// var num=5;
// fact=1;
// for(i=1;i<=num;i++){
//     fact=fact*i;
// }
// console.log(fact);

// 5 4 3 2 1
// var str="abc";
// rev="";
// var len=str.length;
// for(i=len-1;i>=0;i--){
//       rev=rev+str[i];
     
// }
// if(rev==str){
//     console.log("it is a pallindrome");
//  }
//  else{
//     console.log("it is not a pallindrome");
//  }
//  console.log(rev);

// var num=123;
// sum=0;
// numstr=num.toString().split("");
// len= numstr.length;
// console.log(len);
// for(i=0;i<len;i++){
    
    
// }
// console.log(sum);
// var num=12;
// for(i=2;i<num;i++){
//     if(num%i==0){
//         isprime=false
//     }
//     else{
//         isprime=true; 
//     }
    
// }
// if(isprime){
//     console.log("it is a prime numbee ")
// }
// else{
//     console.log("it is not  prime numbee ")
// }
// var arr=[1,2,3,4,5];
// let sum=0;
// largest=arr[0];
// sec=arr[1]
// len =arr.length;
// for(i=0;i<len;i++){
//     if(largest<arr[i]){
//          sec=largest;
//          largest=arr[i];
       
//     }
//     else if(arr[i]<sec&&arr[i]>largest){
//         sec=largest;
//         largest=sec;
        
//     }   
// }
// console.log(sec,largest)

// let a=0;
// let b=1;
// let c
// console.log(a);
// console.log(b);
// for(i=1;i<=5;i++){

//     c=a+b
//     a=b
//     b=c
//     console.log(c)
// }

// let num="143";
// let len=num.length;
// let add;
// let arm=0;
// for(i=0;i<len;i++){
//     add=num[i]**len;
//     arm=arm+add;
// }
// if(arm==num){
//     console.log("it is a armstrong")
// }
// else{
//     console.log("it is not a armstrong")
// }


// let a=2;
// let b=4;
// let c=a;
// a=b;
// b=c;
// console.log(a,b);

// let str="deed";
// let len=str.length;
// let revstr="";
// for(i=len-1;i>=0;i--){
//     revstr=revstr+str[i];
// }
// if(revstr==str){
//     console.log("yes");
// }
// else{
//     console.log("no"); 
// }
// let num=100;
// for(i=2;i<=num;i++){
//     if(i%2==0&&i%3==0&&i%5==0){
//         console.log(i);
//     }
// }
// vscode iss not good for me and my friend
// let arr=[10,8,7,2];
// let buy=arr[0];
// let sell=arr[3];
// for(i=0;i<arr.length;i++){
//     if(buy<arr[i]){
//         buy =buy;  
//         index=1;   
//     }
//     else{
//         buy=arr[i];
//         index=i;
//     }
//    for(j=index;j<arr.length;j++){
//     if(sell>arr[j]){
//         sell=sell;
//         ind=4;
//     }
//     else{
//         sell=arr[j];
//         ind=j;
//     }
//    }
   
    
// }

// console.log("u can buy it on day",index);
// console.log("u can sell it on day",ind)
// console.log(profit=sell-buy)  

// arr1=[5,7,9,11];

// for(i=0;i<arr1.length;i++){
//     for(j=2;j<arr1[i];j++){
//         if(arr1[i]%j==0&&arr1[i]%2!=0){
//             console.log(arr1[i])
//         }
//                 else{
//                     consolelog(arr1[i])
//                 }
//             }
//     }
    

// let a=0
// let num=5;
// let b=1;
// let sum=a+b;
// for(i=0;i<=num;i++){
//     next=a+b;
//     sum=sum+next;
//     a=b;
//     b=next;
// }
// console.log(next)


// arr1=[1,2,3,4];
// arr2=[2,3,5,6];
// for(i=0;i<arr1.length;i++){
//     for(j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             console.log(arr1[i])
//         }
//     }
// }arr[i]=7
arr=[7,3,4,5];
for(i=0;i<arr.length;i++){
    for(j=2;j<arr[i];j++){
        if(arr[i]%j==0){
            console.log("it is a oddd prime number");
        }

    }
}
// let arr = 9; // The number to check
// let count = 0; // Counter for factors

// // Loop to check for factors
// for (let i = 2; i < arr; i++) {
//     if (arr % i === 0) { // Check if i is a factor
//         count++; // Increment count if a factor is found
//     }
// }

// // Check if count is zero
// if (count === 0) {
//     console.log("It is prime"); // No factors found, it's prime
// } else {
//     console.log("It is not prime"); // Factors found, it's not prime
// }





let arr=[2,4,5,6,7];
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==9){
            console.log(arr[i],arr[j]);
            
        }
        else{
                
        }
    }
}


































































































































































































































