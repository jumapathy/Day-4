//Task-1

//compare two json have the same properties without order


let obj1={name:"person1",age:5};
let obj2={age:5,name:"person1"};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2) );
//other way to compare is.
//console.log(_.isEqual(obj1,obj2));


//Task-2
//display all flags in console using countryAPI

const CountriesRq = new XMLHttpRequest();
CountriesRq.open('get', 'https://restcountries.com/v3.1/all');
CountriesRq.send();
CountriesRq.onload = function () {
    //console.log(CountriesRq.responseText);
    // console.log(JSON.parse(CountriesRq.responseText));
    //using JSON.parse to fetch output as object formate
    const c = JSON.parse(CountriesRq.responseText);
    // to iterate the data using for each assign it to a var;

    c.forEach(function displayinfo(c) {
        console.log("Country Flag : " + c.flag);
    });
}

//Task -3
/*display few more details in console using countryAPICountry 
example:
name :  Caribbean Netherlands 
Region  : Americas
Sub-Region  : Caribbean
population 
*/
CountriesRq.onload = function () {
    const c = JSON.parse(CountriesRq.responseText);

    c.forEach(function displayinfo(c) {
        console.log("Country name : ",c.name.common+  " " + '\n' + "Region  : " + c.region + '\n' + "Sub-Region  : " + c.subregion + '\n' + "population : " + c.population);
    });
}
