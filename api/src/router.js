const { Router } = require('express');
const multer = require('multer');

let storageObject = {
    destination : 'api/uploads/',
    filename : filename()
};

const storage = multer.diskStorage(storageObject);

const router = Router();

function filename (request, file, callback) {
    callback(null, file.originalname);
};

function fileFilter (request, file, callback) {
    if (file.mimetype !== 'image/png') {
        request.fileValidationError = 'Wrong file type';
        callback(null, false, new Error('Wrong file type'));
    }
    else {
        callback(null, true);
    }
};

let uploadObject = {
    fileFilter : fileFilter(),
    storage : storage
};

const upload = multer.upload(uploadObject);

router.post('/upload', upload.single('photo'), (request, response) => {
    if (request.fileValidationError) {
        return response.status(400).json({error : request.fileValidationError});
    }
    else {
        response.status(201).json({success : true});
    }
});

module.exports = router;