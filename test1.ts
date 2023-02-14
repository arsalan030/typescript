//Qouestion no 2
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
         var    temp = str[i].slice(1)
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  titleCase("I'm a little tea pot");
  console.log(  titleCase("I'm a little tea pot")
  )


