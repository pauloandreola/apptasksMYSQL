import crypto from 'crypto';
import multer from 'multer';
import path, { resolve } from 'path';

module.exports = {
  dest: resolve(__dirname, '..', '..', 'tmp', 'avatar'),
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'avatar'));
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(10, (err, hash) => {
        if (err) callback
        const fileName = `${hash.toString('hex')}-${file.originalname}`;
        
        callback(null, fileName)
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (request, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);      
    } else {
      callback(new Error('Invalid file type.'));
    }
  },
}
