const Value = 'Const Variable'
let LetValue = 'Let Variable'

LetValue = 'New value'
Value = 'New value'

if(Value === 'New value' || LetValue === 'New value'){
    console.log('this is let can chage variable')
}else{
    console.log('This is const can not change value')
}