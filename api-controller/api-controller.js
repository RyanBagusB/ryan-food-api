const { sql } = require('@vercel/postgres');

const ApiController = {
    create: async (req, res) => {
        try {
            const { name, owner } = req.body;
            const result = await sql`INSERT INTO Pets (Name, Owner) VALUES (${name}, ${owner}) RETURNING *`;
            res.status(201).json({ pet: result.rows[0] });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getAll: async (req, res) => {
        try {
            const result = await sql`SELECT * FROM Pets`;
            res.status(200).json({ pets: result.rows });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await sql`SELECT * FROM Pets WHERE id = ${id}`;
            if (result.rows.length > 0) {
                res.status(200).json({ pet: result.rows[0] });
            } else {
                res.status(404).json({ error: 'Pet not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, owner } = req.body;
            const result = await sql`UPDATE Pets SET Name = ${name}, Owner = ${owner} WHERE id = ${id} RETURNING *`;
            if (result.rows.length > 0) {
                res.status(200).json({ pet: result.rows[0] });
            } else {
                res.status(404).json({ error: 'Pet not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    remove: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await sql`DELETE FROM Pets WHERE id = ${id} RETURNING *`;
            if (result.rows.length > 0) {
                res.status(200).json({ message: 'Pet deleted successfully', pet: result.rows[0] });
            } else {
                res.status(404).json({ error: 'Pet not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = ApiController;
