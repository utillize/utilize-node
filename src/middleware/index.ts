import { handleCors } from "./cors";
import { handleBodyRequestParsing } from "./bodyParser";
import { handleCompression } from "./compression";

export default [handleCors, handleBodyRequestParsing, handleCompression];