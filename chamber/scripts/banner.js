const banner = document.querySelector('#banner');

const d = new Date();
let day = d.getDay();
let bannerdays = [1,2,3]

if (bannerdays.indexOf(day) !=-1){
    banner.classList.add("showbanner");
    banner.classList.remove("hidebanner");
}else{
    banner.classList.add("hidebanner");
    banner.classList.remove("showbanner");
}