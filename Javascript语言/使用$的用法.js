function add(a,b){
    return a+b;
}
var $ = function(a,b)
{
    return add(a,b);
};
console.log($(3,4));
//$()   等价于   add()