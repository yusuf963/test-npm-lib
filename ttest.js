const shadowbox = (options) => {
    let images = document.querySelectorAll('.shadowbox')
  // add shadow type
    if (options.shadow_type === 'hard') {
      options.shadow_type = '0px'
    } else {
      options.shadow_type = '15px'
    }
    //change color
    if (!options.shadow_color) {
      options.shadow_color = 'rgba(0,0,0,0.3)'
    } else {
      options.shadow_color = options.shadow_color
    }
    // loop over elements
    images.forEach(image => {
      image.style.boxShadow = `10px 10px ${options.shadow_type} 1px ${options.shadow_color}`
  // padding
      if (options.padding) {
        image.style.padding = '1em'
      }
      // margin
      if (!options.margin) {
        image.style.margin = 0
      } else if (options.margin === true) {
        image.style.margin = '1em'
      }
      else {
        image.style.margin = image.style.margin
      }
    })
  }
  
  
  // generate a random integer equal or greater than zero
  const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
  }
  // console.log(arr[randomNumber(0,arr.length-1)])
  // validate password in put
 const validatePassword = (password) => {
  if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,24}$/.test(password)) {
   return true
  }else{
    return false
  }
}
// validate email in put
const validateEmail = (email) => {
  if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/.test(email)) {
   return true
  }else{
    return false
  }
  }

  
//module.exports.shadowbox = shadowbox
module.exports ={
  shadowbox,
  randomNumber,
  validateEmail,
  validatePassword
}