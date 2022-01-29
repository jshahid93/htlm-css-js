var names = new Array();

names [0]="Rachel Green";
names [1]="Monica Geller";
names [2]="Joey Tribbiani";
names [3]="Phoebe Buffay";
names [4]="Chandler Bing";
names [5]="Rose Geller";
names [6]="Janice Hosenstein";
names [7]="Gunther";
names [8]="Mike Hannigan";
names [9]="Emily Waltham";


for (var i=0; i < names.length; i++) {
if (names [i].charAt(0)==="J" || names[i].charAt(0)==="j"){
    console.log("Goodbye "  + names[i])
}
else {
    console.log("Hello "+ names[i])
}
}
