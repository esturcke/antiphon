// @flow
import api from "./api";
import { PORT, PATH } from "./config";

const app = api({ path: PATH });

app.listen(PORT, () => {
  console.log(`Rest API listening on ${PORT}`);
});
