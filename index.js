let mesImages = ['B01.JPG','B02.JPG','B03.JPG','B04.JPG','B05.JPG','B06.JPG','B07.JPG','B08.JPG','B09.JPG','B10.JPG','B11.JPG','B12.JPG','B14.JPG','B15.JPG','B16.JPG','B17.JPG','B18.JPG','B19.JPG','B20.JPG','B21.JPG','B22.JPG','B23.JPG','B24.JPG','B25.JPG'];
let curseur = 0;


function selected() {

    var select = document.getElementById("choix");
    var selectValue = select.value ;

   

    switch (selectValue) {
        case "B001": page1();
            
            break;

        case "B002": page2();

        break;

        case "B003" : page3();

        break ;

        case "B004":page4() ;

        break;

        case "B005": page5 ();

        break;

        case "B006":page6();

        break;

        case "B007" :page7();

        break;

        case "B008":page8();

        break;

        case "B009" : page9();

        break;

        case "B010" : page10();

        break ;

        case "B011" : page11();

        break;

        case "B012" : page12();

        break;
    
        default:alert("Veuillez choisir un test s'il vous plaît.");
            break;
    }

    
}

    
    


//SERIE UNE

function page1() {

    codeHTML = `
    <body>
    <img id="monImage" src="images/B001/B01.JPG" width="60%" height="60%">
    <div id ="div1">
    <input type="checkbox" id="input"  value="A">A<br>
    <input type="checkbox" id="input"  value="B">B<br>
    <input type="checkbox" id="input"  value="C">C<br>
    <input type="checkbox" id="input"  value="D">D<br>
    <input type="submit" value="suivant" id="button"  onclick="choix1()" >
</div>
</body>
<link rel="stylesheet" href="test.css">

    `;
    document.write(codeHTML);
    
}

/*
function resetcheckbox() {

    var checkboxes = document.querySelectorAll('input[type="checkbox" id="input"]');
var checkedValues = [];


                
for (var i = 0; i < checkboxes.length; i++) {


            if (checkboxes[i].checked) {

                alert("Checked");

                //La méthode push() est utilisée pour ajouter un ou plusieurs éléments à la fin d'un tableau en JavaScript.



                            checkedValues.push(checkboxes[i].value);
                            }
    
}
}*/



function choix1() {

    
    curseur++;
			if (curseur == mesImages.length) {
				curseur = 0;
			}
			monImage.src = 'images/B001/'+mesImages[curseur];

		}


   




    //SERIE DEUX
    function page2() {

        codeHTML = `
    <body>
        <img id="monImage" src="images/B002/B01.JPG" width="60%" height="60%">
        <div id ="div1">
        <input type="checkbox" id="input"  value="A">A<br>
        <input type="checkbox" id="input"  value="B">B<br>
        <input type="checkbox" id="input"  value="C">C<br>
        <input type="checkbox" id="input"  value="D">D<br>
        <input type="submit" value="suivant" id="button"  onclick="choix2()" >
    </div>
</body>
<link rel="stylesheet" href="test.css">
    
        `;
        document.write(codeHTML);
        
    }
    
    
   
   
    
    function choix2() {
        curseur++;
                if (curseur == mesImages.length) {
                    curseur = 0;
                }
                monImage.src = 'images/B002/'+mesImages[curseur];
    
            }
    
    
        
            



        //SERIE TROIS

        function page3() {

            codeHTML = `
    <body>
            <img id="monImage" src="images/B003/B01.JPG" width="60%" height="60%">
            <div id = "div1">
            <input type="checkbox" id="input"  value="A">A<br>
            <input type="checkbox" id="input"  value="B">B<br>
            <input type="checkbox" id="input"  value="C">C<br>
            <input  type="checkbox" id="input"  value="D">D<br>
            <input type="submit" value="suivant" id="button"  onclick="choix3()" >
        </div>
</body>
<link rel="stylesheet" href="test.css">
        
            `;
            document.write(codeHTML);
            
        }
        
        
       
        

        
        function choix3() {
            curseur++;
                    if (curseur == mesImages.length) {
                        curseur = 0;
                    }
                    monImage.src = 'images/B003/'+mesImages[curseur];
        
                }
        
        
           



