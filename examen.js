var suivant = document.getElementById('suivant');
var precedent = document.getElementById('precedent');
var soummetre = document.getElementById('soummetre');
var commencer = document.getElementById('commencer');
var monImage = document.getElementById('monImage');
var couvImage = document.getElementById('couvImage');
var div = document.getElementById('div1');
var pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var numPage = pageList[0];
var type = monImage.className;
var checkboxArray = document.querySelectorAll('input[type=checkbox]');
var answers = [];

commencer.addEventListener("click", commencerTest);
suivant.addEventListener("click", pageSuivante)
precedent.addEventListener("click", pagePrecedente);
soummetre.addEventListener("click", soummetreTest);

function commencerTest() {
    precedent.toggleAttribute('disabled')
    div.style.display = "block";
    commencer.style.display = "none";
    suivant.style.display = "inline-block";
    precedent.style.display = "inline-block";
    soummetre.style.display = "none";
    couvImage.style.display = "none";
    monImage.style.display = "block";
}
function pageSuivante() {
    getAnswers();
    resetCheckboxes();
    numPage++; //25
    precedent.removeAttribute('disabled');
    if (pageList.includes(numPage)) {
        var source = "./img/"+type+"/"+type+"-"+numPage+".jpg" ;
        monImage.setAttribute("src", source);

        if (!(pageList.includes(numPage + 1))) {
            suivant.toggleAttribute('disabled')
        }
    }

    if (numPage == 25) {
        suivant.style.display = "none";
        soummetre.style.display = "inline-block";
        
    }
    
}
function pagePrecedente() {
    getAnswers();
    resetCheckboxes();
    suivant.removeAttribute('disabled');
    soummetre.style.display = "none";
    suivant.style.display = "inline-block";
    numPage--;
    var source = "./img/"+type+"/"+type+"-"+numPage+".jpg" ;
    monImage.setAttribute("src", source);
    if (pageList.includes(numPage)) {
        var source = "./img/"+type+"/"+type+"-"+numPage+".jpg" ;
        monImage.setAttribute("src", source);

        if (!(pageList.includes(numPage - 1))) {
            precedent.toggleAttribute('disabled')
        }
    }
}
function getAnswers() {
    var checkboxValuesArray = document.querySelectorAll('input[type=checkbox]:checked');
    var checkedValues = Array.from(checkboxValuesArray).map(function(checkbox) {
        return checkbox.value ;
    })   
    answers[numPage] = checkedValues;
}
function resetCheckboxes() {
    // recuperer tous les elements de type checkbox
    // parcourir le tableau contenant ces element
    // il reinitialise chacun de ces elements
    
    Array.from(checkboxArray).map(function(checkbox) {
        checkbox.checked = false;
    })    
    
}

