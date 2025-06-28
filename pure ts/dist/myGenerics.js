"use strict";
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
const bottle = { type: 1, name: "pragati" };
identityFour(bottle);
//generic used in arrays and arrow functions
function login(val) {
    return val[3];
}
function getMoreProducts(products) {
    return products[4];
}
const getProducts = (val) => {
    return val[5];
};
