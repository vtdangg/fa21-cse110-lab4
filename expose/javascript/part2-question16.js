for (let property in statistics) {
    if (statistics.property.startsWith('r')){
        console.log(statistics.property);
    }
    else if (statistics.property%2 == 1){
        console.log(statistics.property);
    }
}