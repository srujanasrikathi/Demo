document.addEventListener('DOMContentLoaded', function() {
    var student_details = [
        { name: "Jyothi", rollNo: 1208, branch: "IT" },
        { name: "Amrutha", rollNo: 1214, branch: "IT" },
        { name: "Priya", rollNo: 1235, branch: "IT" },
    ];

    var showTableButton = document.getElementById("showTableButton");
    var addButton = document.getElementById("addButton");
    var table = document.querySelector(".table");

    if (!table.querySelector("tbody")) {
        table.appendChild(document.createElement("tbody"));
    }
    showTableButton.onclick = function() {
        table.style.display = "table";
        addButton.style.display = "block";
        showTableButton.style.display = "none";
    };

    function createStudentRow(student) {
        var tbody = table.querySelector("tbody");
        var tr = document.createElement("tr");

        var name = document.createElement("td");
        name.innerHTML = student.name;

        var rollNo = document.createElement("td");
        rollNo.innerHTML = student.rollNo;

        var branch = document.createElement("td");
        branch.innerHTML = student.branch;

        var updateCell = document.createElement("td");
        var updateButton = document.createElement("button");
        updateButton.innerHTML = "Update";
        updateButton.onclick = function() {
            updateStudent(this);
        };
        updateCell.appendChild(updateButton);

        var deleteCell = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function() {
            deleteStudent(this);
        };
        deleteCell.appendChild(deleteButton);

        tr.appendChild(name);
        tr.appendChild(rollNo);
        tr.appendChild(branch);
        tr.appendChild(updateCell);
        tr.appendChild(deleteCell);

        tbody.appendChild(tr);
    }

    addButton.onclick = function() {
        var name = prompt("Enter the new student's name:");
        var rollNo = parseInt(prompt("Enter the new student's roll number:"));
        var branch = prompt("Enter the new student's branch:");

        if (!name || isNaN(rollNo) || !branch) {
            alert("Invalid input. Please enter valid details.");
            return;
        }

        var newStudent = {
            name: name,
            rollNo: rollNo,
            branch: branch
        };
        student_details.push(newStudent);
        createStudentRow(newStudent);
    };

    function updateStudent(button) {
        var tr = button.parentNode.parentNode;
        var name = tr.cells[0].innerHTML;
        var rollNo = parseInt(tr.cells[1].innerHTML);
        var branch = tr.cells[2].innerHTML;

        var newName = prompt("Enter new name:", name);
        var newRollNo = parseInt(prompt("Enter new roll number:", rollNo));
        var newBranch = prompt("Enter new branch:", branch);

        student_details.forEach(function(student) {
            if (student.rollNo === rollNo) {
                student.name = newName || name;
                student.rollNo = isNaN(newRollNo) ? rollNo : newRollNo;
                student.branch = newBranch || branch;
            }
        });

        tr.cells[0].innerHTML = newName || name;
        tr.cells[1].innerHTML = isNaN(newRollNo) ? rollNo : newRollNo;
        tr.cells[2].innerHTML = newBranch || branch;
    }

    function deleteStudent(button) {
        var tr = button.parentNode.parentNode;
        var rollNo = parseInt(tr.cells[1].innerHTML);

        student_details = student_details.filter(function(student) {
            return student.rollNo !== rollNo;
        });

        tr.remove();
    }

    student_details.forEach(function(student) {
        createStudentRow(student);
    });
});