//SERIE QUATRE

            function page4() {

                codeHTML = `
    <body>
                <img id="monImage" src="images/B004/B01.JPG" width="60%" height="60%">
                <div id="div1">
                <input type="checkbox" id="input"  value="A">A<br>
                <input type="checkbox" id="input"  value="B">B<br>
                <input type="checkbox" id="input"  value="C">C<br>
                <input  type="checkbox" id="input"  value="D">D<br>
                <input type="submit" value="suivant" id="button"  onclick="choix4()" >
            </div>
</body>
<link rel="stylesheet" href="test.css">
            
                `;
                document.write(codeHTML);
                
            }
            
            
            
            
            function choix4() {
                curseur++;
                        if (curseur == mesImages.length) {
                            curseur = 0;
                        }
                        monImage.src = 'images/B004/'+mesImages[curseur];
            
                    }
            
            
               

//SERIE CINQ

function page5() {

    codeHTML = `
    <body>
    <img id="monImage" src="images/B005/B01.JPG" width="60%" height="60%">
    <div id="div1">
    <input type="checkbox" id="input"  value="A">A<br>
    <input type="checkbox" id="input"  value="B">B<br>
    <input type="checkbox" id="input"  value="C">C<br>
    <input  type="checkbox" id="input"  value="D">D<br>
    <input type="submit" value="suivant" id="button"  onclick="choix5()" >
</div>
</body>
<link rel="stylesheet" href="test.css">

    `;
    document.write(codeHTML);
    
}






function choix5() {
    curseur++;
			if (curseur == mesImages.length) {
				curseur = 0;
			}
			monImage.src = 'images/B005/'+mesImages[curseur];

		}


    



    //SERIE SIX


    function page6() {

        codeHTML = `
    <body>
        <img id="monImage" src="images/B006/B01.JPG" width="60%" height="60%">
        <div id="div1">
        <input type="checkbox" id="input"  value="A">A<br>
        <input type="checkbox" id="input"  value="B">B<br>
        <input type="checkbox" id="input"  value="C">C<br>
        <input  type="checkbox" id="input"  value="D">D<br>
        <input type="submit" value="suivant" id="button"  onclick="choix6()" >
    </div>
</body>
<link rel="stylesheet" href="test.css">
    
        `;
        document.write(codeHTML);
        
    }
    
    
    
    
    
    
    function choix6() {
        curseur++;
                if (curseur == mesImages.length) {
                    curseur = 0;
                }
                monImage.src = 'images/B006/'+mesImages[curseur];
    
            }
    
    

    
  //SERIE SEPT
  
  function page7() {

    codeHTML = `
    <body>
    <img id="monImage" src="images/B007/B01.JPG" width="60%" height="60%">
    <div id="div1">
    <input type="checkbox" id="input"  value="A">A<br>
    <input type="checkbox" id="input"  value="B">B<br>
    <input type="checkbox" id="input"  value="C">C<br>
    <input  type="checkbox" id="input"  value="D">D<br>
    <input type="submit" value="suivant" id="button"  onclick="choix7()" >
</div>
</body>
<link rel="stylesheet" href="test.css">

    `;
    document.write(codeHTML);
    
}






function choix7() {
    curseur++;
			if (curseur == mesImages.length) {
				curseur = 0;
			}
			monImage.src = 'images/B007/'+mesImages[curseur];

		}


   


//SERIE EIGHT

