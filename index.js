const xml=require('xml');
const fs=require('fs');
var example4 = [ 
 { 
  toys: [ 
   { _attr: { decade: '80s', locale: 'US'} }, 
   { toy: 'Transformers' } , 
   { toy: 'GI Joe' }, 
   { toy: 'He-man' } 
  ],
 },
 {
  cars: [
   { 
    sedan: [
     {model: 'swift'},
     {model: 'amaze' }
    ]
   }, 
   { xuv: 'mahindra700' } 
  ]
 } 
];
var xmlContnet=xml(example4, { declaration: true, indent: true});
console.log(xmlContnet);
fs.writeFile('samplefile.xml',xmlContnet,(e,r)=>{
 if(e) return console.error(e);
 console.log(`file created`);
 console.log(r);
});