export const H5 = function (fn) {
    // #ifdef H5
    fn();
    // #endif
}
export const APP = function (fn) {
    // #ifdef APP-PLUS
    fn();
    // #endif
}
export const applets = function (fn) {
    // #ifdef MP
    fn();
    // #endif
}