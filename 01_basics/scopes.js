 
 //var c= 300
 let a = 300
  if (true){ // block scope
    let a = 10
    const b = 20
    //console.log("Inner:", a );
    
  }

  console.log(a);
  //console.log(b);
  //console.log(c);

  function one() {
    const username ="hitesh"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

    two()
    
  }

  //one()

  if (true) {
    const username ="hitesh"
    if (username === "hitesh") {
        const website = "youtube"
        console.log( username + website);
        
    }
    //console.log(website);
    
  }

  //console.log(username);
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Intresting
  addOne(2)
  function addOne(num){
        return num + 1
  }

  
  addTwo(5)// here function is being accessed before Declaration hence this is not allowed.
  const addTwo = function(num){ // Declaration
  }

  


  




  
  
  
