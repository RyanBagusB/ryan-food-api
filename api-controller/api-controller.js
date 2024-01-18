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
            const petName = request.body.petName;
            const ownerName = request.body.ownerName;
            if (!petName || !ownerName) throw new Error('Pet and owner names required');
            await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
            return response.status(200).json({ message: "Berhasil menambahkan pet" });
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

}

module.exports = ApiController