import multer from "multer";

// Configure multer for file uploads
const upload = multer({ dest: 'backend/uploads/' });

export default upload;