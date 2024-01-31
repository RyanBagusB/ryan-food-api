const { sql } = require('@vercel/postgres');

const menuController = {
    getAll: async(req, res) => {
        try {
            const menus = await sql`SELECT * FROM menu;`;

            return res.status(200).json({
                message: 'success',
                data: menus.rows,
            });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
}

module.exports = menuController;
