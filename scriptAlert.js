var i=0;
for(alertNb = 0; alertNb<3;alertNb++){

    alertText=alertNb;
    console.log("making alert "+ alertNb);
    setTimeout(function () {
    alert('Test Alert'+i++);
},1000*i);}