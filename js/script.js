const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1:
const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

// Question 2:
let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3:
heading.style.fontSize = "2em";

// Question 4:
heading.className = "subheading";

// Question 5:
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function(p) {
    p.style.color = "red";
})

// Question 6:
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>"

// Question 7:
function myFunction(list) {
    list.forEach(function(cat) {
        console.log(cat.name)
    })
}

myFunction(cats);

// Question 8:
function createCats(cats) {
    let html = "";
    
    cats.forEach(function(cat) {
        let catName = cat.name;
        
        if (cat.age) {
            var catAge = cat.age;
        }
        else {
            var catAge = "Age unknown";
        }
        html = html + `<div><h5>${catName}</h5>
        <p>${catAge}</p></div>`;
    })
    return html;
}

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);