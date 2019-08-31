window.addEventListener("load", getForm,);

function getForm() {
    let form = document.getElementById("form-wrapper");
    let close = document.getElementById("close");
    let closeArrow = document.getElementById("arrow-button");

    close.onclick = closeForm;
    let flag = true;
    closeArrow.onclick = function () {
        if(flag || form.style.display ==="none"){
            showForm();
        }
        else{
            closeForm();
        }
        flag = !flag;
    };

    function closeForm() {
        form.style.display = "none";
    }
    function showForm() {
        form.style.display = "flex";
    }
}