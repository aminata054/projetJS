var suivant = document.getElementById('suivant');
var precedent = document.getElementById('precedent');
var soummetre = document.getElementById('soummetre');
var commencer = document.getElementById('commencer');
var monImage = document.getElementById('monImage');
var couvImage = document.getElementById('couvImage');
var div = document.getElementById('div1');
var tableau_de_resultat = document.getElementById('tableau_de_resultat');
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
    numPage++;
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
    monImage.style.display = 'none';
    div.style.display = 'none';
    tableau_de_resultat.toggleAttribute('hidden');
    getAnswers();
    answers.shift();

    switch (type) {
        case 'B1': 
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b1[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b1[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b1[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b1[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B2': 
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b2[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b2[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b2[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b2[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B3': 
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b3[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b3[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b3[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b3[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B4':
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b4[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b4[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b4[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b4[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B5':
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b5[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b5[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b5[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b5[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B6':
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b6[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b6[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b6[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b6[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B7':
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b7[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b7[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b7[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b7[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B8':
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b8[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b8[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b8[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b8[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B9':
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b9[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b9[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b9[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b9[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B10':
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b10[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b10[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b10[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b10[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B11':
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b11[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b11[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b11[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b11[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;

        case 'B12':
            for (var i = 0; i < answers.length; i++) {
                k = i + 1;
                for (let j = 0; j < corrections.b12[i].length; j++) {
                    let tr = document.getElementById('q' + k);
                    let tdResponse = document.getElementById("reponse"+k);
                    let tdResultat = document.querySelectorAll("resultat"+k);
                    tdResponse.innerHTML = '';
                    tdResultat.innerHTML = '';
                    if (answers[i][j] === corrections.b12[i][j]) {
                        tr.style.backgroundColor = 'green';
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b12[i][j];
                    } else {
                        tdResponse.innerHTML += answers[i][j];
                        tdResultat.innerHTML += corrections.b12[i][j];
                        tr.style.backgroundColor = 'red';
                    }
                }
            }
        break;
        default: console.log('default');
    }
}
//test 