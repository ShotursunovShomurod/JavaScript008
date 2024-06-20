// while
{
  // while1
  // {
  // let A = 20;
  // let B = 7;
  // let count = 0;

  // while (A >= B) {
  //     A -= B;
  //     count++;
  // }

  // console.log("B segmentlarini o'rnatgandan keyin A ning qolgan qismi:", A);
  // // }

  // while2
  //   {
  //     let A = 20;
  //     let B = 5;
  //     let count = 0;

  //     while (A >= B) {
  //       A -= B;
  //       count++;
  //     }

  //     console.log("A dagi B segmentlari soni:", count);
  //   }

  // while3
  // {
  //     let N = 17;
  //     let K = 6;

  //     while (N >= K) {
  //         N -= K;
  //     }

  //     console.log("Sonning qoldigi", N);
  // }

  //   // while4
  // {
  //   function while4(n) {
  //     let powerOf3 = 1;
  //     while (powerOf3 < n) {
  //         powerOf3 *= 3;
  //     }
  //     return powerOf3 === n ? "3 ning darajasi" : "3 ning darajasi emas";
  //   }
  //   console.log(while4(27));
  // }
}

// ForWhileDoMasalalar
{
  // 1masala
  // {
  //   function foo(array){
  //       let musbat = 0, manfiy = 0
  //       for(let i = 0; i < array.length; i++){
  //           if(array[i] > 0){
  //               musbat += array[i]
  //           }else{
  //               manfiy += array[i]
  //           }
  //       }
  //       return `${musbat} ${manfiy}`
  //   }
  //       console.log(foo([34, 45, -40, -20 ]));
  // }
  // masla1While
  // {
  //   function foo(array){
  //       let musbat = 0, manfiy = 0;
  //       let i = 0;
  //       while(i < array.length){
  //           if(array[i] > 0){
  //               musbat += array[i]
  //           }else{
  //               manfiy += array[i]
  //           }
  //           i++
  //       }
  //       return `${musbat} ${manfiy}`
  //   }
  //   console.log(foo([8, 56, -2, -7 ]));
  // }
  // masla1DoWhile
  // {
  //     function foo(array){
  //         let musbat = 0, manfiy = 0
  //         let i = 0
  //         do{
  //             if(array[i] > 0){
  //              musbat += array[i]
  //             }else{
  //             manfiy += array[i]
  //             }
  //             i++
  //         }while(i < array.length)
  //             return `${musbat} ${manfiy}`
  //     }
  //     console.log(foo([8, 6, 6, 5, -4, -3 ]));
  // }
  // masala2For
  // {
  //     function foo(array){
  //         let sum = 0
  //         for(let i = 0; i <= array; i += 2){
  //             sum = sum + i
  //         }
  //         return  `juft sonlar yigindisi ${sum}`
  //     }
  //     console.log(foo(4));
  // }
  // masala2While
  // {
  //     function foo(array){
  //         let sum = 0
  //         let i = 0
  //         while(i <= array){
  //             sum = sum + i
  //             i += 2
  //         }
  //         return  `juft sonlar yigindisi shunga teng ${sum}`
  //     }
  //     console.log(foo(24));
  // }
  // masala2DoWhile
  // {
  //     function foo(array){
  //         let sum = 0
  //         let i = 0
  //         do{
  //             sum = sum + i
  //             i += 2
  //         }while(i <= array)
  //             return  `juft sonlar yigindisi shunga teng ${sum}`
  //     }
  //     console.log(foo(23));
  // }1
  // masala3For
  // {
  //     function foo(a, b) {
  //         let sum = 0
  //         for (let i = a; i <= b; i++) {
  //             sum = sum + i
  //         }
  //         return sum
  //     }
  //     console.log(foo(5, 12));
  // }
  // masala3While
  // {
  //     function foo(a, b) {
  //             let i = a
  //             let sum = 0
  //         while (i <= b){
  //           sum = sum + i
  //           i++
  //         }
  //         return sum
  //     }
  //     console.log(foo(12, 15));
  // }
  // masala3DoWhile;
  // {
  //   function foo(a, b) {
  //     let i = a;
  //     let sum = 0;
  //     do {
  //       sum = sum + i;
  //       i++;
  //     } while (i <= b);
  //     return sum;
  //   }
  //   console.log(foo(12, 15));
  // }
  // masala4
  // {
  //     function foo(n){
  //         for(let i = n; i >= 0; i -= 2){
  //             console.log(i);
  //         }
  //     }
  //     console.log(foo(7));
  // }
  // masala4While
  // {
  //    function foo(n){
  //     let i = n
  //     while(i >= 0){
  //         console.log(i);
  //         i -= 2
  //     }
  //    }
  //    console.log(foo(23));
  // }
  // masala4DoWhile
  // {
  //     function foo(n){
  //         let i = n
  //         do{
  //             console.log(i);
  //             i -= 2
  //         }while(i >= 0)
  //             return "😁"
  //     }
  //     console.log(foo(23));
  // }
}