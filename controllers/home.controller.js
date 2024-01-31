const { sql } = require('@vercel/postgres');

const homeController = {
    getAll: async(req, res) => {
        try {
            const homes = await sql`SELECT * FROM home;`;

            return res.status(200).json({
                message: 'success',
                data: homes.rows,
            });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
}

module.exports = homeController;
