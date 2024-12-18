import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 9001;
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Correctly invoked

// Test route
app.get("/", async (request, response) => {
    return response.status(200).json({ "msg": "Hello" });
});

// Files tree route
app.get('/files', async (req, res) => {
    try {
        const fileTree = await generateFileTree(`${__dirname}/user`);
        return res.json({ "tree": fileTree });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// File content route
app.get('/files/content', async (req, res) => {
    try {
        const filePath = req.body.filePath;
        const content = await fs.readFile(path.join(__dirname, 'user', filePath), 'utf-8');
        return res.status(200).json({ content });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => console.log(`🐳 Docker server running on port ${port}`));

// Utility to generate file tree
async function generateFileTree(directory) {
    const tree = {};

    async function buildTree(currentDir, currentTree) {
        const files = await fs.readdir(currentDir);

        for (const file of files) {
            const filePath = path.join(currentDir, file);
            const stat = await fs.stat(filePath);

            if (stat.isDirectory()) {
                currentTree[file] = {};
                await buildTree(filePath, currentTree[file]);
            } else {
                currentTree[file] = null;
            }
        }
    }

    await buildTree(directory, tree);
    return tree;
}
