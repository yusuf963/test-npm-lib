// import {shadowbox}  from 'y-shadow-box'
import {shadowbox, randomNumber,validateEmail, validatePassword} from './ttest'
shadowbox({
    shadow_type: 'soft',
    shadow_color: 'rgba(3,34,23,0.7)',
    padding: true
})


const name  = ['ssssara', 'john', 'Yusuf', 1234]
console.log(name[randomNumber(0,name.length-1)])

console.log(validatePassword('A1va/-v'))
console.log(validateEmail('@mohammads@54gmail.org1'))