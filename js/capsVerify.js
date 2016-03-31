   // var Recaptcha = require('recaptcha');
    var recaptcha = new Recaptcha({
        secret: '6Le2fxcTAAAAALPmslDGpdstvVMfabMse-RXac2E',
        verbose: false
    });
    app.get('/check', function(req, res){
        // get the user response (from reCAPTCHA) 
        var userResponse = req.query['g-recaptcha-response', "ind3x.html"];
 
        recaptcha.checkResponse(userResponse, function(error, response){
            if(error){
                // an internal error? 
                res.status(400).render('400', {
                    message: error.toString()
                });
                return;
            }
 
            if(response.success){
                // save session.. create user.. save form data.. render page, return json.. etc. 
                window.location='ind3x.html';
                console.log("Terima kasih!");
            }else{
                // show warning, render page, return a json, etc. 
                console.log("Ulang lagi deh :P")
            }
        });
    });
