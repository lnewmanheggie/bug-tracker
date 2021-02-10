// create
$(".description-form").on("submit", (event) => {
    event.preventDefault();

    const newIssue = {
        title: $("#title").val().trim(),
        bug: $("#desc").val().trim()
    }

    $.ajax("api/tracker", {
        type: "POST",
        data: newIssue
    }).then(() => {
        location.reload();
    })
})

//update
const item = $(".item");
item.on("click", function(event) {
    let id = ($(this).data("id"));

    $.ajax("api/tracker/" + id, {
        type: "PUT"
    }).then(() => {
        location.assign("/");
    })
})

// delete
const item2 = $(".item2");
item2.on("click", function(event) {
    let id = ($(this).data("id"));

    $.ajax("api/tracker/" + id, {
        type: "DELETE"
    }).then(() => {
        location.assign("/");
    })
})


