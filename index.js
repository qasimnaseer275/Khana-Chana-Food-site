document.getElementById("#disc").style.display="none";
function showdiv() {
    document.getElementById("#disc").style.display="block";
}
function inre() {
    var quantity = document.getElementById("quan");
    var inc_number = quantity.innerHTML;
    inc_number++;
    var t_q = quantity.innerHTML = inc_number;

    var pro_price = document.getElementById("price");
    var pro_price1 = pro_price.innerHTML;
    var t_fp = pro_price1 * t_q+0.15;
    var t_ffp = t_fp;
    var t_price = document.getElementById("total").innerHTML= t_ffp.toFixed(2);

    var subtotal = document.getElementById("sub-total");
    var sub_total = subtotal.innerHTML;
    var su_total = t_price + sub_total;
    document.getElementById("sub-total").innerHTML = parseFloat(su_total).toFixed(2);
 
}
function decre() {
    var quantity = document.getElementById("quan");
    var decre_number = quantity.innerHTML;
    if( decre_number > 0){
        decre_number--;
        var d = quantity.innerHTML = decre_number;
        
        var pro_price = document.getElementById("price");
        var pro_price1 = pro_price.innerHTML;
        var t_fp = pro_price1 * d+0.15;
        var s_total = document.getElementById("total").innerHTML= t_fp.toFixed(2);

        var subtotal = document.getElementById("sub-total");
        var sub_total = subtotal.innerHTML;
        var su_total = s_total + sub_total;
        document.getElementById("sub-total").innerHTML = parseFloat(su_total).toFixed(2);
    }else{
        quantity.innerHTML = decre_number;
    }
}
