import admin from '../db/admin.js';
import editors from '../db/editor.js';
import { v4 as uuidv4 } from 'uuid';


// let administrators = [
//     {
//         firstName: "xxx",
//         lastName: "Doe",
//         age: 35,
//         id: "94a3ba39-72c5-4d8b-a7be-bb8a8ddead7e"
//     }
// ]

const checkAdmin = (id) => {
    // admin.forEach(el => {
    //     if (id.toString() === el.id.toString()) {
    //         console.log(typeof id)
    //         console.log("id"+typeof el.id)
    //     }
    // })
    // return false;
    return id === "94a3ba39-72c5-4d8b-a7be-bb8a8ddead7e";
}

export const getAdministrators = (req, res) => {
    admin.forEach(el => {
        console.log(checkAdmin(el.id));
    })
    res.send(admin);
}

export const getEditors = (req, res) => {
    res.send(editors);
}

export const createEditor = (req, res) => {
    try {
        const editor = req.body;
        const { adminId } = req.params;
        editors.forEach(editor => {
            editor.status = false;
        })
        if (checkAdmin(adminId)) {
            editors.push({ ...editor, id: uuidv4(), status: true });
            res.send(`${editor.firstName} added to the database!`);
        } else {
            res.send('wrong admin pass!');
        }
    } catch (error) {
        
    }
}

export const deleteEditor = (req, res) => {
    try {
        const { id } = req.params;
        editors = editors.filter((editor) => editor.id !== id);
        res.send(`Editor with id: ${id} deleted!`);
    } catch (error) {
        
    }
}

// export const createAdministrator = (req, res) => {
//     const administrator = req.body;
//     administrators.push({ ...administrator, id: uuidv4() });
//     res.send(`${administrator.firstName} added to the database!`);
// }

// export const getAdministrator = (req, res) => {
//     const { id } = req.params;
//     const foundAdministrator = Administrators.find((administrator) => administrator.id === id);
//     res.send(foundAdministrator);
// }

// export const updateAdministrator = (req, res) => {
//     const { id } = req.params;
//     const { firstName, lastName, age } = req.body;
//     const administrator = administrators.find((administrator) => administrator.id === id);

//     if (firstName) administrator.firstName = firstName;
//     if (lastName) administrator.lastName = lastName;
//     if (age) administrator.age = age;
    
//     res.send(`Administrator with id: ${id} updated!`);
// }

// export const deleteAdministrator = (req, res) => {
//     const { id } = req.params;
//     administrators = administrators.filter((administrator) => administrator.id !== id);
//     res.send(`Administrator with id: ${id} deleted!`);
// }