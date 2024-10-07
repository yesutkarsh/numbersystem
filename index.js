const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

  function printEvenAdnOdd(numbers){
  
    let even = []
    let odd = []

    for(let i =0; i<numbers.length;i++){
        if(numbers[i]%2==0){
            even.push(numbers[i])
        }
        else{
            odd.push(numbers[i])
        }
    }
    console.log(even,odd)
  }

  printEvenAdnOdd(numbers)

  