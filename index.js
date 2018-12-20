#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

const cardContent = chalk`
{bold.blue Markus Ende}
Front End Engineer and Consultant as Freelancer

    {bold Web}: https://markusende.de/
    {bold Twitter}: https://twitter.com/_der_markusende
    {bold Xing}: https://www.xing.com/profile/Markus_Ende
`;

console.log(
  boxen(cardContent, {
    padding: 1,
    margin: 2,
    float: 'center',
    borderStyle: 'round',
    borderColor: 'blue'
  })
);
