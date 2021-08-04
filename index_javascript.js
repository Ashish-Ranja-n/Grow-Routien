  var d = new Date().getDay()
     let day;
     switch  (new Date().getDay()) {
         case 0:
           day="SUNDAY, don't waste it!";
            break;
         case 1:
           day="MONDAY!";
           break;
         case 2:
            day="TUESDAY!";
          break;
         case 3:
            day="WEDNESDAY!";
           break;
         case 4:
            day="THRUSDAY!";
          break;
        case 5:
           day="FRIDAY!";
          break;
        case 6:
           day="SATURDAY!";
          } 
          document.getElementById("demo").innerHTML= "Today is " + day;
     
 if (d == 3) {
             document.getElementById("r3").classList.add("day");
                }
         
