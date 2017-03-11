var email 	= require("emailjs");
var server 	= email.server.connect({
   user:    "info@cgw.gr",
   password:"cgw5248088",
   host:    "hwsmtp.exmail.qq.com",
   ssl:     true
});

server.send({
   text:    "i hope this works",
   from:    "you <info@cgw.gr>",
   to:      "someone <onlyctonly@gmail.com>",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });
