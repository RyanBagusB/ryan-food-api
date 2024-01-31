const { sql } = require('@vercel/postgres');

const dishController = {
    getAll: async(req, res) => {
        try {
            const dishes = await sql`SELECT * FROM dish;`;

            return res.status(200).json({
                message: 'success',
                data: dishes.rows,
            });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
}

module.exports = dishController;
