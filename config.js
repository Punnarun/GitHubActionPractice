const crypto = require("crypto");
const crpyto_orig_createHash = crypto.createHash;
crypto.createHash =  algorithm => crpyto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);