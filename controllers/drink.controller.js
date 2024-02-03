const { sql } = require('@vercel/postgres');

const DrinkController = {
    getAll: async(req, res) => {
        try {
            const drinks = await sql`SELECT * FROM drink;`;

            return res.status(200).json({
                message: 'success',
                data: drink.rows,
            });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
}

module.exports = DrinkController;
