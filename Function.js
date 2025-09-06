function addTwo(num) {
    num.toUpperCase();
    return num + 2;
}
//cant do that
addTwo(5);
function loginUser(name, email, isPaid) {
}
//Can't do that
loginUser("Aayush", "AayushSrivastava444@gmail.com");
function loginUsers(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
//Doable
loginUsers("Aayush", "AayushSrivastava444@gmail.com");
