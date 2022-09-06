//1108
 // Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP
// address.
// A defanged IP address replaces every period "." with "[.]".
// https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function(address) {
    var result="";
    for(char of address){
        if(char==="."){
            result+="[.]";
        }
        else{
            result+=char;
        }
    }
    return result;
};