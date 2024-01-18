const { sql } = require('@vercel/postgres');

const ApiController = {
    getAll: async(req, res) => {
        try {
            const result =
              await sql`SELECT * FROM pets;`;
            return res.status(200).json({ pets: result.rows });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

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
}

module.exports = ApiController