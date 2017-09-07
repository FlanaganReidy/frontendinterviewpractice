function productsOfAllIntsExceptAtIndex(array){
let newarray =[];
for(let i = 0; i<array.length; i++){
  let product = 1
	for(let k = 0; k<array.length; k++){
		if(k!==i){
		product *= array[k];
	}
		}
   newarray.push(product);
	}
return newarray;
}

productsOfAllIntsExceptAtIndex([1,7,3,4]);
