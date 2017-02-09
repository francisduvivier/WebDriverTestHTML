var eventNameList=["click","mousedown","mouseup","mousemove", "touchcancel", "touchstart", "touchmove","touchend"];
var lastEvent;
for( i in eventNameList){
    console.log('adding eventListener to window for '+ eventNameList[i]);

    window.addEventListener(eventNameList[i],handleEvent,true);
}

function handleEvent (e) {
    lastEvent=e;
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log(' event: '+JSON.stringify(e.type)+ ' captured: clientX ['+mouseX+'] clientY ['+ mouseY+ ']');

}
