//  enumFL.js
//  Utility to create an 'enum' on=bject from an array of value names
//  Donald C. Harriman  June 2016

/**
    create enum object for items in valueNames
    adding FIRST and LAST for use in iteration
        for (let ix = eState.FIRST; ix <= eState.LAST; ++ix) {...}
    to allow changing items in valueNames without breaking any existing iteration code

    usage:
    const valueNames = ['APPLE', 'DELL', 'INTEL', 'MICROSOFT'];
    const eValues = enumFL(valueNames);
    results:
    eValues = Object {
        APPLE: 0
        DELL: 1
        FIRST: 0
        INTEL: 2
        LAST: 3
        MICROSOFT: 3
     }

    FIRST has same value as first item in valueNames
    LAST has same value as last item in valueNames
*/

/*  test
    const valueNames = ['APPLE', 'DELL', 'INTEL', 'MICROSOFT'];
    const eTechs = enumFL(valueNames);
//    const eTechs = new EnumFL(valueNames);
    console.log( eTechs );
*/

//  usage:
//  const eType = enumFL(['name1', 'name2', 'name3']);
function enumFL(valueNames) {
    let e = {};
    valueNames.forEach( (elem, index) => {
        e[elem] = index;
//        e[index] = elem; // name from index
     });
    e['FIRST'] = 0;
    e['LAST'] = valueNames.length - 1;
    return Object.freeze(e);
}

/*  constructor version
//  usage:
//  const eType = new EnumFL(['name1', 'name2', 'name3']);
function EnumFL(valueNames) {
    valueNames.forEach( (elem, index) => {this[elem] = index;} );
    this['FIRST'] = 0;
    this['LAST'] = valueNames.length - 1;
    return Object.freeze(this);}

*/