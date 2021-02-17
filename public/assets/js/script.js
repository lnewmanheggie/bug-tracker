// create
// $(".description-form").on("submit", (event) => {
//     event.preventDefault();

//     const newIssue = {
//         title: $("#title").val().trim(),
//         bug: $("#desc").val().trim()
//     }

//     $.ajax("api/tracker", {
//         type: "POST",
//         data: newIssue
//     }).then(() => {
//         console.log("HERE")
//         location.reload();
//     })
//         .catch(err => console.log(err))
// })

//update
const item = $(".item");
item.on("click", function (event) {
    let id = ($(this).data("id"));
    $.ajax("api/tracker/" + id, {
        type: "PUT"
    }).then(() => {
        location.reload();
    })
})

// delete
const item2 = $(".item2");
item2.on("click", function (event) {
    let id = ($(this).data("id"));

    $.ajax("api/tracker/" + id, {
        type: "DELETE"
    }).then(() => {
        location.reload();
    })
})


