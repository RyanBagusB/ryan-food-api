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
            const { petName, ownerName } = req.body;
            if (!petName || !ownerName) throw new Error('Pet and owner names required');
            // await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
          } catch (error) {
            return response.status(500).json({ error: error.message });
          }
          
          const pets = await sql`SELECT * FROM Pets;`
          return response.status(200).json({ pets });
          
    },

    remove: async (req, res) => {
        try {
            //const { id } = req.params;
            res.status(200).json({ message: req.body});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
          //   const { petName, ownerName } = req.body;
          //   if (!petName || !ownerName) throw new Error('Pet and owner names required');
          //   // await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
          // } catch (error) {
          //   return response.status(500).json({ error: error.message });
          // }
          
          // const pets = await sql`SELECT * FROM Pets;`
          // return response.status(200).json({ pets });
    },

}

module.exports = ApiController
