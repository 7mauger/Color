//Declare the Color Object with our new keyword below here.
const Color = new Object();
/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let R = (rgb[0]/255*100);
  R = Math.round(R);
  return R;
};

//greenIntensity
Color.greenIntensity = function(rgb){
  let G = (rgb[1]/255*100);
  G = Math.round(G);
  return G;
};

//blueIntensity
Color.blueIntensity = function(rgb){
  let B = (rgb[2]/255*100);
  B = Math.round(B);
  return B;
};

//brightness
Color.brightnessIntensity = function(rgb){
  let bright = (Color.blueIntensity(rgb)+Color.greenIntensity(rgb)+Color.redIntensity(rgb))/3;
  bright = Math.round(bright);
  return bright;
};

//complement
let comp = [];
for(let c=0;c<3;c++){
  comp.push();
}
return comp;
