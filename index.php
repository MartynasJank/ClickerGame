<!DOCTYPE html>
<html>
    <head>
        <title>Puslapio antraste.</title>
        <link href='https://fonts.googleapis.com/css?family=Oswald:700,300,400&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <meta charset="utf-8"/> 
        <link rel="stylesheet" type="text/css" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>    
    <body>
        
        <div class="inner">
            <div class="side">
                <div class="buy type1" id="type1">
                    <div class="text">Kioskas $500</div>
                    <div class="slidedown">1$ per 1s</div>
                </div>
                <div class="buy type2" id="type2">
                    <div class="text">Parduotuve $1000</div>
                    <div class="slidedown">10$ per 1s</div>
                </div>
                <div class="buy tyoe3" id="type3">
                    <div class="text">Bankas $1500</div>
                    <div class="slidedown">100$ per 1s</div>
                </div>
            </div>

            <div class="getCash" id="button"></div>

            <div class="bellow">
                <div class="half stats" id="stats">
                    <div>Kioskiu skaicius: 0</div>
                    <div>Parduotuviu skaicius: 0</div>
                    <div>Banku skaicius: 0</div>
                </div>
                <div class="half errors" id="errors">
                    Nera klaidu.
                </div>
            </div>
            
            <div class="reset" id="reset">Reset</div>

            <div class="cheats">
                <input type="text" id="cheat" placeholder="Cheats"><button id="cheatbtn">ADD CASH</button>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
</html>














