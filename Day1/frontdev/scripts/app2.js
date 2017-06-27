/**
 * Created by Gabriel.Tabus on 6/27/2017.
 */
var facts = [
"Chuck Norris threw a grenade and killed 50 people, then it exploded.",
"Chuck Norris counted to infinity. Twice.",
"Chuck Norris can kill two stones with one bird.",
"Chuck Norris can hear sign language."
];

function showImage()
{
    var myTable='<button id="show-funny-message" style="display:none;">'+
    "<img src="resources/chuck.jpg" alt="Chuck" style="width:304px;height:228px;">"+
    '</button>';
    var container = document.getElementById('C');
    container.innerHTML = myTable;
}
