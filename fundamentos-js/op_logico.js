//    || = OU    && = e  ^ = ou exclusivo
function compras(t1,t2) {
    const comprarSorvete = t1 || t2;
    const comprarTv  = t1 && t2;
    const comprarTv32  = t1 != t2;
    const manterSaudavel = !comprarSorvete;
    return { comprarSorvete, comprarTv, comprarTv32,manterSaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
