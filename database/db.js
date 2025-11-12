const fs = require('fs').promises;
const path = require('path');

const DB_FILE = path.join(__dirname, 'watches.json');

async function writeDB(data) {
    await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

async function readDB() {
    try {
        const data = await fs.readFile(DB_FILE, 'utf-8');
        return JSON.parse(data);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            await writeDB([]);
            return [];
        }
        throw err;
    }
}

module.exports = {
    readDB,
    writeDB
}