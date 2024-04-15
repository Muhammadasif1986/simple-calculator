#! /usr/bin/env node

import inquirer from "inquirer";

let answers = await inquirer.prompt(
    [
    {message: 'Enter First Number',
    type: 'number',
    name: 'firstNumber'},

    {message: 'Enter Second Number',
    type: 'number',
    name: 'secondNumber'},

    {
        message: 'select one operator to perform operation',
        type: 'list',
        name: 'operator',
        choices: ['Addition','subtraction','Mutiplication','Division'],

    },
]
)

if(answers.operator==='Addition'){
    console.log(answers.firstNumber + answers.secondNumber);}

else if(answers.operator==='subtraction'){
    console.log(answers.firstNumber - answers.secondNumber);}

else if(answers.operator==='Mutiplication'){
     console.log(answers.firstNumber * answers.secondNumber);}

else if(answers.operator==='Division'){
    console.log(answers.firstNumber / answers.secondNumber);}

    else{
        console.log('invalid input');
    }