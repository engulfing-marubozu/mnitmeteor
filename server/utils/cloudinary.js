const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'mnitmarket', 
    api_key: '785626599348538', 
    api_secret: 'LQ4780hzEWemyvNdI10jtIMLCSk' 
  });

module.exports = {cloudinary};
