// @flow
import api from "./api";

const PORT = 3001;
const PATH = "./songs";

const app = api({ path: PATH });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
