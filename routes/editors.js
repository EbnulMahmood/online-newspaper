import express from "express";
import { getEditors, 
    createEditor, getEditor, 
    updateEditor, deleteEditor } from "../controllers/editors.js";
const router = express.Router();


router.get('/', getEditors);

router.post('/', createEditor);

router.get('/:id', getEditor);

router.patch('/:id', updateEditor);

router.delete('/:id', deleteEditor);

export default router;