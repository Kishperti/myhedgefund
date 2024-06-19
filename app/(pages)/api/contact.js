
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxeQ1CorsITy_gztn0-vHaoh3_S7ntpdbngyNfYN7DfleIfKr7Re3SdEVIlLdM8bsowzw/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });
  
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: 'An error occurred while submitting the form.' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  