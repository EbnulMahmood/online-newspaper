import express from "express";
import { getAdministrators, 
    createEditor, getEditors, deleteEditor } from "../controllers/administrator.js";
const router = express.Router();


router.get('/', getAdministrators);

router.get('/editors', getEditors);

router.post('/editors/:adminId', createEditor);

router.delete('editors/:id', deleteEditor);

// router.get('/:id', getAdministrator);

// router.patch('/:id', updateAdministrator);

// router.delete('/:id', deleteAdministrator);

export default router;