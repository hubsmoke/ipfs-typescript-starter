import { create } from "ipfs-http-client";

export default (async () => {
  // connect to the default API address http://localhost:5001
  const client = create();

  // call Core API methods
  const data = await client.add("Hello world!");

  console.log(data);
})();
