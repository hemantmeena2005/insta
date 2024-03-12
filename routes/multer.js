const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Destination folder for uploads
    cb(null, './public/images/uploads');
  },
  filename: function (req, file, cb) {
    // Generating a unique filename using UUID
    const uniqueFilename = uuidv4();
    // Use the unique filename for the uploaded file
    cb(null, uniqueFilename + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
module.exports  = upload;
