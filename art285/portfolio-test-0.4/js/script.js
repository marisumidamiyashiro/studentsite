document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".site-nav li");

    listItems.forEach((listItem) => {
        console.log("please work")
        listItem.addEventListener("click", () => {
            console.log("hello")
            listItems.forEach((otherItem) => {
                otherItem.classList.remove('active')
            })
            listItem.classList.add('active')
        });
    });
});
