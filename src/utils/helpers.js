// input a int number
// return "$7,000" ero, cad ,.... 
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const formatPrice = (amount) => {
  return formatter.format(amount)
}
// get categories to display 
export const getUniqueValues = (data, type) => {
  let res=[]
  if (type === "category") {
    data.forEach(i => {
      res.push(i["category"])
    });

  }
  if (type === "company") {
    data.forEach(i => {
      res.push(i["company"])
    });

  }
  if (type === "colors") {
    data.forEach(i => {
      res.push(...i["colors"])
    });

  }
  if (type === "price") {
    data.forEach(i => {
      res.push(i["price"])
    });
    return Math.max(...res)/100

  }


  return ["all",...new Set(res)]




}
