import articles from '../db/article.js';
import editors from '../db/editor.js';
import { v4 as uuidv4 } from 'uuid';


export const getArticles = (req, res) => {
    res.send(articles);
}

export const createArticle = (req, res) => {
    try {
        const article = req.body;
        let activeEditorId;
        editors.forEach(editor => {
            activeEditorId = editor.id;
        })
        articles.push({ ...article, id: uuidv4(), editorId: activeEditorId });
        res.send(`${article.title} added to the database!`);
    } catch (error) {
    }
}

export const getArticle = (req, res) => {
    const { id } = req.params;
    const foundArticle = articles.find((article) => article.id === id);
    res.send(foundArticle);
}

export const updateArticle = (req, res) => {
    try {
        const { id } = req.params;
        const { title, body } = req.body;
        const article = articles.find((article) => article.id === id);
    
        if (title) article.title = title;
        if (body) article.body = body;
        
        res.send(`Article with id: ${id} updated!`);
    } catch (error) {
        
    }
}

export const deleteArticle = (req, res) => {
    try {
        const { id } = req.params;
        articles = articles.filter((article) => article.id !== id);
        res.send(`Article with id: ${id} deleted!`);
    } catch (error) {
    }
}