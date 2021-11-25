const xml=require('xml');
const fs=require('fs');

const data=[
 {
  policyID: 1,
  policyHolderName: 'Nagendra',
  validity: 'lifetime'
 },
 {
  policyID: 2,
  policyHolderName: 'Venkata',
  validity: 'lifetime'
 },
 {
  policyID: 3,
  policyHolderName: 'Mantina',
  validity: 'lifetime'
 }
];

const xml_data=[
 {
  Message:[
   {_attr: {from: 'Samsung', sent:'20-20-21', sequenceId:1}},
   {
    contractInsurances:[

    ]
   }
  ]
 }
];
data.forEach(d=>{
 const contractInsurance=[];
 Object.keys(d).forEach(k=>{
  contractInsurance.push({[k]:d[k]});
 });
 xml_data[0].Message[1].contractInsurances.push({contractInsurance});
})

var xmlContnet=xml(xml_data, { declaration: true, indent: true});
console.log(xmlContnet);
fs.writeFile('samplefile.xml',xmlContnet,(e,r)=>{
 if(e) return console.error(e);
 console.log(`file created`);
 console.log(r);
});