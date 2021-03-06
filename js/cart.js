window.onload = function () {
    checkBox();
    deleteFn();
}

//复选框
var checkBox = function () {
    var checkBoxList = document.getElementsByClassName("jd_check_box");
    for (var i = 0; i < checkBoxList.length; i ++) {
        checkBoxList[i].onclick = function () {
            var hasChecked = this.getAttribute("checked");
            if (hasChecked !== null) {
                this.removeAttribute("checked");
            }else {
                this.setAttribute("checked", "");
            }
        }
    }
}

//删除
var deleteFn = function () {
    //删除按钮数组
    var deleteList = document.getElementsByClassName("delete_box");

    //弹出层
    var win = document.getElementsByClassName("jd_win")[0];
    //弹出层的子盒子
    var winBox = document.getElementsByClassName("jd_win_box")[0];
    var up;
    for (var i = 0; i < deleteList.length; i ++) {
        deleteList[i].onclick = function () {
            win.style.display = "block";
            winBox.className = "jd_win_box jumpOut";

            var deleteObj = this;
            up = deleteObj.getElementsByClassName("delete_box_top")[0];
            up.style.transition = "all 1s ease 0s";
            up.style.webkitTransition = "all 1s ease 0s";

            up.style.transform = "translateY(-5px) translateX(-4px) rotate(-45deg)";
            up.style.webkitTransform = "translateY(-5px) translateX(-4px) rotate(-45deg)";
        }
    }
    winBox.getElementsByClassName("cancel")[0].onclick = function () {
        win.style.display = "none";
        winBox.className = "jd_win_box";
        if (up) {
            up.style.transform = "translateY(0) translateX(0) rotate(0deg)";
            up.style.webkitTransform = "translateY(0) translateX(0) rotate(0deg)";
        }
    }
}
