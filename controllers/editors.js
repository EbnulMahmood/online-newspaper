// import { v4 as uuidv4 } from 'uuid';


// let editors = []

// export const getEditors = (req, res) => {
//     res.send(editors);
// }

// export const createEditor = (req, res) => {
//     const editor = req.body;
//     editors.push({ ...editor, id: uuidv4() });
//     res.send(`${editor.firstName} added to the database!`);
// }

// export const getEditor = (req, res) => {
//     const { id } = req.params;
//     const foundEditor = editors.find((editor) => editor.id === id);
//     res.send(foundEditor);
// }

// export const updateEditor = (req, res) => {
//     const { id } = req.params;
//     const { firstName, lastName, age } = req.body;
//     const editor = editors.find((editor) => editor.id === id);

//     if (firstName) editor.firstName = firstName;
//     if (lastName) editor.lastName = lastName;
//     if (age) editor.age = age;
    
//     res.send(`Editor with id: ${id} updated!`);
// }

// export const deleteEditor = (req, res) => {
//     const { id } = req.params;
//     editors = editors.filter((editor) => editor.id !== id);
//     res.send(`Editor with id: ${id} deleted!`);
// }