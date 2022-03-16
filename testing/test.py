 
import urllib.request
import urllib.parse
api = 'NGEzMjM1NzQzMTc0NGM0ZjRhNGM0ZTY2Nzc1MTM1NjU=';
dee = '917000083820';
# def sendSMS(apikey, numbers, sender, message):
#     data =  urllib.parse.urlencode({'apikey': apikey, 'numbers': numbers,
#         'message' : message, 'sender': sender})
#     data = data.encode('utf-8')
#     request = urllib.request.Request("https://api.textlocal.in/send/?")
#     f = urllib.request.urlopen(request, data)
#     fr = f.read()
#     return(fr)
 
# resp =  sendSMS(, '',
#     'Harshit Garg', 'This is your message')
# print (resp)
# #!/usr/bin/env python
 
import urllib.request
import urllib.parse
  
def sendSMS(apikey, numbers, sender, message):
    params = {'apikey': api, 'numbers': numbers, 'message' : message, 'sender': sender}
    f = urllib.request.urlopen('https://api.textlocal.in/send/?'
        + urllib.parse.urlencode(params))
    return (f.read(), f.code)
  
resp, code = sendSMS(api, dee,
    'Harshit Here', 'Test with an ampersand (&) and a £5 note')
print (resp)