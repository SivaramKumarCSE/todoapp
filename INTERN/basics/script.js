function addTask() {
    var task = document.getElementById("task-input").value
    // console.log(task);
    var taskItem = document.createElement("div")
    taskItem.textContent = task
    taskItem.className="border border-gray-700 bg-gray-300 rounded-lg px-5 "
    document.getElementById('task-list').appendChild(taskItem)
}