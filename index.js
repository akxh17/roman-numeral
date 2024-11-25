const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanConvert = (num) => {
    const numArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const romArray = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let romString = "";
    let a = num;
    let flag = 0;
    while(a != 0)
    {
      if(a >= numArray[flag])
      {
        const n = Math.floor(a/numArray[flag]);
        const r = a%numArray[flag];
        a = r;
        for (let i=0;i<n;i++)
        {
            romString = romString + romArray[flag];
        }
        flag++;
      }
      else
      {
        flag++;
      }
    }
    result.innerText = romString;
    return;
    
  };

const checkInput = () => {
  if(input.value === ""){
    result.innerText = "Please enter a valid number";
    return;
  }
  else if(input.value <= 0 ){
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  else if(input.value >= 4000){
    result.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  else{
    romanConvert(parseInt(input.value));
    input.value = "";
  }

};

button.addEventListener("click", checkInput);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
      checkInput();
    }
});