let corrections = {
	b1 : [['B','D'], ['A','D'], ['B'], ['B','C'], ['B'], ['A'], ['B'], ['B'], ['A','D'], ['B'], ['C'], ['B','C'], ['A','D'], ['A','C'], ['B'], ['B'], ['B'], ['A'], ['B'], ['B'], ['A'], ['B'], ['A'], ['B'], ['B']],
	b2 : [['A','D'], ['B','D'], ['B','D'], ['B'], ['A','D'], ['A'], ['A','D'], ['B'], ['B','D'], ['B'], ['B'], ['B','D'], ['A'], ['B'], ['A'], ['B'], ['B'], ['B','C'], ['A'], ['B'], ['A'], ['A'], ['A','C'], ['B','D'], ['B','C']],
	b3 : [['B','D'], ['B','C'], ['B'], ['B','D'], ['B'], ['A'], ['B','C'], ['B'], ['A'], ['B','C'], ['A'], ['A','D'], ['B'], ['B','C'], ['B'], ['A'], ['B','C'], ['A'], ['B'], ['B'], ['A'], ['A'], ['A','C'], ['B','D'], ['B']],
	b4 : [['B','D'], ['A','D'], ['B'], ['A','D'], ['A','C'], ['A'], ['B'], ['A'], ['B'], ['B','C'], ['B'], ['B'], ['A'], ['B'], ['A'], ['B'], ['B'], ['A'], ['B','C'], ['A','D'], ['C'], ['A'], ['B','C'], ['B','D'], ['B','C']],
	b5 : [['A','D'], ['B','D'], ['B','D'], ['B','C'], ['A','D'], ['B'], ['B'], ['B'], ['C'], ['B'], ['B'], ['A'], ['A'], ['B'], ['B'], ['B'], ['A'], ['A'], ['B','D'], ['B'], ['A'], ['A'], ['B','C'], ['A','D'], ['A','D']],
	b6 : [['A','D'], ['B','D'], ['B'], ['A'], ['B'], ['A'], ['B'], ['B'], ['A','D'], ['A'], ['B'], ['B'], ['A'], ['B'], ['A'], ['A'], ['B','D'], ['A','C'], ['B','C'], ['A','D'], ['A','C'], ['A'], ['A'], ['A'], ['A','D']],
	b7 : [['A','D'], ['B','D'], ['B','D'], ['A'], ['A'], ['B'], ['B','D'], ['B'], ['B'], ['A'], ['B'], ['B'], ['B'], ['B','C'], ['A'], ['A'], ['B','C'], ['B'], ['A'], ['A'], ['B'], ['B'], ['B'], ['A','D'], ['A','C']],
	b8 : [['B','D'], ['A'], ['B','C'], ['B','C'], ['A','D'], ['B'], ['A'], ['B'], ['B'], ['A'], ['A','D'], ['A'], ['B','C'], ['A'], ['A'], ['B'], ['B'], ['B'], ['B'], ['B','C'], ['A'], ['B','D'], ['A'], ['B'], ['B']],
	b9 : [['A','C'], ['B','D'], ['A','C'], ['B'], ['B','D'], ['A'], ['A'], ['A'], ['B'], ['B'], ['B','C'], ['A'], ['A','D'], ['B'], ['A','D'], ['B'], ['A','D'], ['B','C'], ['B'], ['A'], ['B'], ['B','C'], ['A'], ['B','C'], ['B']],
	b10 : [['A','D'], ['B'], ['B','D'], ['B'], ['B','C'], ['B','C'], ['A','D'], ['B'], ['B'], ['B'], ['B','C'], ['B'], ['B','C'], ['B','D'], ['B','C'], ['B'], ['B','D'], ['B'], ['B','C'], ['B'], ['B'], ['B'], ['B','C'], ['A'], ['B','D']],
	b11 : [['A','D'], ['B','D'], ['B','D'], ['A','D'], ['A'], ['B'], ['A'], ['B'], ['B','C'], ['B'], ['B'], ['B'], ['A','C'], ['A'], ['B'], ['A','C'], ['A'], ['B','C'], ['A'], ['B','C'], ['B'], ['A'], ['A','D'], ['B'], ['A']],
	b12 : [['A','D'], ['B','D'], ['B'], ['B','C'], ['B'], ['A'], ['A'], ['A'], ['B'], ['B'], ['B'], ['B'], ['B','C'], ['A','D'], ['B'], ['B','C'], ['B','C'], ['A'], ['A'], ['B'], ['A'], ['A'], ['B'], ['B','C'], ['B']],
}

function soummetreTest() {
    getAnswers();
    answers.shift();
    // recuperer les reponses
    // console.log(answers);
    // vérifier les reponses
    // afficher les reponses
    switch (type) {
        case 'B1': 
            for (var i = 0; i < answers.length; i++) {
                for (let j = 0; j < corrections.b1[i].length; j++) {
                    if (answers[i][j] === corrections.b1[i][j]) {
                        console.log('correct');
                        aswers[0][0] = 'B';
                        aswers[0][1] = 'D' 
                    } else {
                        console.log('incorrect');
                    }
                }
            }
            break;
        case 'B2': console.log(corrections.b2); break;
        case 'B3': console.log(corrections.b3); break;
        case 'B4': console.log(corrections.b4); break;
        case 'B5': console.log(corrections.b5); break;
        case 'B6': console.log(corrections.b6); break;
        case 'B7': console.log(corrections.b7); break;
        case 'B8': console.log(corrections.b8); break;
        case 'B9': console.log(corrections.b9); break;
        case 'B10': console.log(corrections.b10); break;
        case 'B11': console.log(corrections.b11); break;
        case 'B12': console.log(corrections.b12); break;
        default: console.log('default');
    }
}
