const solution =(num_list) =>{
    var odd_num = num_list.filter((num)=>num%2===1).length;
    var even_num = num_list.length - odd_num;
    
    return [even_num, odd_num];
}