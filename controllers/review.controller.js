const { sql } = require('@vercel/postgres');

const reviewController = {
    getAll: async(req, res) => {
        try {
            const reviews = await sql`SELECT * FROM review;`;

            return res.status(200).json({
                message: 'success',
                data: reviews.rows,
            });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    create: async(req, res) => {
        try {
            const id = `review-${new Date().getTime()}`;
            const imgUrl = 'images/photo/1';
            const { name, coment } = req.body;
        
            // if (name.length > 10 || coment.length > 60) {
            //   throw new Error('Name should be at most 10 characters and coment should be at most 60 characters');
            // }
        
            if (!name || !coment) {
              throw new Error('name and comment are required');
            }
        
            await sql`INSERT INTO review (id, name, coment, imgurl) VALUES (${id}, ${name}, ${coment}, ${imgUrl});`;
        
            return res.status(201).json({ message: 'success' });
          } catch (error) {
            return res.status(500).json({ error: error.message });
          }
    },
}

module.exports = reviewController;
