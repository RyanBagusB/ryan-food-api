const { sql } = require('@vercel/postgres');

const searchController = {
    get: async(req, res) => {
        try {
            let { keyword } = req.query;

            if (!keyword || keyword.trim() === "") {
                return res.status(200).json({
                    message: 'success',
                    data: [],
                });
            }
            
            const home = await sql`SELECT id, title FROM home`;
            const dish = await sql`SELECT id, title FROM menu`;
            const drink = await sql`SELECT id, title FROM drink`;

            const data = [
              ...(home.rows || []),
              ...(dish.rows || []),
              ...(drink.rows || []),
            ];
      
            const filteredData = data.filter(item =>
                item.title.toLowerCase().includes(keyword.toLowerCase())
              );

            return res.status(200).json({
                message: 'success',
                data: filteredData,
            });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
}

module.exports = searchController;
