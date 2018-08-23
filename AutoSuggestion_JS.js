var indexOfList = 0;

function displayOnEnterPress(nameOnEnter) {
    document.getElementById("input").value = nameOnEnter;
    document.getElementById("suggestion").innerHTML = "";
}

function Search(evt) {
    document.getElementById("suggestion").innerHTML = "";
    document.getElementById("crossButton").style.display = "none";
    var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
    names.sort();
    var countOfCharMatching = 0;
    var isCharPresent = "", listData = "";
    var currentArrayName = "";
    var inputBox = document.getElementById("input").value;
    var initialSuggestions = "", countOfElementsInList = 0;
    if (inputBox.length > 0) {

        for (i = 0; i < names.length; i++) {
            document.getElementById("crossButton").style.display = "block";
            currentArrayName = names[i].toUpperCase();
            currentInputBoxValue = inputBox.toUpperCase();

            if (inputBox.length > 0)
                isCharPresent = currentArrayName.includes(currentInputBoxValue);

            if (isCharPresent === true) {
                countOfCharMatching = countOfCharMatching + 1;
                if (countOfCharMatching == 1) {
                    listData = "<li id='" + countOfCharMatching + "' class='selected' onclick='clickOnList(this.innerHTML)' >" + names[i] + "</li>";
                    countOfElementsInList += 1;
                }
                else {
                    listData = "<li id='" + countOfCharMatching + "' class='unselected' onclick='clickOnList(this.innerHTML)'>" + names[i] + "</li>";
                    countOfElementsInList += 1;
                }
                document.getElementById("suggestion").innerHTML = initialSuggestions + listData;
                initialSuggestions = document.getElementById("suggestion").innerHTML;
            }
        }
        if (document.getElementById("suggestion").innerHTML.length == "") {
            document.getElementById("suggestion").innerHTML = "No suggestions ";
        }
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        var initialSuggestions = document.getElementById("suggestion");
        var listItems = initialSuggestions.getElementsByTagName("LI");

        if (charCode == 40) {

            listItems[0].className = "unselected";
            indexOfList += 1;
            if (countOfElementsInList <= indexOfList)
                indexOfList = listItems.length - 1;
            listItems[indexOfList].className = "selected";
            if (indexOfList >= 5) {
                document.getElementById("suggestion").scrollBy(0, 28);
            }
        }

        if (charCode == 38) {


            listItems[0].className = "unselected";
            indexOfList -= 1;

            if (0 >= indexOfList)
                indexOfList = 0;
            listItems[indexOfList].className = "selected";
            document.getElementById("suggestion").scrollBy(0, -28);

        }
        if (charCode == 13) {
            displayOnEnterPress(listItems[indexOfList].innerHTML);
        }

        console.log(listItems);
    }
}

function clickOnList(valueOfList) {
    document.getElementById("input").value = valueOfList;
    document.getElementById("suggestion").innerHTML = "";
}

function goOnPage() {
    if (document.activeElement.id != "input") {
        document.getElementById("suggestion").style.display = "none";
    }
    else {
        document.getElementById("suggestion").style.display = "block";
    }
}

function crossFunctionality() {
    document.getElementById("input").value = "";
    document.getElementById("suggestion").innerHTML = "";
}

