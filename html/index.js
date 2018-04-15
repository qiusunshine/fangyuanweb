function a() {
    var f = $("#search_text").val();
    var e = $.trim(f);
    if (e !== "") {
        window.location.href = "/search?q=" + encodeURI(e) + "&p=1"
    } else {
        $("#search_text").attr("placeholder", "请先在这里输入关键词").focus()
    }
}

$("#search_go").on("click", function () {
    a()
});
$(document).on("keydown", function (e) {
    if (e.keyCode == "13") {
        a()
    }
});