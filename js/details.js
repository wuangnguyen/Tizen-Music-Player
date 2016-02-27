function findNextTabStop(el) {
    var universe = document.querySelectorAll('input, button, select, textarea, a[href], li');
    var list = Array.prototype.filter.call(universe, function(item) {
        return item.tabIndex >= "0" });
    var index = list.indexOf(el);
    return list[index + 1] || list[0];
}

function findPreviousTabStop(el) {
    var universe = document.querySelectorAll('input, button, select, textarea, a[href], li');
    var list = Array.prototype.filter.call(universe, function(item) {
        return item.tabIndex >= "0" });
    var index = list.indexOf(el);
    return list[index - 1] || list[list.length - 1];
}
$(document).ready(function(){
    $(document).on('keydown', function(e) {
       var activeNode = document.activeElement;
        switch (e.which) {
            case 39:
            case 40:
                findNextTabStop(activeNode).focus();
                break;
            case 37:
            case 38:
                findPreviousTabStop(activeNode).focus();
                break;
            case 13:
                activeNode.click();
                break;
        }
    });
});