import { connect } from "mongoose";

const createConnection = (url: string = 'mongodb://localhost:3010/trybeflix') => connect(url);

export default createConnection;