function page8() {

    codeHTML = `
    <body>
    <img id="monImage" src="images/B008/B01.JPG" width="60%" height="60%">
    <div id="div1">
    <input type="checkbox" id="input"  value="A">A<br>
    <input type="checkbox" id="input"  value="B">B<br>
    <input type="checkbox" id="input"  value="C">C<br>
    <input  type="checkbox" id="input"  value="D">D<br>
    <input type="submit" value="suivant" id="button"  onclick="choix8()" >
</div>
</body>
<link rel="stylesheet" href="test.css">

    `;
    document.write(codeHTML);
    
}






function choix8() {
    curseur++;
			if (curseur == mesImages.length) {
				curseur = 0;
			}
			monImage.src = 'images/B008/'+mesImages[curseur];

		}


   


   //SERIE NINE
   
   function page9() {

    codeHTML = `
    <body>
    <img id="monImage" src="images/B009/B01.JPG" width="60%" height="60%">
    <div id="div1">
    <input type="checkbox" id="input"  value="A">A<br>
    <input type="checkbox" id="input"  value="B">B<br>
    <input type="checkbox" id="input"  value="C">C<br>
    <input type="checkbox" id="input"  value="D">D<br>
    <input type="submit" value="suivant" id="button"  onclick="choix9()" >
</div>
</body>
<link rel="stylesheet" href="test.css">

    `;
    document.write(codeHTML);
    
}






function choix9() {
    curseur++;
			if (curseur == mesImages.length) {
				curseur = 0;
			}
			monImage.src = 'images/B009/'+mesImages[curseur];

		}


    


    //SERIE TEN 


    function page10() {

        codeHTML = `
    <body>
        <img id="monImage" src="images/B010/B01.JPG" width="60%" height="60%">
        <div id="div1">
        <input type="checkbox" id="input"  value="A">A<br>
        <input type="checkbox" id="input"  value="B">B<br>
        <input type="checkbox" id="input"  value="C">C<br>
        <input type="checkbox" id="input"  value="D">D<br>
        <input type="submit" value="suivant" id="button"  onclick="choix10()" >
    </div>
</body>
<link rel="stylesheet" href="test.css">
    
        `;
        document.write(codeHTML);
        
    }
    
    
    
    
    
    
    function choix10() {
        curseur++;
                if (curseur == mesImages.length) {
                    curseur = 0;
                }
                monImage.src = 'images/B010/'+mesImages[curseur];
    
            }
    
    
        
        


        //SERIE ELEVEN 

        function page11() {

            codeHTML = `
    <body>
            <img id="monImage" src="images/B011/B01.JPG" width="60%" height="60%">
            <div id="div1">
            <input type="checkbox" id="input"  value="A">A<br>
            <input type="checkbox" id="input"  value="B">B<br>
            <input type="checkbox" id="input"  value="C">C<br>
            <input type="checkbox" id="input"  value="D">D<br>
            <input type="submit" value="suivant" id="button"  onclick="choix11()" >
        </div>
</body>
<link rel="stylesheet" href="test.css">
        
            `;
            document.write(codeHTML);
            
        }
        
        
        
        
        
        
        function choix11() {
            curseur++;
                    if (curseur == mesImages.length) {
                        curseur = 0;
                    }
                    monImage.src = 'images/B011/'+mesImages[curseur];
        
                }
        
        
            


            //SERIE TWELVE 


            function page12() {

                codeHTML = `
    <body>
                <img id="monImage" src="images/B012/B01.JPG" width="60%" height="60%">
                <div id ="div1">
                <input type="checkbox" id="input"  value="A">A<br>
                <input type="checkbox" id="input"  value="B">B<br>
                <input type="checkbox" id="input"  value="C">C<br>
                <input  type="checkbox" id="input"  value="D">D<br>
                <input type="submit" value="suivant" id="button"  onclick="choix12()" >
            </div>
</body>
<link rel="stylesheet" href="test.css">
            
                `;
                document.write(codeHTML);
                
            }
            
            
            
            
            
            
            function choix12() {


                curseur++;
                        if (curseur == mesImages.length) {
                            curseur = 0;
                        }
                        monImage.src = 'images/B012/'+mesImages[curseur];
            
                    }
   