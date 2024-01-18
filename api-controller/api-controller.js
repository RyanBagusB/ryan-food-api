const { sql } = require('@vercel/postgres');

const ApiController = {
    getAll: async(req, res) => {
        try {
            const pets = await sql`SELECT * FROM Pets;`;
            return res.status(200).json({ pets: result.rows });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
}

module.exports = ApiController