window.onload = function () {

    //맵전체 배열
    var mapImgs = ["erangel", "mirama", "sanok"];

    //미니맵 변수
    var miniMap = document.querySelector(".miniImg");

    //맵이름 변수
    var mapName = document.querySelector(".mapName");

    //버튼 선택자로
    var mapSelect1 = document.querySelector(".mapSelect1");
    var mapSelect2 = document.querySelector(".mapSelect2");
    var mapSelect3 = document.querySelector(".mapSelect3");


    var mapBtn1 = document.querySelector(".mapBtn1");
    var mapBtn2 = document.querySelector(".mapBtn2");
    var mapBtn3 = document.querySelector(".mapBtn3");

    var map1;
    var map2;
    var map3;

    //에란겔 이미지 배열
    var ImgArr = [];

    //맵이미지 변수
    var mapImg = document.querySelector(".mapImg");



    //에란겔 선택시
    mapSelect1.onclick = function (e) {
        e.preventDefault();
        map1 = document.querySelector(".map1");
        map2 = document.querySelector(".map2");
        map3 = document.querySelector(".map3");

        mapName.innerText = "Erangel";
        miniMap.src = "images/" + mapImgs[0] + ".png";
        ImgArr = ["gatka", "georgopol", "Rozhok"];
        mapImg.src = "images/" + ImgArr[0] + ".png";
        map1.src = "images/" + ImgArr[0] + ".png";
        map2.src = "images/" + ImgArr[1] + ".png";
        map3.src = "images/" + ImgArr[2] + ".png";

        map1.onclick = function (e) {
            e.preventDefault();
            mapImg.src = map1.src;
        }

        map2.onclick = function (e) {
            e.preventDefault();
            mapImg.src = map2.src;
        }

        map3.onclick = function (e) {
            e.preventDefault();
            mapImg.src = map3.src;
        }


    }


    //미라마 선택시
    mapSelect2.onclick = function (e) {
        e.preventDefault();
        map1 = document.querySelector(".map1");
        map2 = document.querySelector(".map2");
        map3 = document.querySelector(".map3");
        mapName.innerText = "Mirama";
        miniMap.src = "images/" + mapImgs[1] + ".png";
        ImgArr = ["LaCobreria", "ElPozo", "Alcantara"];
        mapImg.src = "images/" + ImgArr[0] + ".png";
        map1.src = "images/" + ImgArr[0] + ".png";
        map2.src = "images/" + ImgArr[1] + ".png";
        map3.src = "images/" + ImgArr[2] + ".png";

        map1.onclick = function (e) {
            e.preventDefault();
            mapImg.src = map1.src;
        }

        map2.onclick = function (e) {
            e.preventDefault();
            mapImg.src = map2.src;
        }

        map3.onclick = function (e) {
            e.preventDefault();
            mapImg.src = map3.src;
        }
    }


    //사녹 선택시
    mapSelect3.onclick = function (e) {
        e.preventDefault();
        map1 = document.querySelector(".map1");
        map2 = document.querySelector(".map2");
        map3 = document.querySelector(".map3");
        mapName.innerText = "Sanok";
        miniMap.src = "images/" + mapImgs[2] + ".png";
        ImgArr = ["Ruins", "Sahmee", "Bootcamp"];
        mapImg.src = "images/" + ImgArr[0] + ".png";
        map1.src = "images/" + ImgArr[0] + ".png";
        map2.src = "images/" + ImgArr[1] + ".png";
        map3.src = "images/" + ImgArr[2] + ".png";

        map1.onclick = function (e) {
            e.preventDefault();
            mapImg.src = map1.src;
        }

        map2.onclick = function (e) {
            e.preventDefault();
            mapImg.src = map2.src;
        }

        map3.onclick = function (e) {
            e.preventDefault();
            mapImg.src = map3.src;
        }

    }


    mapSelect1.click();



    //총기류
    var weapons = [];

    var weaponImg = document.querySelector(".weaponImg");

    var weaponBtn1 = document.querySelector(".weaponBtn1");
    var weaponBtn2 = document.querySelector(".weaponBtn2");
    var weaponBtn3 = document.querySelector(".weaponBtn3");

    var weaponList = document.querySelector(".weaponList");

    var dmg = document.querySelector(".dmg");
    var speed = document.querySelector(".speed");
    var power = document.querySelector(".power");
    var size = document.querySelector(".size");

    //    var subBtn1 = document.querySelector(".subBtn1");
    //    var subBtn2 = document.querySelector(".subBtn2");
    //    var subBtn3 = document.querySelector(".subBtn3");
    //    var subBtn4 = document.querySelector(".subBtn4");
    var subBtn1;
    var subBtn2;
    var subBtn3;
    var subBtn4;
    var subBtn5;
    var subBtn6;
    var subBtn7;
    var subBtn8;

    var colorSrc;

    var makeList = "";
    var i;
    weaponBtn1.onclick = function (e) {
        e.preventDefault();
        weapons = ["M416", "M16A", "G36C", "AKM", "Beryl", "AUG", "SCAR", "Groza"];

        for (i = 0; i < weapons.length; i++) {
            if (i === 0) {
                makeList = "<li class=\"color\"><a href=\"#\" class=\"subBtn" + (i + 1) + "\">" + weapons[i] + "</a></li>";
            } else {
                makeList += "<li  class=\"color\"><a href=\"#\" class=\"subBtn" + (i + 1) + "\">" + weapons[i] + "</a></li>";
            }
        }
        console.log(makeList);
        weaponList.innerHTML = makeList;
        makeList = null;

        subBtn1 = document.querySelector(".subBtn1");
        subBtn2 = document.querySelector(".subBtn2");
        subBtn3 = document.querySelector(".subBtn3");
        subBtn4 = document.querySelector(".subBtn4");
        subBtn5 = document.querySelector(".subBtn5");
        subBtn6 = document.querySelector(".subBtn6");
        subBtn7 = document.querySelector(".subBtn7");
        subBtn8 = document.querySelector(".subBtn8");

        colorSrc = document.getElementsByClassName("color");


        //각 총 버튼 스탯 변화 및 이미지 전환
        subBtn1.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "43";
            speed.innerText = "880m/s";
            power.innerText = "3500";
            size.innerText = "5.56mm";
            weaponImg.src = "images/" + weapons[0] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn1.parentNode.style.background = "#f8aa20";
        }

        subBtn2.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "43";
            speed.innerText = "900m/s";
            power.innerText = "8000";
            size.innerText = "5.56mm";
            weaponImg.src = "images/" + weapons[1] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn2.parentNode.style.background = "#f8aa20";

        }

        subBtn3.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "43";
            speed.innerText = "870m/s";
            power.innerText = "7000";
            size.innerText = "5.56mm";
            weaponImg.src = "images/" + weapons[2] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn3.parentNode.style.background = "#f8aa20";

        }

        subBtn4.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "49";
            speed.innerText = "715m/s";
            power.innerText = "10000";
            size.innerText = "7.62mm";
            weaponImg.src = "images/" + weapons[3] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn4.parentNode.style.background = "#f8aa20";
        }

        subBtn5.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "47";
            speed.innerText = "710m/s";
            power.innerText = "10000";
            size.innerText = "7.62mm";
            weaponImg.src = "images/" + weapons[4] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn5.parentNode.style.background = "#f8aa20";

        }

        subBtn6.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "43";
            speed.innerText = "940m/s";
            power.innerText = "9000";
            size.innerText = "5.56mm";
            weaponImg.src = "images/" + weapons[5] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn6.parentNode.style.background = "#f8aa20";

        }

        subBtn7.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "43";
            speed.innerText = "870m/s";
            power.innerText = "9000";
            size.innerText = "5.56mm";
            weaponImg.src = "images/" + weapons[6] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn7.parentNode.style.background = "#f8aa20";

        }

        subBtn8.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "49";
            speed.innerText = "715m/s";
            power.innerText = "10000";
            size.innerText = "7.62mm";
            weaponImg.src = "images/" + weapons[7] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn8.parentNode.style.background = "#f8aa20";

        }

        //1번째 총 보여주기
        subBtn1.click();

    }

    weaponBtn2.onclick = function (e) {
        e.preventDefault();
        weapons = ["Kar98", "M24", "AWM", "Win94", "MK14", "SLR", "SKS", "Mini14"];

        for (i = 0; i < weapons.length; i++) {
            if (i === 0) {
                makeList = "<li class=\"color\"><a href=\"#\" class=\"subBtn" + (i + 1) + "\">" + weapons[i] + "</a></li>";
            } else {
                makeList += "<li class=\"color\"><a href=\"#\" class=\"subBtn" + (i + 1) + "\">" + weapons[i] + "</a></li>";
            }
        }
        console.log(makeList);
        weaponList.innerHTML = makeList;
        makeList = null;

        subBtn1 = document.querySelector(".subBtn1");
        subBtn2 = document.querySelector(".subBtn2");
        subBtn3 = document.querySelector(".subBtn3");
        subBtn4 = document.querySelector(".subBtn4");
        subBtn5 = document.querySelector(".subBtn5");
        subBtn6 = document.querySelector(".subBtn6");
        subBtn7 = document.querySelector(".subBtn7");
        subBtn8 = document.querySelector(".subBtn8");

        colorSrc = document.getElementsByClassName("color");

        //각 총 버튼 스탯 변화 및 이미지 전환
        subBtn1.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "75";
            speed.innerText = "760m/s";
            power.innerText = "16000";
            size.innerText = "7.62mm";
            weaponImg.src = "images/" + weapons[0] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn1.parentNode.style.background = "#f8aa20";

        }

        subBtn2.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "79";
            speed.innerText = "790m/s";
            power.innerText = "20000";
            size.innerText = "7.62mm";
            weaponImg.src = "images/" + weapons[1] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn2.parentNode.style.background = "#f8aa20";

        }

        subBtn3.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "105";
            speed.innerText = "945m/s";
            power.innerText = "40000";
            size.innerText = ".300Magnum";
            weaponImg.src = "images/" + weapons[2] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn3.parentNode.style.background = "#f8aa20";

        }

        subBtn4.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "66";
            speed.innerText = "760m/s";
            power.innerText = "16000";
            size.innerText = ".45ACP";
            weaponImg.src = "images/" + weapons[3] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn4.parentNode.style.background = "#f8aa20";

        }

        subBtn5.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "61";
            speed.innerText = "853m/s";
            power.innerText = "20000";
            size.innerText = "7.62mm";
            weaponImg.src = "images/" + weapons[4] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn5.parentNode.style.background = "#f8aa20";

        }

        subBtn6.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "58";
            speed.innerText = "840m/s";
            power.innerText = "20000";
            size.innerText = "7.62mm";
            weaponImg.src = "images/" + weapons[5] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn6.parentNode.style.background = "#f8aa20";

        }

        subBtn7.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "53";
            speed.innerText = "800m/s";
            power.innerText = "2000";
            size.innerText = "7.62mm";
            weaponImg.src = "images/" + weapons[6] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn7.parentNode.style.background = "#f8aa20";
        }

        subBtn8.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "46";
            speed.innerText = "990m/s";
            power.innerText = "10000";
            size.innerText = "5.56mm";
            weaponImg.src = "images/" + weapons[7] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn8.parentNode.style.background = "#f8aa20";
        }

        //1번째 총 보여주기
        subBtn1.click();
    }

    weaponBtn3.onclick = function (e) {
        e.preventDefault();
        weapons = ["Vector", "UZI", "UMP45", "M249", "VSS", "S686", "S12K", "S1897"];

        for (i = 0; i < weapons.length; i++) {
            if (i === 0) {
                makeList = "<li class=\"color\"><a href=\"#\" class=\"subBtn" + (i + 1) + "\">" + weapons[i] + "</a></li>";
            } else {
                makeList += "<li class=\"color\"><a href=\"#\" class=\"subBtn" + (i + 1) + "\">" + weapons[i] + "</a></li>";
            }
        }
        console.log(makeList);
        weaponList.innerHTML = makeList;
        makeList = null;

        subBtn1 = document.querySelector(".subBtn1");
        subBtn2 = document.querySelector(".subBtn2");
        subBtn3 = document.querySelector(".subBtn3");
        subBtn4 = document.querySelector(".subBtn4");
        subBtn5 = document.querySelector(".subBtn5");
        subBtn6 = document.querySelector(".subBtn6");
        subBtn7 = document.querySelector(".subBtn7");
        subBtn8 = document.querySelector(".subBtn8");

        colorSrc = document.getElementsByClassName("color");

        //각 총 버튼 스탯 변화 및 이미지 전환
        subBtn1.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "31";
            speed.innerText = "300m/s";
            power.innerText = "7000";
            size.innerText = "9mm";
            weaponImg.src = "images/" + weapons[0] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn1.parentNode.style.background = "#f8aa20";
        }

        subBtn2.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "26";
            speed.innerText = "350m/s";
            power.innerText = "5000";
            size.innerText = "9mm";
            weaponImg.src = "images/" + weapons[1] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn2.parentNode.style.background = "#f8aa20";

        }

        subBtn3.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "39";
            speed.innerText = "400m/s";
            power.innerText = "7000";
            size.innerText = ".45ACP";
            weaponImg.src = "images/" + weapons[2] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn3.parentNode.style.background = "#f8aa20";
        }

        subBtn4.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "45";
            speed.innerText = "915m/s";
            power.innerText = "10000";
            size.innerText = "5.56mm";
            weaponImg.src = "images/" + weapons[3] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn4.parentNode.style.background = "#f8aa20";
        }

        subBtn5.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "41";
            speed.innerText = "330m/s";
            power.innerText = "20000";
            size.innerText = "9mm";
            weaponImg.src = "images/" + weapons[4] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn5.parentNode.style.background = "#f8aa20";
        }

        subBtn6.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "216";
            speed.innerText = "370m/s";
            power.innerText = "5000";
            size.innerText = "12Guage";
            weaponImg.src = "images/" + weapons[5] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn6.parentNode.style.background = "#f8aa20";
        }

        subBtn7.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "198";
            speed.innerText = "350m/s";
            power.innerText = "5000";
            size.innerText = "12Guage";
            weaponImg.src = "images/" + weapons[6] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn7.parentNode.style.background = "#f8aa20";
        }

        subBtn8.onclick = function (e) {
            e.preventDefault();
            dmg.innerText = "216";
            speed.innerText = "360m/s";
            power.innerText = "5000";
            size.innerText = "12Guage";
            weaponImg.src = "images/" + weapons[7] + ".png";
            for (i = 0; i < weapons.length; i++) {
                colorSrc[i].style.background = "white";
            }
            subBtn8.parentNode.style.background = "#f8aa20";

        }

        //1번째 총 보여주기
        subBtn1.click();
    }

    //초기 설정
    weaponBtn1.click();






}
