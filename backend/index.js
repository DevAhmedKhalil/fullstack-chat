const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import axios

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "8e1df0f2-c4d0-4e96-a5e8-5aa978a8380c"}}
    )
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
        return res.status(e.response.status).json(e.response.data);
    } else {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

app.listen(3001);
