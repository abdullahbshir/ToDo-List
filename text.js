document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.querySelector('.searchInput');
    var searchResults = document.querySelector('.entered-texts');
    var returnArea = document.querySelector('.return'); // Selecting the return div
    var clearAllButton = document.getElementById('clearAllButton');
    var clearEnteredTextsButton = document.getElementById('clearEnteredTexts');

    // Event listener for entering text and pressing Enter
    searchInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) { // Enter key
            var searchText = searchInput.value.trim();
            if (searchText !== '') { 
                var resultItem = document.createElement('div');
                resultItem.textContent = searchText;

                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', function() {
                    resultItem.remove();
                });

                var rightButton = document.createElement('button');
                rightButton.textContent = 'Right';
                rightButton.addEventListener('click', function() {
                    returnArea.appendChild(resultItem);
                    resultItem.removeChild(deleteButton);
                    resultItem.removeChild(rightButton);
                });

                resultItem.appendChild(deleteButton);
                resultItem.appendChild(rightButton);
                searchResults.appendChild(resultItem);
                searchInput.value = ''; 
            }
        }
    });

    // Clear all completed tasks
    clearAllButton.addEventListener('click', function() {
        while (returnArea.lastElementChild !== clearAllButton) {
            returnArea.removeChild(returnArea.lastElementChild);
        }
    });

    // Clear all entered to-do tasks
    clearEnteredTextsButton.addEventListener('click', function() {
        while (searchResults.lastElementChild) {
            searchResults.removeChild(searchResults.lastElementChild);
        }
    });
});
